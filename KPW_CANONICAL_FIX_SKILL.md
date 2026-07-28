# KPW CANONICAL TAG FIX SKILL
# Fixes Google Search Console "Alternate page with proper canonical tag" errors
# Apply to: kpw-build, mikes_services_llc, pro_cleaning_services, KPW-TIER4-TEMPLATE
# Run once per repo. Autonomous mode. Single report at end.

---

## WHAT THIS FIXES

Three GSC issues all caused by missing or incorrect canonical tags:

1. **index.html as alternate page**
   `/index.html` and `/` serve the same content. Google treats `/index.html`
   as a duplicate. Fix: canonical on every HTML page must point to the
   clean URL without `/index.html`.

2. **Blogger ?m=1 mobile URL duplicates**
   Blogger auto-generates `?m=1` mobile versions of every post.
   Google sees both as separate pages. Fix: add canonical pointing to
   the non-?m=1 URL in the Blogger theme/template.

3. **Duplicate without user-selected canonical**
   Pages with no canonical tag at all. Fix: every HTML page must have
   a self-referencing canonical pointing to its clean canonical URL.

---

## OPERATING INSTRUCTIONS

Autonomous mode. Read SKILL.md first if present in the repo.
Execute all steps in order. Single report at end.

**This skill runs from inside ONE client repo at a time.**
Run it separately in each repo:
- kpw-build
- mikes_services_llc  
- pro_cleaning_services
- KPW-TIER4-TEMPLATE (update template for future builds)

---

## STEP 1 — IDENTIFY THE DOMAIN

Read the repo you're in and identify:
- The primary domain (e.g. kansasprairiewebworks.com)
- The blog subdomain (e.g. blog.kansasprairiewebworks.com)
- All HTML files present

---

## STEP 2 — FIX CANONICAL TAGS ON ALL HTML FILES

### Rule 1: Every HTML page needs a self-referencing canonical

Every `<head>` section must contain:
```html
<link rel="canonical" href="https://[DOMAIN]/[page-path]">
```

**For index.html specifically:**
The canonical must point to the ROOT URL, not to index.html:
```html
<link rel="canonical" href="https://[DOMAIN]/">
```
NOT:
```html
<link rel="canonical" href="https://[DOMAIN]/index.html">
```

**For all other pages (about.html, services.html, etc.):**
```html
<link rel="canonical" href="https://[DOMAIN]/about.html">
<link rel="canonical" href="https://[DOMAIN]/services.html">
```

### Rule 2: Check for existing canonical tags first

Before adding — grep for existing canonical tags:
```bash
grep -rn "canonical" *.html
```

If a canonical already exists on a page — verify it points to the
correct URL. Fix if wrong. Don't duplicate if already correct.

### Rule 3: Canonical goes in <head> before </head>

Place it after the existing meta charset and viewport tags,
before any other meta tags. Consistent placement across all pages.

### Implementation:

For each .html file in the repo:
1. Read the file
2. Check if canonical tag exists
3. If missing — add correct canonical in <head>
4. If present but wrong — fix it
5. If present and correct — leave it

Report which files were changed and what was added/fixed.

---

## STEP 3 — FIX THE SITEMAP.XML

Read sitemap.xml if it exists.

**Common sitemap issues:**
- References to `/index.html` instead of `/`
- Missing pages
- Wrong domain in URLs

Fix any `/index.html` references to `/` in the sitemap.

If no sitemap exists — create one:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[DOMAIN]/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://[DOMAIN]/about.html</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <!-- add all pages -->
</urlset>
```

---

## STEP 4 — FIX BLOGGER ?m=1 DUPLICATE ISSUE

This fix goes in the **Blogger theme**, not in the repo HTML files.
The repo cannot fix Blogger — this requires a manual step in Blogger dashboard.

**Document the manual fix instructions:**

Create a file called `BLOGGER_CANONICAL_FIX.md` in the repo:

```markdown
# Blogger Canonical Fix — Manual Step Required

## Problem
Google Search Console shows blog.kansasprairiewebworks.com/?m=1 URLs
as duplicate pages with "Alternate page with proper canonical tag" error.
Blogger auto-generates ?m=1 mobile URLs for every post.

## Fix Required in Blogger Dashboard

1. Go to blogger.com → [Blog Name] → Theme
2. Click "Edit HTML" (pencil icon)
3. Find the <head> section in the theme HTML
4. Look for any existing canonical tag
5. Add or replace with this code INSIDE <head>:

