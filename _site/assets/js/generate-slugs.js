#!/usr/bin/env node
/**
 * generate-slugs.js — Assign stable short permalinks to all pages/ articles
 *
 * WHAT IT DOES:
 *   1. Reads every .md file in pages/ (except submission_markdown_template)
 *   2. Derives a deterministic 6-char hex slug from SHA256(title)
 *   3. Saves the slug → page mapping to assets/docs/page-slugs.json
 *   4. Injects / updates `permalink: /p/XXXXXX/` in each page's front matter
 *   5. Rewrites internal links in newsletter/ and nav/ source files
 *   6. Updates the pagesPaths array in assets/js/generate-pdf.js
 *
 * USAGE:
 *   node assets/js/generate-slugs.js           # dry run (preview only)
 *   node assets/js/generate-slugs.js --apply   # write all changes
 *
 * IDEMPOTENT: safe to run multiple times — same title always → same slug.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const SLUG_FILE = path.join(ROOT, 'assets', 'docs', 'page-slugs.json');
const PDF_SCRIPT = path.join(ROOT, 'assets', 'js', 'generate-pdf.js');

const DRY_RUN = !process.argv.includes('--apply');
if (DRY_RUN) console.log('\n🔍  DRY RUN — pass --apply to write changes.\n');

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Extract front-matter value for a given key from raw file content */
function fmGet(content, key) {
    const match = content.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
    return match ? match[1].trim() : null;
}

/** Generate a stable 6-char hex slug from a string */
function makeSlug(str) {
    return crypto.createHash('sha256').update(str).digest('hex').slice(0, 6);
}

