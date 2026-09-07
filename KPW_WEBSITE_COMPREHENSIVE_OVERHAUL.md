# KPW WEBSITE COMPREHENSIVE OVERHAUL — FRESH SESSION PROMPT
# Claude Code: Read this entire file before touching anything.
# This is a full site understanding + targeted update session.
# Autonomous mode. Single report at end.

---

## OPERATING INSTRUCTIONS

This is a fresh Claude Code session. You have zero prior context about this website.
Your first job is to READ AND UNDERSTAND everything before changing anything.

**Phase 1: Read and understand (Steps 1-4) — NO CHANGES**
**Phase 2: Build the update prompt (Step 5) — PROPOSE ONLY**
**Phase 3: Execute updates (Step 6) — AFTER CONFIRMATION**

Do not skip Phase 1. Do not make changes during reading.

---

## BACKGROUND — WHAT THIS SYSTEM IS

Kansas Prairie Webworks (KPW) is a web design and AI-powered content agency
based in Salina, Kansas. Owner: Kaleb Diehl.

**What makes KPW different from every other web agency:**
This is NOT a generic web design shop. KPW has built a complete AI-powered
local business content pipeline:

1. Client fills out ONE audio-guided intake form
2. System auto-builds their website AND starts geo-scraping local search data
3. Client receives their portal link — Website Photos and Project Photos upload
4. Client uploads job site photos from their phone with short descriptions
5. Claude editorial generates GBP posts, Facebook posts, and SEO blog articles
   using real local search data geo-scraped for their specific service towns
6. Client reviews and approves content on a 30-day calendar
7. System posts automatically to Google Business Profile, Facebook, and Blogger
8. Content gets sharper over time as the system learns client voice and projects

**Human-in-the-loop:** Nothing posts without client approval. Client approves
everything on their calendar before it goes live.

This system is LIVE and posting automatically for real clients right now.

---

## STEP 1 — READ THE ENTIRE WEBSITE

Read every single HTML file in the kpw-build repo. All 21 pages.

List every page found with:
- Filename
- Page title (from <title> tag)
- H1 heading
- Current pricing mentioned (any dollar amounts)
- Services described
- CTA buttons and where they link
- Any forms present

Pages expected (confirm all exist):
index.html, about.html, services.html, pricing.html, portfolio.html,
contact.html, faq.html, blog.html, service-areas.html,
service-web-design.html, service-google-profile.html,
service-facebook-page.html, service-local-seo.html,
service-monthly-posting.html, service-web-app.html,
ai-services.html, use-cases.html, terms.html, privacy.html,
disclaimer.html, and any others present.

---

## STEP 2 — READ ALL BACKEND/SEO FILES

Read and report exactly what's in:

**Schema markup:**
- Every JSON-LD block on every page — what type, what properties
- Any schema errors or outdated information

**SEO files:**
- sitemap.xml — list all URLs, confirm all 21 pages present
- robots.txt — current rules
- llm.txt (if exists) — current content
- Any other meta files

**Meta tags on every page:**
- title tag
- meta description
- og:title, og:description if present
- canonical tag

**Report any:**
- Missing canonical tags
- Missing meta descriptions
- Duplicate title tags
- Schema that references wrong pricing
- Schema that references services that don't exist or wrong descriptions

---

## STEP 3 — READ AI SERVICES PAGE (DO NOT TOUCH)

Read ai-services.html completely. Report:
- Full content and structure
- The video/hero section at the top
- What services/pipeline is described
- Any pricing mentioned
- DO NOT CHANGE THIS PAGE — it has a custom video pipeline showcase

Also read use-cases.html completely. Report:
- Full content and structure  
- The animated diagram
- DO NOT CHANGE THIS PAGE either

---

## STEP 4 — IDENTIFY ALL PRICING MENTIONS SITEWIDE

Run a complete grep for all dollar amounts across every file:
```bash
grep -rn "\$[0-9]" *.html
```

Also grep for pricing-related text:
```bash
grep -rni "per month\|setup fee\|monthly\|one.time\|pricing\|tier\|package" *.html
```

Report every single pricing mention found — filename, line number, exact text.

This is critical — pricing is scattered everywhere and needs to be unified.

---

## STEP 5 — UNDERSTAND THE REQUIRED CHANGES

After reading everything, understand these locked decisions:

### CANONICAL PRICING STRUCTURE (FINAL — DO NOT DEVIATE)

**Tier 1 — Starter Website**
- Setup: $450 one-time
- Monthly: $50/month (hosting + maintenance)
- Includes: Custom website, hosting, maintenance updates
- Does NOT include: GBP, Facebook, blog, posting services

**Tier 2 — Standard Website**
- Setup: $600 one-time
- Monthly: $50/month (hosting + maintenance)
- Includes: Custom website + client choice of GBP Setup OR Facebook Page Setup
- Does NOT include: Monthly posting services
- Can add: Any individual monthly posting service as add-on