<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <link rel='canonical' expr:href='data:post.url'/>
<b:else/>
  <link rel='canonical' expr:href='data:blog.canonicalUrl'/>
</b:if>

6. Save the theme
7. Go to Google Search Console → URL Inspection
8. Test a ?m=1 URL to confirm it now shows the non-mobile URL as canonical
9. Request reindexing on the affected pages

## After Fix
- All ?m=1 URLs will correctly point canonical to the non-mobile version
- Google will stop treating them as duplicates
- The "Alternate page with proper canonical tag" errors will clear
  within 2-4 weeks after Google recrawls

## Apply to all blogs:
- blog.kansasprairiewebworks.com
- blog.mikeservicesllc.com
- blog.procleaningsalinaks.com
```

---

## STEP 5 — ADD ROBOTS.TXT (IF MISSING)

Check if robots.txt exists in the repo root.

If missing — create it:
```
User-agent: *
Allow: /

Sitemap: https://[DOMAIN]/sitemap.xml
```

If present — verify it's not accidentally blocking Googlebot.
Make sure there's no `Disallow: /` line that would block indexing.

---

## STEP 6 — UPDATE KPW-TIER4-TEMPLATE

**This step only runs when executing this skill from KPW-TIER4-TEMPLATE folder.**

Ensure the template has:
1. Canonical tag placeholder in every HTML file's `<head>`:
   ```html
   <link rel="canonical" href="https://[CLIENT_DOMAIN]/[PAGE_PATH]">
   ```
   Where `[CLIENT_DOMAIN]` and `[PAGE_PATH]` are filled in at build time
   from the client brief data.

2. `BLOGGER_CANONICAL_FIX.md` — so every new client build includes
   the manual Blogger fix instructions.

3. `robots.txt` with sitemap reference using `[CLIENT_DOMAIN]` placeholder.

4. `sitemap.xml` with `[CLIENT_DOMAIN]` placeholder for all standard pages.

This ensures every new client built from the template starts with
correct canonical structure from day one.

---

## STEP 7 — VERIFY AND COMMIT

After all changes:

```bash
# Verify canonical tags present on all HTML files
grep -l "canonical" *.html

# Verify no /index.html references in canonical or sitemap
grep -rn "index\.html" *.html sitemap.xml

# Verify robots.txt exists and allows crawling
cat robots.txt

# Stage and commit
git add .
git commit -m "SEO fix — canonical tags added/corrected, sitemap cleaned, robots.txt verified, Blogger fix documented"
git push
```

---

## AFTER ALL FOUR REPOS ARE DONE

**Manual steps required in Google Search Console:**

For each affected domain:
1. Go to Search Console → Pages → click the failing issue
2. Click "Validate Fix" after pushing the code changes
3. Google will recrawl and verify within 2-4 weeks

**Manual step in Blogger:**
Follow `BLOGGER_CANONICAL_FIX.md` instructions for each blog.
This must be done manually — cannot be automated from the repo.

---

## FINAL REPORT FORMAT

**DOMAIN:** [which repo was just fixed]

**STEP 2 — HTML CANONICAL TAGS:**
- Files checked: [count]
- Files fixed: [count]
- Files already correct: [count]
- index.html canonical: [confirmed points to / not /index.html]
- Changes made per file: [list]

**STEP 3 — SITEMAP:**
- Existed: YES/NO
- Fixed/created: [describe]
- /index.html references removed: [count]

**STEP 4 — BLOGGER FIX:**
- BLOGGER_CANONICAL_FIX.md created: confirmed
- Manual fix required: YES — see BLOGGER_CANONICAL_FIX.md

**STEP 5 — ROBOTS.TXT:**
- Existed: YES/NO
- Created/verified: confirmed
- Googlebot allowed: confirmed

**STEP 6 — TEMPLATE (if applicable):**
- Canonical placeholders added: confirmed
- BLOGGER_CANONICAL_FIX.md added to template: confirmed

**COMMIT:**
- Hash: [hash]
- Files changed: [count]

**NEXT STEPS:**
- Validate fix in Google Search Console for [DOMAIN]
- Complete Blogger canonical fix manually per BLOGGER_CANONICAL_FIX.md
- Repeat this skill in: [list remaining repos]

---

*End of skill. Run once per repo. Report per repo.*
*Run order: kpw-build → mikes_services_llc → pro_cleaning_services → KPW-TIER4-TEMPLATE*
