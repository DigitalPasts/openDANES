#!/usr/bin/env node
/**
 * generate-pdf.js — Convert openDANES Jekyll pages to PDF using Puppeteer
 *
 * SETUP (run once, with Google Drive sync paused):
 *   npm install puppeteer-core --save-dev
 *
 * USAGE:
 *   # Single page by URL path:
 *   node assets/js/generate-pdf.js /pages/my-article
 *
 *   # All pages in the /pages/ collection:
 *   node assets/js/generate-pdf.js --all-pages
 *
 *   # All newsletters:
 *   node assets/js/generate-pdf.js --all-newsletters
 *
 *   # Custom base URL (e.g. production):
 *   node assets/js/generate-pdf.js /pages/my-article --base-url https://opendanes.org
 *
 * OUTPUT:
 *   PDFs are saved to _pdf/ in the project root.
 *   Filename is derived from the page URL path.
 */

const puppeteer = (() => {
    try {
        return require('puppeteer-core');
    } catch {
        // Fall back to globally installed puppeteer-core
        const globalPath = require('child_process')
            .execSync('npm root -g').toString().trim();
        return require(require('path').join(globalPath, 'puppeteer-core'));
    }
})();
const fs = require('fs');
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────

const CONFIG = {
    baseUrl: 'http://localhost:4000',

    // Path to your locally installed Chrome / Chromium.
    // Update this if Chrome is installed elsewhere on your system.
    chromePaths: [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/usr/bin/google-chrome',
        '/usr/bin/chromium-browser',
    ],

    outputDir: path.join(__dirname, '..', '..', 'assets', 'pdf'),

    pdf: {
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
        displayHeaderFooter: true,
        headerTemplate: `
      <div style="font-size:9px; font-family:'Taviraj',serif; color:#52053E;
                  width:100%; padding:0 15mm; box-sizing:border-box;
                  border-bottom:1px solid #e3ad5b; margin-bottom:4px;">
        openDANES
      </div>`,
        footerTemplate: `
      <div style="font-size:9px; font-family:'Taviraj',serif; color:#666;
                  width:100%; padding:0 15mm; box-sizing:border-box; text-align:right;">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>`,
    },

    // CSS injected before printing — hides nav, footer, and interactive elements
    printCSS: `
    nav, footer, .toc,
    #search, .pagefind-ui,
    .fas.fa-arrow-up, a[href="#top"],
    .annotator-frame, hypothesis-adder,
    iframe[src*="hypothes.is"], iframe[src*="hypothesis"] { display: none !important; }

    body { font-size: 12pt; }

    .content { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }

    /* Author card image: constrain to a reasonable size */
    .card-image-authors { max-width: 80px !important; flex-shrink: 0; }
    .card-image-authors img { max-width: 80px !important; height: auto !important; }

    /* Only show URL after plain text links — not icon or image links */
    a { color: #52053E; text-decoration: underline; }

    /* Author card layout: keep image and names side by side */
    .authors-container {
      display: flex !important;
      flex-direction: row !important;
      align-items: flex-start !important;
      gap: 12px !important;
    }
    .card-image-authors { max-width: 80px !important; flex-shrink: 0 !important; }
    .card-image-authors img { max-width: 80px !important; height: auto !important; }
    .authors { flex: 1 !important; }

    pre, code { page-break-inside: avoid; }
    h2, h3, h4 { page-break-after: avoid; }
    img { max-width: 100%; page-break-inside: avoid; }

    /* Author card: compact layout, always fits one page */
    .author-card {
      font-size: 9pt !important;
      padding: 10px 12px !important;
      margin: 0 !important;
      page-break-after: always;
      page-break-inside: avoid;
    }
    .author-card p, .author-card div { margin: 2px 0 !important; padding: 0 !important; }
    .author-card .dates p { font-size: 8.5pt !important; }
    .author-card .affiliations { font-size: 8.5pt !important; }
    .author-card .card-summary p { font-size: 9pt !important; }
    .author-card .card-tags p { font-size: 8.5pt !important; }
    .author-card .difficulty p, .author-card .read-time p { font-size: 8.5pt !important; }
    .author-card hr { margin: 4px 0 !important; }
    .author-card .peer-review { font-size: 8.5pt !important; }
    .author-card .author-box1, .author-card .author-box2 { padding: 0 !important; }
    .author-card .dates-actions { display: flex !important; flex-direction: row !important; align-items: flex-start !important; justify-content: space-between !important; gap: 8px !important; }
    .author-card .download-buttons { display: flex !important; flex-direction: column !important; gap: 4px !important; }
    .author-card .btn-download { font-size: 7pt !important; padding: 2px 6px !important; line-height: 1 !important; border-radius: 3px !important; text-decoration: none !important; }
  `,

    // URL paths to generate when using --all-pages
    pagesPaths: [
        '/p/e0112f/',
        '/p/23e8f5/',
        '/p/d7251a/',
        '/p/38bf88/',


    ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function findChrome() {
    for (const p of CONFIG.chromePaths) {
        if (fs.existsSync(p)) return p;
    }
    throw new Error(
        'Chrome not found. Update the chromePaths array in the script to point to your Chrome installation.'
    );
}

function urlToFilename(urlPath) {
    return urlPath
        .replace(/^\//, '')           // strip leading slash
        .replace(/\//g, '_')          // slashes → underscores
        .replace(/[^a-zA-Z0-9_\-().]/g, '-') // sanitise
        .replace(/-+/g, '-')          // collapse hyphens
        + '.pdf';
}

function ensureOutputDir() {
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${CONFIG.outputDir}`);
    }
}

// ─── Core PDF generation ──────────────────────────────────────────────────────

async function generatePDF(browser, urlPath) {
    const url = `${CONFIG.baseUrl}${urlPath}`;
    const filename = urlToFilename(urlPath);
    const outputPath = path.join(CONFIG.outputDir, filename);

    console.log(`\n📄 Generating: ${url}`);

    const page = await browser.newPage();

    try {
        await page.setViewport({ width: 1200, height: 900 });

        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (req.url().includes('hypothes.is') || req.url().includes('hypothesis')) {
                req.abort();
            } else {
                req.continue();
            }
        });

        const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        if (!response.ok()) {
            console.warn(`  ⚠️  HTTP ${response.status()} — skipping`);
            return null;
        }

        // Remove Hypothesis sidebar from the DOM entirely
        await page.evaluate(() => {
            document.querySelectorAll(
                'iframe[src*="hypothes.is"], iframe[src*="hypothesis"], .annotator-frame, hypothesis-adder'
            ).forEach(el => el.remove());
        });

        // Screenshot embed iframes (e.g. Flourish) and replace with static images.
        // Cross-origin iframes never render in Puppeteer PDF, so we capture them separately.
        const iframeSelectors = ['.flourish-embed-iframe', 'iframe[src*="flo.uri.sh"]'];
        for (const selector of iframeSelectors) {
            const frames = await page.$$(selector);
            for (const frameEl of frames) {
                try {
                    const src = await frameEl.evaluate(el => el.src);
                    const dims = await frameEl.evaluate(el => ({
                        w: Math.max(el.offsetWidth, 800),
                        h: Math.max(el.offsetHeight, 500),
                    }));

                    console.log(`  🖼️  Screenshotting iframe: ${src.substring(0, 60)}...`);
                    const iframePage = await browser.newPage();
                    await iframePage.setRequestInterception(true);
                    iframePage.on('request', r => r.continue());
                    await iframePage.setViewport({ width: dims.w, height: dims.h });
                    await iframePage.goto(src, { waitUntil: 'networkidle2', timeout: 30000 });
                    // Give JS visualizations extra time to fully render
                    await new Promise(r => setTimeout(r, 3000));
                    const screenshot = await iframePage.screenshot({ encoding: 'base64' });
                    await iframePage.close();

                    // Replace the iframe (and its parent flourish credit div) with the image
                    await frameEl.evaluate((el, b64) => {
                        const img = document.createElement('img');
                        img.src = `data:image/png;base64,${b64}`;
                        img.style.cssText = 'width:100%;height:auto;display:block;border:1px solid #ddd;';
                        img.alt = 'Interactive visualisation (rendered for print)';
                        el.replaceWith(img);
                        // Also hide the "Made with Flourish" credit div that follows
                        const next = img.nextElementSibling;
                        if (next && next.querySelector('.flourish-credit')) next.style.display = 'none';
                    }, screenshot);
                } catch (err) {
                    console.warn(`  ⚠️  Could not screenshot iframe: ${err.message}`);
                }
            }
        }

        // Inject print styles

        await page.addStyleTag({ content: CONFIG.printCSS });

        // Wait for fonts to finish loading
        await page.evaluate(() => document.fonts.ready);

        // Auto-scale author card to guarantee it fits one A4 page
        // A4 printable height with 20mm top+bottom margins = ~257mm = ~971px at 96dpi
        const PAGE_HEIGHT_PX = 971;
        await page.evaluate((maxH) => {
            const card = document.querySelector('.author-card');
            if (!card) return;
            const h = card.getBoundingClientRect().height;
            if (h > maxH) {
                const scale = maxH / h;
                card.style.setProperty('zoom', scale.toFixed(4), 'important');
                console.log(`author-card scaled to ${(scale * 100).toFixed(1)}%`);
            }
        }, PAGE_HEIGHT_PX);

        const slugMatch = urlPath.match(/\/p\/([a-f0-9]+)/);
        const slugLabel = slugMatch ? `: ${slugMatch[1]}` : '';
        const headerTemplate = `<div style="font-size:9px;font-family:'Taviraj',serif;color:#52053E;width:100%;padding:0 15mm;box-sizing:border-box;border-bottom:1px solid #e3ad5b;">OpenDANES${slugLabel}</div>`;

        const pdf = await page.pdf({
            path: outputPath,
            ...CONFIG.pdf,
            headerTemplate,
        });

        const sizeKB = Math.round(fs.statSync(outputPath).size / 1024);
        console.log(`  ✅ Saved: ${filename} (${sizeKB} KB)`);
        return outputPath;

    } catch (err) {
        console.error(`  ❌ Error: ${err.message}`);
        return null;
    } finally {
        await page.close();
    }
}

// ─── Entry point ─────────────────────────────────────────────────────────────

async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes('--help')) {
        console.log(`
Usage:
  node assets/js/generate-pdf.js <url-path>          # single page
  node assets/js/generate-pdf.js --all-pages         # all tutorial/white-paper pages
  node assets/js/generate-pdf.js --all-newsletters   # all newsletter pages

Examples:
  node assets/js/generate-pdf.js /pages/How to Annotate Cuneiform Texts
  node assets/js/generate-pdf.js --all-pages --base-url https://opendanes.org
`);
        process.exit(0);
    }

    // Override base URL if provided
    const baseUrlIdx = args.indexOf('--base-url');
    if (baseUrlIdx !== -1 && args[baseUrlIdx + 1]) {
        CONFIG.baseUrl = args[baseUrlIdx + 1];
        console.log(`🌐 Using base URL: ${CONFIG.baseUrl}`);
    }

    let paths = [];

    if (args.includes('--all-pages')) {
        paths = CONFIG.pagesPaths;
    } else if (args.includes('--all-newsletters')) {
        // Discover newsletters dynamically from the sitemap
        const http = require('http');
        await new Promise((resolve) => {
            http.get(`${CONFIG.baseUrl}/sitemap.xml`, (res) => {
                let data = '';
                res.on('data', (chunk) => (data += chunk));
                res.on('end', () => {
                    const matches = [...data.matchAll(/<loc>[^<]*?\/newsletter\/([^<]+)<\/loc>/g)];
                    paths = matches.map((m) => `/newsletter/${m[1]}`);
                    resolve();
                });
            }).on('error', () => {
                console.error('Could not fetch sitemap. Is Jekyll running?');
                process.exit(1);
            });
        });
    } else {
        // Treat first non-flag argument as URL path
        paths = [args.find((a) => !a.startsWith('--'))];
    }

    if (paths.length === 0) {
        console.error('No pages to generate.');
        process.exit(1);
    }

    ensureOutputDir();

    const executablePath = findChrome();
    console.log(`🖥️  Using Chrome at: ${executablePath}`);

    const browser = await puppeteer.launch({
        executablePath,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const results = [];
    for (const urlPath of paths) {
        const result = await generatePDF(browser, urlPath);
        results.push(result);
    }

    await browser.close();

    const succeeded = results.filter(Boolean).length;
    console.log(`\n✨ Done! ${succeeded}/${paths.length} PDF(s) saved to ${CONFIG.outputDir}\n`);
}

main().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
});