**Individual Monthly Posting Services (standalone or add-on to any tier):**
- Google Business Profile Monthly Posting: $250/month (2 posts/day)
- Facebook Page Monthly Posting: $250/month (2 posts/day)
- Blog Writing: $100/month (2 posts/month) or $200/month (4 posts/month)

**Individual Setup Services (standalone — client may already have a website):**
- Google Business Profile Setup Only: [read current page for existing price or use $150 one-time]
- Facebook Business Page Setup Only: [read current page for existing price or use $150 one-time]
- Local SEO + Directory Listings: [read current page for existing price]

**🏆 Top Tier — Complete AI Pipeline (ONE CARD, ONE PRICE)**
- Setup: $1,200 one-time
- Monthly: $350/month
- Includes EVERYTHING:
  - Full multi-page custom website
  - Google Business Profile setup + verification + optimization
  - Facebook Business Page setup + branding + optimization
  - Directory listings (Google, Bing, Yelp, Apple Maps)
  - Local SEO + schema markup
  - AI-powered content pipeline:
    - GBP posts (2/day)
    - Facebook posts (2/day)
    - Blog writing (4 posts/month — included, not extra)
  - Client portal access (Website Photos + Project Photos + Content Calendar)
  - 30-day review and approve calendar
  - Auto-posting — nothing posts without client approval
  - Geo-scraped local search content for their specific service towns
  - Content gets sharper over time — system learns client voice
  - Priority support
- REMOVE: All $800 language — it no longer exists
- REMOVE: The double-sided card or toggle between $800/$1,200
- This is ONE clean card

### WHAT THE WEBSITE NEEDS TO COMMUNICATE

**The website currently undersells what KPW actually built.**
It reads like a generic web design agency. It needs to communicate:

"We didn't just build you a website. We built you an AI content machine
that runs on your real project photos, learns your voice, and posts to
Google, Facebook, and your blog automatically — with you approving
every word before it goes live."

**Key messages missing from most pages:**
1. The intake form is audio-guided — takes minutes, triggers auto-build
2. Client uploads job site photos from their phone — system turns them into content
3. Geo-scraped local search data — not generic keywords, real local search intelligence
4. Human-in-the-loop — client approves everything before it posts
5. Content gets sharper every month — system learns their voice
6. Two posts per day to GBP and Facebook — 60+ posts/month included

### GSC KEYWORD OPPORTUNITIES TO TARGET

These terms are generating impressions but zero clicks — pages need to
speak more directly to these searches:

**High priority (100+ impressions, zero clicks):**
- "mobile app development" — 104 impressions
  Fix: service-web-app.html must clearly say we do NOT build mobile apps —
  we build custom web applications and AI automation systems for Central Kansas

**Medium priority (20-84 impressions, zero clicks):**
- "web development" — 84 impressions
- "web development kansas" — 19 impressions

**Emerging (1-6 impressions):**
- "app development kansas" — 6 impressions
- "kansas marketing agency" — 2 impressions
- "kansas web design" — 2 impressions
- "kansas seo" — 1 impression
- "kansas seo company" — 1 impression
- "domain hosting" — 2 impressions

**Geographic anchoring needed on:**
- index.html hero section
- service-web-design.html body copy
- service-web-app.html (critical — wrong signal)
- service-areas.html (town-level detail)

### PAGES TO UPDATE (after reading current state):

**pricing.html:**
- Remove $800 card entirely
- Consolidate to ONE Top Tier card at $1,200/$350
- Update Tier 1 to $450/$50
- Update Tier 2 to $600/$50 with GBP or FB choice noted
- Add individual monthly posting services section
- Add Stripe trust language
- Update all JSON-LD schema to match

**services.html:**
- Update all service cards to match canonical pricing
- Remove any $800/$150 references
- Add individual posting services as separate cards
- Add "The Complete Pipeline" card for Top Tier

**index.html:**
- Update any pricing callouts
- Strengthen pipeline messaging in hero/features section
- Add geographic anchoring if missing

**service-web-design.html:**
- Update pricing to Tier 1 $450/$50 and Tier 2 $600/$50
- Strengthen geographic anchoring for "web development kansas" queries

**service-web-app.html:**
- CRITICAL: Add clear statement we do NOT build mobile apps
- Reframe as: custom web applications, AI automation, e-commerce
- Add geographic anchoring

**service-monthly-posting.html:**
- Update to show individual posting services with new pricing
- GBP posting: $250/month
- Facebook posting: $250/month
- Blog: $100/$200/month options
- Keep human-in-the-loop and client portal language already there

**service-google-profile.html:**
- Update pricing
- Add connection to monthly posting add-on upsell

**service-facebook-page.html:**
- Update pricing
- Add connection to monthly posting add-on upsell

