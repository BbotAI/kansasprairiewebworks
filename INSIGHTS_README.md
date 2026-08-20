# /insights/ — KPW Tech Brief

**Do not hand-edit anything in `insights/` or `images/insights/`.** Both are
generated from the `kpw-tech-brief` repo and any manual change is overwritten
on the next build.

Source of truth: `../kpw-tech-brief`

---

## What this is

An authority publication at `kansasprairiewebworks.com/insights/` — sourced
analysis of AI, search, payments, security, tokenization and the
infrastructure underneath them, written for a senior reader and connected back
to what KPW sells.

It is a **subdirectory, not a subdomain**, on purpose. Google treats a
subdomain as substantially a separate site, so authority earned at
`blog.kansasprairiewebworks.com` largely does not flow to this domain. The
Tech Brief exists to build the business's own authority, so it lives on the
business's own domain.

No DNS change, no separate Cloudflare project, no new Search Console property.
It indexes exactly like `service-web-design.html`.

## What it added to this repo

```
insights/                       7 pages — hub, methodology, 5 articles
images/insights/                heroes (webp) + social cards (jpg)
images/kpw-prairie-wide.webp    optimized copies of two existing heroes,
images/kpw-hero-storm.webp      originals untouched
sitemap.xml                     7 appended <url> entries
```

**Nothing existing was modified.** No page, URL, redirect, `styles.css`, or
`main.js` was touched. Every article's `<head>` matches the rest of the site —
same gtag, favicons, manifest, fonts, `styles.css`, `google-site-verification`
— plus article timestamps, Twitter cards, and three JSON-LD blocks
(`BlogPosting`, `BreadcrumbList`, `FAQPage`).

Articles use root-relative asset paths (`/styles.css`, `/images/...`) because
they sit one directory down, where this site's relative paths would break.

## Publishing a new brief

From the other repo:

```bash
cd ../kpw-tech-brief
npm run brief          # scan, write, image, build. Publishes nothing.
```

Read `kpw-tech-brief/preview/<slug>.html`, then from here:

```bash
git add insights/ images/insights/ sitemap.xml
git commit -m "Tech Brief: <title>"
git push
```

`git push` alone does nothing — `git add` is what stages new files.

To undo: `git revert HEAD && git push`.

## Blogger is unaffected

`blog.kansasprairiewebworks.com` keeps the local-service lane and its Agency
Brain → Make.com pipeline, unchanged. One home per article; never publish the
same piece to both.