/** Write a file, or just log if dry-run */
function writeFile(filePath, content, label) {
    if (DRY_RUN) {
        console.log(`  [dry-run] would write: ${path.relative(ROOT, filePath)}`);
    } else {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✅ ${label || path.relative(ROOT, filePath)}`);
    }
}

// ─── Step 1: Collect pages and generate slugs ─────────────────────────────────

const SKIP = ['submission_markdown_template.md'];

const files = fs.readdirSync(PAGES_DIR)
    .filter(f => f.endsWith('.md') && !SKIP.includes(f));

// Load existing slug map (if any) so we never reassign an existing slug
let slugMap = {};
if (fs.existsSync(SLUG_FILE)) {
    slugMap = JSON.parse(fs.readFileSync(SLUG_FILE, 'utf8'));
}

// Build slug entries: existing slugs are reused by slug key lookup
const entries = [];   // { slug, title, file, permalink, oldUrl, oldUrlEncoded, oldUrlAbsolute }

for (const filename of files) {
    const filePath = path.join(PAGES_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const title = fmGet(content, 'title');

    if (!title) {
        console.warn(`  ⚠️  No title found in ${filename} — skipping`);
        continue;
    }

    const slug = makeSlug(title);
    const permalink = `/p/${slug}/`;

    // Jekyll turns "My Title" into "My%20Title.html" for the old URL
    const encodedTitle = encodeURIComponent(title).replace(/'/g, '%27');
    const oldUrlLocal = `/pages/${encodedTitle}.html`;
    const oldUrlRelative = `/pages/${encodedTitle}`;
    const oldUrlAbsolute = `https://opendanes.org/pages/${encodedTitle}.html`;

    entries.push({
        slug, title, filename, filePath, content, permalink,
        oldUrlLocal, oldUrlRelative, oldUrlAbsolute
    });

    console.log(`  📄 "${title}"\n     slug: ${slug}  →  ${permalink}`);
}

// ─── Step 2: Save slug map to assets/docs/page-slugs.json ───────────────────

const newSlugMap = {};
for (const e of entries) {
    newSlugMap[e.slug] = {
        title: e.title,
        file: `pages/${e.filename}`,
        permalink: e.permalink,
        oldUrl: e.oldUrlLocal,
    };
}

const slugJson = JSON.stringify(newSlugMap, null, 2) + '\n';
console.log('\n📝 Writing slug map to assets/docs/page-slugs.json');
writeFile(SLUG_FILE, slugJson, 'assets/docs/page-slugs.json');

// ─── Step 3: Patch front matter in each page ─────────────────────────────────

console.log('\n📝 Patching front matter permalinks');

for (const e of entries) {
    let updated = e.content;
    const existingPermalink = fmGet(e.content, 'permalink');

    if (existingPermalink === e.permalink) {
        console.log(`  ⏭️  Already set: ${e.filename}`);
        continue;
    }

    if (existingPermalink) {
        // Replace existing permalink line
        updated = updated.replace(
            /^permalink:.*$/m,
            `permalink: ${e.permalink}`
        );
    } else {
        // Insert after the opening --- (handle both LF and CRLF)
        updated = updated.replace(
            /^---[\r\n]+/,
            `---\npermalink: ${e.permalink}\n`
        );
    }

    writeFile(e.filePath, updated, `pages/${e.filename}`);
}

// ─── Step 4: Rewrite internal links in source files ──────────────────────────

const SOURCE_GLOBS = [
    path.join(ROOT, 'newsletter'),
    path.join(ROOT, 'nav'),
];

const sourceFiles = [];
for (const dir of SOURCE_GLOBS) {
    if (!fs.existsSync(dir)) continue;
    fs.readdirSync(dir)
        .filter(f => f.endsWith('.md') || f.endsWith('.html'))
        .forEach(f => sourceFiles.push(path.join(dir, f)));
}

console.log('\n🔗 Scanning source files for old page links');

for (const srcPath of sourceFiles) {
    let content = fs.readFileSync(srcPath, 'utf8');
    let changed = false;

    for (const e of entries) {
        const newAbsolute = `https://opendanes.org${e.permalink}`;
        const newRelative = `{{site.baseurl}}${e.permalink}`;

        // Absolute external links: https://opendanes.org/pages/Title.html
        if (content.includes(e.oldUrlAbsolute)) {
            content = content.split(e.oldUrlAbsolute).join(newAbsolute);
            changed = true;
            console.log(`  🔄 ${path.basename(srcPath)}: replaced absolute link → ${newAbsolute}`);
        }

        // Local links with .html suffix: /pages/Title.html
        if (content.includes(e.oldUrlLocal)) {
            content = content.split(e.oldUrlLocal).join(`${e.permalink}`);
            changed = true;
            console.log(`  🔄 ${path.basename(srcPath)}: replaced local link → ${e.permalink}`);
        }

        // Local links without .html: /pages/Title (used in Liquid templates)
        if (content.includes(e.oldUrlRelative + '"') || content.includes(e.oldUrlRelative + ')')) {
            content = content
                .split(e.oldUrlRelative + '"').join(e.permalink + '"')
                .split(e.oldUrlRelative + ')').join(e.permalink + ')');
            changed = true;
            console.log(`  🔄 ${path.basename(srcPath)}: replaced relative link → ${e.permalink}`);
        }

        // Liquid baseurl variant: {{site.baseurl}}/pages/Title.html
        const liquidOld = `{{site.baseurl}}/pages/${e.title.replace(/ /g, '%20')}.html`;
        if (content.includes(liquidOld)) {
            content = content.split(liquidOld).join(newRelative);
            changed = true;
        }
    }

    if (changed) writeFile(srcPath, content, path.relative(ROOT, srcPath));
}

// ─── Step 5: Update pagesPaths in generate-pdf.js ────────────────────────────

console.log('\n📝 Updating pagesPaths in generate-pdf.js');

let pdfScript = fs.readFileSync(PDF_SCRIPT, 'utf8');
const newPaths = entries.map(e => `        '${e.permalink}',`).join('\n');

// Replace the pagesPaths array contents
const pathsRegex = /(pagesPaths:\s*\[)([\s\S]*?)(\s*\],)/;
const match = pdfScript.match(pathsRegex);
if (match) {
    pdfScript = pdfScript.replace(pathsRegex, `$1\n${newPaths}\n    $3`);
    writeFile(PDF_SCRIPT, pdfScript, 'assets/js/generate-pdf.js');
} else {
    console.warn('  ⚠️  Could not find pagesPaths array in generate-pdf.js');
}

// ─── Done ─────────────────────────────────────────────────────────────────────

console.log(DRY_RUN
    ? '\n✅ Dry run complete. Run with --apply to write all changes.\n'
    : '\n✅ All done! Run `npm run build` to rebuild with the new permalinks.\n'
);
