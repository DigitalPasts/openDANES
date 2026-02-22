# Adding a New Page to openDANES

## 1. Ensure yaml validity

the template yaml is:

```yaml
---
layout: default+toc          # use default-main for pages without a TOC
type: tutorial               # or: white-paper
permalink:                   # leave blank — filled in by generate-slugs (step 3)
title: Your Page Title
banner-image-source: null    # URL for the banner image credit link, or null
authors:
  author1:
    name: Author Name
    affiliation: Institution
    email: email@example.com
    orcid: 0000-0000-0000-0000   # or null
    academia: null
    github: null
tags:
  - tag1
  - tag2
summary: One or two sentence summary of the page.
difficulty: beginner         # beginner | intermediate | advanced | null
submit-date: YYYY-MM-DD
publish-date: null
peer-review-date: null
update-date: null
reviewers: null
doi: null
---
```

## 2. Assign a short permalink

Run the slug generator to assign a stable 6-character short URL (`/p/XXXXXX/`) to the new page and update all related files:

```bash
npm run slugs:apply
```

This will:
- Add `permalink: /p/XXXXXX/` to the new page's front matter
- Update `assets/docs/page-slugs.json` with the new entry
- Update `assets/js/generate-pdf.js` so the page is included in PDF generation

> **Stable IDs**: The slug is derived from the page title via SHA-256, so running the script again always produces the same ID. Keep the title consistent once published.

## 3. Build the site locally

```bash
npm run build
# then serve:
bundle exec jekyll serve --skip-initial-build
```

Visit `http://localhost:4000/p/XXXXXX/` to preview.

## 4. Generate a PDF (optional)

```bash
npm run pdf -- /p/XXXXXX/
```

PDFs are saved to `_pdf/`.

## Quick reference

| Command | What it does |
|---|---|
| `npm run build` | Jekyll build + Pagefind index |
| `npm run serve` | Full build then serve locally |
| `npm run slugs:apply` | Assign/update permalinks for all pages |
| `npm run pdf:pages` | Generate PDFs for all tutorials/white-papers |
| `npm run pdf -- /p/XXXX/` | Generate PDF for a single page |
