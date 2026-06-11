# SITE_AUDIT_REQUEST.md
# Kansas Prairie Webworks — Complete Site Audit
# Run this BEFORE FIXES_V1.md
# kansasprairiewebworks.com
# Repo: bbotai/kansasprairiewebworks

---

## CLAUDE CODE — AUDIT INSTRUCTIONS

Pull the bbotai/kansasprairiewebworks repo.
Read every single HTML file, styles.css, and the images/ folder.
Write ALL findings to a new file called SITE_AUDIT.md.
Do NOT change any files during this step — audit and document only.
Commit SITE_AUDIT.md when complete.

---

## WHAT TO DOCUMENT FOR EVERY PAGE

### 1. IMAGE PATHS (CRITICAL — fix this first in audit)
- List every <img> src value found on the page
- Check if each image file actually EXISTS in the repo images/ folder
- Flag any broken image paths (file not found in repo)
- Check if images are in a subfolder inside images/ (e.g. images/images/)
  which would cause double-path issues
- Note the exact folder structure of the images/ directory:
  list every file present with full path
- Flag any src paths using wrong case (Image.jpg vs image.jpg)
- Flag any src paths with extra folder levels that don't exist
- Common issue: images moved into a subfolder causing
  src="images/kpw-logo-badge.png" to fail when file is at
  src="images/images/kpw-logo-badge.png" or vice versa
- Document the CORRECT path for every image based on actual file location

### 2. CTA BUTTONS
- List every button text found
- List every button href found
- Flag any booking/calendar links remaining
- Flag any duplicate Call Now buttons on same page

### 3. FAQ / COMMON QUESTIONS
- Are answers open or hidden?
- What CSS classes are used on the FAQ block?
- Is layout consistent with other pages or different?
- Are answers in plain HTML or JS-rendered?

### 4. TEXT CONTRAST
- What color is body text on dark sections?
- What color are card titles on white/light cards?
- Flag any light-on-light or grey-on-dark combinations

### 5. OPEN GRAPH TAGS
- Is og:title present?
- Is og:description present?
- Is og:image present?
- Is og:url present?
- Is og:site_name present?
- Flag any missing tags

### 6. SCHEMA MARKUP
- What schema types are present?
- Is LocalBusiness schema on index.html?
- Is founder name (Kaleb Diehl) included?
- Is sameAs array complete (Facebook + blog)?

### 7. HEADING STRUCTURE (AISCO)
- How many H1 tags? (should be exactly 1 per page)
- Are H2 and H3 used in correct order?
- Flag any skipped heading levels
- Are FAQ answers in plain HTML DOM?

### 8. NAP CONSISTENCY
- Does footer show: Kansas Prairie Webworks — Salina, Kansas — 785-577-7695?
- Is phone number consistent format across all pages?

### 9. FOOTER
- Does copyright say 2025 or 2026?
- Are legal links horizontal or stacked?

### 10. OWNERSHIP AND HANDOFF LANGUAGE
- Find every instance of "yours", "keep everything", "remove ourselves",
  "your accounts", "handoff", "cancel" across all pages
- For each: note which page, which section, which asset type
  (website / Facebook / Google / domain)
- Flag CORRECT if referring to Facebook or Google
- Flag NEEDS CLARIFICATION if referring to website or hosting
- Check terms.html, privacy.html, disclaimer.html for website
  hosting cancellation policy — flag if absent

---

## SITE_AUDIT.md FORMAT

Write findings using this exact format:

```
# SITE_AUDIT.md
# Kansas Prairie Webworks — Claude Code Site Audit
# Generated: [date]

---

## IMAGES FOLDER STRUCTURE
List every file found in images/ with full path:
- images/kpw-logo-badge.png [EXISTS / MISSING]
- images/kpw-hero-storm.jpg [EXISTS / MISSING]
- etc.

## BROKEN IMAGE PATHS FOUND
List every broken <img> src across all pages:
- [page]: src="[path]" — BROKEN — correct path should be: [correct path]

---

## index.html
Images: [list src values — WORKING or BROKEN]
CTA Buttons: [list]
Booking links found: [yes/no]
Duplicate Call Now: [yes/no]
FAQ: [open/hidden] — Classes: [list]
Text contrast issues: [list or none]
OG Tags missing: [list or none]
Schema: [present/missing]
H1 count: [number]
Heading issues: [yes/no]
Footer copyright: [2025/2026]
Legal links: [horizontal/stacked]
Ownership language: [correct/needs clarification/absent]
Notes: [anything else]

---
[repeat for all 17 pages]

---

## SUMMARY OF ALL ISSUES — PRIORITY ORDER
1. [most critical]
2. [etc.]
```

---

## AFTER AUDIT COMPLETE

1. Commit SITE_AUDIT.md to repo
2. Owner will review findings
3. Then proceed to FIXES_V1.md

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695*
*SITE_AUDIT_REQUEST.md — Final*