**faq.html:**
- Update any pricing references in FAQ answers and JSON-LD schema
- Add FAQ about the AI pipeline and what makes KPW different

**All pages:**
- Verify canonical tags correct
- Verify meta descriptions mention Central Kansas/Salina
- Update any schema with wrong pricing

### DO NOT TOUCH:
- use-cases.html — has animated system diagram
- The hero video section on ai-services.html — the video stays exactly as-is

### ai-services.html — REDESIGN REQUIRED (video stays, everything below redesigned)

Read the full current page first. The hero video section is protected.
Everything below the video needs to be reorganized and strengthened.

**What this page needs to become:**
The premium showcase page. This is where prospects who want to understand
the full KPW system land. The video explains the operation. Below it should:

1. **The Top Tier card — featured prominently:**
   One clean card. The complete pipeline. $1,200 setup + $350/month.
   This is the premium offer and it lives on this page as the primary CTA.
   Include everything it covers — website, GBP, Facebook, blog (4/month),
   client portal, 30-day calendar, auto-posting, geo-scraped content,
   voice capture. Make it feel premium. KPW orange accents. Clear value.

2. **How the pipeline works — plain English, organized:**
   Replace the disorganized cards with a clean step-by-step flow:
   - Step 1: Audio-guided intake form — fills out once, auto-build begins
   - Step 2: Geo-scraping starts — real local search data for their towns
   - Step 3: Claude editorial generates content from their project photos
   - Step 4: 30-day calendar — client reviews and approves
   - Step 5: System posts automatically to GBP, Facebook, and blog
   - Step 6: Content sharpens over time — system learns their voice

3. **Reference to individual services:**
   Below the Top Tier card, add a section:
   "Need just one piece? We offer individual services too."
   Link to: service-google-profile.html, service-facebook-page.html,
   service-monthly-posting.html, service-web-design.html

4. **Human-in-the-loop statement:**
   "Nothing posts without your approval. Every piece goes through your
   review calendar before it goes live. You stay in control — the
   system does the work."

Keep existing page structure/nav. Redesign the content sections only.
- terms.html, privacy.html, disclaimer.html — legal pages
- Any navigation structure
- Any CSS classes or design elements
- Image files

---

## STEP 6 — EXECUTE THE UPDATES

After completing Steps 1-5 and understanding the full current state:

Execute all updates in this order:

1. **pricing.html** first — most critical, most pricing changes
2. **services.html** — second most pricing references
3. **index.html** — homepage messaging and pricing callouts
4. **service-monthly-posting.html** — new individual pricing structure
5. **service-web-app.html** — CRITICAL mobile app signal fix
6. **service-web-design.html** — geographic anchoring
7. **service-google-profile.html** — pricing update
8. **service-facebook-page.html** — pricing update
9. **ai-services.html** — redesign below the hero video, add Top Tier card,
   reorganize pipeline steps, add individual service links
10. **faq.html** — pricing in answers and schema
11. **All remaining pages** — verify no stale pricing, update meta descriptions

**After all HTML updates:**
```bash
# Verify no $800 references remain
grep -rn "800" *.html

# Verify no $150/month references remain (old hosting price)
grep -rn "150" *.html

# Verify new pricing present
grep -rn "1,200\|350\|250\|50/month" *.html

# Verify mobile app language corrected
grep -rn "mobile app" *.html

# Verify canonical tags on all pages
grep -rn "canonical" *.html
```

**Update sitemap.xml** if any new pages were added or URLs changed.

**Update llm.txt** if it exists — update to reflect current services and pricing.

**Commit and push:**
```bash
git add .
git commit -m "Comprehensive site overhaul — pricing unified, pipeline messaging strengthened, GSC keyword fixes, schema updated"
git push
```

---

## FINAL REPORT FORMAT

**STEP 1 — SITE INVENTORY:**
List all pages found with H1 and current pricing mentions

**STEP 2 — BACKEND/SEO AUDIT:**
- Schema issues found: [list]
- Missing meta descriptions: [list]
- Canonical issues: [list]
- sitemap.xml status: [confirmed/issues]

**STEP 3 — PROTECTED PAGES:**
- ai-services.html: [confirmed read, not touched]
- use-cases.html: [confirmed read, not touched]

**STEP 4 — PRICING GREP RESULTS:**
[List every pricing mention found — file, line, text]

**STEP 6 — CHANGES MADE:**
For each file changed:
- File: [name]
- What changed: [description]
- Pricing before → after: [if applicable]

**VERIFICATION GREP RESULTS:**
[Paste output of all verification greps]

**GIT PUSH:**
- Commit hash: [hash]
- Files changed: [count]

**REMAINING MANUAL STEPS:**
- Any items that require human action
- GSC validation clicks needed

---

*End of prompt. Read everything first. Understand before changing.
Execute Phase 2 only after full site understanding is confirmed.
Autonomous mode. Single report at completion.*
