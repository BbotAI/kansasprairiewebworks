# FIXES_V2.md
# Kansas Prairie Webworks — Site Fix Pass 2
# kansasprairiewebworks.com
# Repo: bbotai/kansasprairiewebworks

---

## CLAUDE CODE — INSTRUCTIONS

Surgical edits only — do NOT rebuild from scratch.
Do NOT change anything not listed here.
Pull current repo first, then execute fixes in order.

Commit message when done:
"Fix pass v2 — hero, CTA contrast, card text, image push"

---

## FIX 1 — HERO SECTION COMPLETE OVERHAUL

### Problem 1 — Background text watermark bleeding through:
There is large faded "Kansas Prairie Webworks" text showing as a
watermark/overlay behind the hero content. This is causing visual
confusion and making the headline hard to read.
REMOVE the watermark text element entirely from the hero section.

### Problem 2 — New hero image needs to be set:
Owner has added a new hero background image to the images/ folder.
Find the new image file (it will be the most recently added jpg in images/)
Set it as the hero background image replacing kpw-hero-storm.jpg reference.
If kpw-hero-storm.jpg is the correct filename for the new image — verify
the file exists and is loading correctly.

### Problem 3 — Hero overlay is too dark/opaque:
The hero content area shows the background image is barely visible.
Reduce the dark overlay opacity so the prairie/storm image shows through more.
Change hero overlay from current value to:
```css
.hero::before,
.hero__overlay {
  background: rgba(26, 37, 47, 0.55); /* was likely 0.75 or higher */
}
```

### Problem 4 — "Message Us" Messenger float overlaps hero CTA:
The floating Facebook Messenger button in bottom right is overlapping
and creating visual confusion with the hero section on load.
Fix: add a 2-second delay before the Messenger float appears so hero
loads cleanly first. Add slide-in animation from right.
```javascript
setTimeout(function() {
  document.getElementById('fbFloat').classList.add('visible');
}, 2000);
```
CSS:
```css
#fbFloat {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
#fbFloat.visible {
  opacity: 1;
  transform: translateX(0);
}
```

### Problem 5 — KPW badge/logo element in hero center:
There appears to be a pill-shaped badge element showing "KPW" text
in a faded green/teal color above the headline that looks unfinished.
Either style it properly as the KPW badge or remove it.
If keeping: background: var(--primary), color: white, Poppins 700,
border-radius: 50px, padding: 8px 24px.
If removing: delete the element entirely.

---

## FIX 2 — CALL NOW BUTTON CONTRAST (HERO + SITEWIDE)

### Problem:
The Call Now button in the hero is dark/outlined — blends into dark background.
It needs to be the brightest most visible element on the page.

### Fix — Hero Call Now button:
```css
.hero .btn--primary,
.hero a[href^="tel"] {
  background: var(--primary) !important; /* #E67E22 Sunset Orange */
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.2rem !important;
  padding: 18px 40px !important;
  border-radius: 8px !important;
  border: none !important;
  box-shadow: 0 4px 20px rgba(230,126,34,0.5) !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 10px !important;
  text-decoration: none !important;
}
.hero .btn--primary:hover,
.hero a[href^="tel"]:hover {
  background: #d35400 !important;
  box-shadow: 0 6px 28px rgba(230,126,34,0.7) !important;
  transform: translateY(-2px) !important;
}
```

### Fix — Sitewide Call Now button visibility:
Any Call Now button on any page that is dark/outlined/invisible:
```css
.btn--primary,
a.btn--primary {
  background: var(--primary) !important;
  color: #FFFFFF !important;
  border: none !important;
}
```
Make sure NO Call Now button uses dark background or light outline
on any section across all 17 pages.

---

## FIX 3 — FACEBOOK SECTION BUTTON CONTRAST

### Problem (Image 2):
The "Call to Get Started" secondary button next to "View Our Facebook Page"
is nearly invisible — very light/faded text, hard to read.

### Fix:
Change the secondary Call button in Facebook Section A to:
```css
.facebook-section .btn--secondary,
.facebook-section a[href^="tel"] {
  background: transparent !important;
  color: var(--dark-mid) !important; /* #2C3E50 — dark text on light bg */
  border: 2px solid var(--dark-mid) !important;
  font-weight: 600 !important;
}
.facebook-section .btn--secondary:hover,
.facebook-section a[href^="tel"]:hover {
  background: var(--dark-mid) !important;
  color: #FFFFFF !important;
}
```
Note: Facebook section has light/warm wheat background so dark outlined
button is correct here — NOT white outline which would be invisible.

---

## FIX 4 — FACEBOOK SOCIAL PROOF CARD TITLES

### Problem (Image 3):
The three card titles "Follow Our Page", "Message Us Directly",
"Share With a Friend" are barely visible — very dark grey on dark card.

### Fix in styles.css:
```css
.fb-social-card__title,
.facebook-social .card-title,
[class*="fb-social"] h3,
[class*="facebook-social"] h3 {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  margin-bottom: 0.75rem !important;
}
```

Also check the actual class names used on those 3 cards in index.html
and apply the fix to those exact class names.
The card titles must be pure white #FFFFFF on the dark card background.

---

## FIX 5 — PUSH NEW HERO IMAGE

Owner has added a new hero background image file to the local images/ folder.
This file needs to be staged and pushed with all other changes.

Steps:
1. Check images/ folder for any new image files added since last commit
2. Stage all new image files: git add images/
3. Verify the new hero image filename
4. Update index.html hero background reference if filename is different
   from current kpw-hero-storm.jpg reference
5. Include image in final commit and push

---

## FIX 6 — COMPLETE ONLINE PRESENCE PACKAGE SECTION

### Problem 1 — "See All Pricing" button invisible:
The "See All Pricing" or similar button on the orange/gold gradient
package section is white outlined on orange — completely invisible.

Fix:
```css
.package-section .btn,
.package-section a.btn {
  background: var(--dark) !important; /* #1A252F deep charcoal */
  color: #FFFFFF !important;
  border: none !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3) !important;
}
.package-section .btn:hover {
  background: var(--dark-mid) !important;
  transform: translateY(-2px) !important;
}
```

### Problem 2 — Remove "You own everything" line:
Find and REMOVE this bullet point from the Complete Online Presence
package section on index.html:
"You own everything — domain, accounts, listings. Always."

This line creates confusion about website hosting ownership.
The ownership clarification is handled properly in the legal pages.
Remove this bullet from the package includes list only.
Do NOT remove it from terms.html or faq.html where it belongs.

---

## FIX 7 — PRICING CARDS REDESIGN

### Problem 1 — White cards on white/cream background:
Tier 1, 2, 3 cards are white on a warm wheat/cream background.
No visual separation or personality. Needs color differentiation.

### Fix — Give each tier card its own color identity:

Tier 1 card — Entry level, approachable:
```css
.pricing-card:nth-child(1),
.tier-1-card {
  background: #FFFFFF;
  border-top: 5px solid #3498DB; /* Steel blue — starter */
  box-shadow: 0 4px 20px rgba(52,152,219,0.15);
}
```

Tier 2 card — Facebook blue energy:
```css
.pricing-card:nth-child(2),
.tier-2-card {
  background: #FFFFFF;
  border-top: 5px solid #1877F2; /* Facebook blue */
  box-shadow: 0 4px 20px rgba(24,119,242,0.15);
}
```

Tier 3 card — Google green/search energy:
```css
.pricing-card:nth-child(3),
.tier-3-card {
  background: #FFFFFF;
  border-top: 5px solid #34A853; /* Google green */
  box-shadow: 0 4px 20px rgba(52,168,83,0.15);
}
```

Tier 4 card — FLAGSHIP — keeps current dark featured treatment:
Leave as-is — dark background with orange glow is correct and
already stands out well. ✅

Web App card — AI/Tech feel:
```css
.pricing-card.web-app-card,
.tier-web-card {
  background: linear-gradient(135deg, #1A252F 0%, #2C3E50 100%);
  border: 1px solid rgba(230,126,34,0.3);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(230,126,34,0.1);
  color: #ECF0F1 !important;
}
.web-app-card h3,
.web-app-card .pricing-card__title {
  color: var(--primary) !important; /* Orange */
  font-size: 1.3rem !important;
}
.web-app-card .pricing-card__price,
.web-app-card .price-amount {
  color: var(--secondary) !important; /* Gold */
}
.web-app-card li,
.web-app-card p {
  color: #ECF0F1 !important;
}
.web-app-card .btn {
  background: var(--grad-orange) !important;
  color: #FFFFFF !important;
  border: none !important;
}
```

Add a subtle "AI" badge to the web app card:
```html
<span class="ai-badge">🤖 AI-Powered</span>
```
```css
.ai-badge {
  display: inline-block;
  background: rgba(230,126,34,0.2);
  color: var(--primary);
  border: 1px solid rgba(230,126,34,0.4);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
```

### Problem 2 — Cards too long on mobile:

Shorten ALL pricing card content for mobile.
On mobile (max-width: 768px) the card descriptions and feature lists
should be condensed.

Reduce feature list to max 4 bullet points per card on mobile.
Shorter descriptions — one line max on mobile.

Add to styles.css:
```css
@media (max-width: 768px) {
  .pricing-card {
    padding: 1.5rem !important;
  }
  .pricing-card__desc {
    display: none !important; /* Hide subtitle on mobile */
  }
  .pricing-card__features li:nth-child(n+5) {
    display: none !important; /* Show only first 4 features */
  }
  .pricing-card__features li:last-child {
    display: block !important; /* Always show last item */
  }
}
```

---

## FIX 8 — PORTFOLIO PREVIEW — MISSING IMAGES

### Problem:
First two portfolio cards (Local Service Business Website and
Google Business Profile Setup) show NO image — just empty dark boxes.
Only DogeBeats has a screenshot showing.

### Fix:
For the two placeholder portfolio cards with no image:
Replace the empty image area with a styled CSS gradient placeholder
that looks intentional — not broken.

Card 1 — Local Service Business Website:
```css
.portfolio-card:nth-child(1) .portfolio-card__image,
.portfolio-placeholder-1 {
  background: linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #E67E22 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
```
Add centered text inside:
```html
<div class="portfolio-placeholder-text">
  <i class="fas fa-globe" style="font-size:3rem;color:#E67E22;"></i>
  <p style="color:#ECF0F1;margin-top:1rem;font-weight:600;">
    Local Business Website
  </p>
</div>
```

Card 2 — Google Business Profile Setup:
```css
.portfolio-card:nth-child(2) .portfolio-card__image,
.portfolio-placeholder-2 {
  background: linear-gradient(135deg, #1A252F 0%, #34495E 50%, #34A853 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
```
Add centered text inside:
```html
<div class="portfolio-placeholder-text">
  <i class="fas fa-map-marker-alt" style="font-size:3rem;color:#34A853;"></i>
  <p style="color:#ECF0F1;margin-top:1rem;font-weight:600;">
    Google Business Profile
  </p>
</div>
```

Note: DogeBeats screenshot is already showing correctly — do not touch.
Owner confirmed dogebeats-screenshot.jpg was added to images/ folder.
Verify it is correctly referenced and staged in this commit.

---

## FIX 9 — SERVICE CARDS SECTION (Image 2 — looks great, one tweak)

Image 2 service cards section looks clean and well structured.
One small improvement — card description text color on dark cards:

The grey muted text on the bottom half of cards (descriptions like
"Get found by customers in Salina...") needs to be slightly brighter:
```css
.service-card__desc,
.service-card p {
  color: #B0B8C1 !important; /* Slightly brighter than current muted grey */
  line-height: 1.6 !important;
}
```

Service Areas strip (Image 4) — PERFECT, no changes needed. ✅

---

## FIX 10 — COMMON QUESTIONS CARDS — ADD DEPTH

### Problem:
White cards on warm wheat background lack visual separation.
The orange left border helps but cards need more lift and definition.

### Fix in styles.css:
```css
.faq-item {
  background: #FFFFFF !important;
  border-radius: 12px !important;
  padding: 2rem !important;
  border-left: 4px solid var(--primary) !important;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10),
              0 1px 4px rgba(230,126,34,0.08) !important;
  transition: box-shadow 0.2s ease, transform 0.2s ease !important;
}
.faq-item:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.14),
              0 2px 8px rgba(230,126,34,0.15) !important;
  transform: translateY(-2px) !important;
}
.faq-item__question {
  color: var(--dark-mid) !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600 !important;
  font-size: 1.05rem !important;
}
.faq-item__answer {
  color: #4A4A4A !important;
  line-height: 1.75 !important;
}
.faq-section {
  background: var(--light) !important; /* warm wheat */
}
```

This keeps the clean white card design but adds:
- Stronger drop shadow so cards visually lift off the background
- Subtle orange tint in the shadow for brand consistency
- Hover lift effect — professional and interactive feeling

---

## FIX 11 — CTA BANNER CALL BUTTON COLOR

### Problem (Image 3):
The "Call 785-577-7695" button in the CTA banner section is
dark/outlined — blends into the dark section background.
Should be bright orange to match all other primary CTAs.

### Fix:
Find the CTA banner section call button in index.html and all pages.
Any button linking to tel:7855777695 in a dark background section:

```css
.cta-banner .btn,
.cta-banner a[href^="tel"],
.cta-section .btn--primary,
.cta-section a[href^="tel"] {
  background: var(--primary) !important; /* #E67E22 orange */
  color: #FFFFFF !important;
  border: none !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  padding: 16px 36px !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 20px rgba(230,126,34,0.4) !important;
}
.cta-banner .btn:hover,
.cta-banner a[href^="tel"]:hover {
  background: #d35400 !important;
  box-shadow: 0 6px 28px rgba(230,126,34,0.6) !important;
  transform: translateY(-2px) !important;
}
```

Also verify the "Get In Touch" section contact buttons:
- Phone button (785-577-7695): orange ✅ already correct per screenshot
- Email Us button: dark charcoal ✅ correct
- Facebook button: dark with gold border ✅ correct
These three look great — do not change them.

- [ ] Hero watermark removed
- [ ] New hero image loading
- [ ] Hero overlay lightened
- [ ] Messenger float 2-second delay
- [ ] Hero Call Now: bright orange, white text, shadow
- [ ] Facebook section secondary button readable
- [ ] Facebook social proof card titles: white on dark cards
- [ ] Package section "See All Pricing" button: dark charcoal, visible
- [ ] "You own everything" bullet REMOVED from package section
- [ ] Tier 1 card: blue top border
- [ ] Tier 2 card: Facebook blue top border
- [ ] Tier 3 card: Google green top border
- [ ] Tier 4 card: unchanged — already looks great ✅
- [ ] Web App card: dark gradient, AI badge, orange/gold text
- [ ] Pricing cards shortened on mobile (max 4 bullets)
- [ ] Portfolio cards 1 and 2: CSS gradient placeholder with icon
- [ ] DogeBeats screenshot staged and pushed
- [ ] Service card description text slightly brighter
- [ ] Service Areas strip: no changes needed ✅
- [ ] New hero image file staged and included in push

Commit and push:
```bash
git add .
git commit -m "Fix pass v2 — hero, CTA, cards, pricing design, portfolio placeholders"
git push
```

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695*
*FIXES_V2.md — Updated from screenshot review*

---

## FIX 12 — PRICING PAGE SPECIFIC FIXES

### Problem 1 — Same white card on cream background issue:
Pricing page (pricing.html) has same Tier 1/2/3 white cards on
warm wheat background as homepage. Apply same color border treatment:

Tier 1: steel blue top border (#3498DB)
Tier 2: Facebook blue top border (#1877F2)
Tier 3: Google green top border (#34A853)
Tier 4: unchanged — dark featured card already perfect ✅
Web App: dark gradient AI card treatment (same as FIX 7)

### Problem 2 — All Call Now / phone buttons on pricing page:
Every call-to-action phone button on pricing.html must be
bright orange — same fix as FIX 11.
Specifically the hero "785-577-7695" button at top of pricing page
and the CTA section "Call 785-577-7695" button at bottom.

### Problem 3 — "You own everything — always" on Tier 4 card:
This bullet point appears on the Tier 4 pricing card.
This is partially inaccurate for the website/hosting component.
Replace with more accurate language:

REMOVE: "You own everything — always"
REPLACE WITH TWO BULLETS:
- "Facebook + Google accounts: always yours"
- "Website files provided on request if you cancel"

### Problem 4 — Cancellation & Ownership Policy box language:
The blockquote currently says:
"Your accounts are yours. Always. We build them, manage them,
and hand them back — with everything intact — if you ever move on."

This is true for Facebook and Google but misleading for website/domain.
Replace the blockquote with:

"Your Facebook page and Google listing are always yours — we hand
them back completely if you ever leave. Your website files are
provided within 7 days of cancellation. Your domain stays live
as long as your plan is active — we can transfer it to your own
account anytime on request."

---

## FIX 13 — BLOG ADD-ON SECTION (pricing.html)

### Problem 1 — Price change:
Change blog add-on price from $99/month to $50/month.
This applies to:
- pricing.html blog add-on section
- service-monthly-posting.html
- Any other page mentioning $99/mo for blog add-on
- index.html if blog add-on is mentioned there

### Problem 2 — Add AISCO language to blog add-on description:
Current text: "4 AI-optimized blog posts per month, delivered
to your email with copy-paste instructions."

Update to:
"4 AI-optimized, AISCO-ready blog posts per month — structured
for Google, AI search tools, and local discoverability.
Delivered to your email with copy-paste instructions.
You publish at your pace."

Add to the features list:
- ✅ AISCO-optimized for AI search visibility
- ✅ Structured for Google and local discovery
- ✅ 4 posts/month, SEO-linked to your website
- ✅ Delivered via email — you publish at your pace
- ✅ Can be added to any service tier

### Problem 3 — Blog add-on card styling:
The right-side "Blog Add-On $99/month" card is white on cream.
Restyle it with dark background to make it stand out and feel
premium/sellable:

```css
.blog-addon-card,
.addon-card {
  background: linear-gradient(135deg, #1A252F 0%, #2C3E50 100%) !important;
  border: 1px solid rgba(230,126,34,0.3) !important;
  border-radius: 16px !important;
  padding: 2rem !important;
  color: #ECF0F1 !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
}
.blog-addon-card .addon-title,
.blog-addon-card h3 {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
}
.blog-addon-card .addon-price,
.blog-addon-card .price-amount {
  color: var(--primary) !important; /* orange */
  font-size: 2.5rem !important;
  font-weight: 800 !important;
}
.blog-addon-card .addon-desc {
  color: #B0B8C1 !important;
}
.blog-addon-card .btn {
  background: var(--grad-orange) !important;
  color: #FFFFFF !important;
  border: none !important;
  font-weight: 700 !important;
  width: 100% !important;
  text-align: center !important;
}
```

Also update the "Fill Out Blog Intake Form" button text to:
"Get Started — $50/mo"

---

## FIX 14 — WEBSITE/DOMAIN OWNERSHIP PLAIN LANGUAGE

### Add a clear "What Happens If I Cancel?" plain-language section
to pricing.html after the tier cards and before the blog add-on.

Title: "What Happens If You Cancel?"

Content as 3 clear rows:

Row 1 — Facebook & Google:
Icon: 📘📍
"Facebook Business Page and Google Business Profile — 100% yours,
forever. We remove our manager access within 48 hours.
Nothing changes for your accounts."

Row 2 — Website Files:
Icon: 🌐
"Your website code and content files are provided to you within
7 days of cancellation at no charge. You own what we built for you."

Row 3 — Domain & Hosting:
Icon: 🔗
"Your domain stays live as long as your monthly plan is active.
If you cancel, the site goes offline after 30 days.
Domain can be transferred to your own GoDaddy or Namecheap account
anytime — just ask before you cancel."

Style: dark background section, 3 clean cards with icons,
white text, orange icon color.

---

- [ ] Hero watermark removed
- [ ] New hero image loading correctly
- [ ] Hero overlay lightened — storm image visible
- [ ] Messenger float: 2-second delay, no hero overlap
- [ ] Hero Call Now: bright orange, white text, glow shadow
- [ ] Facebook section secondary button: dark outline, readable on light bg
- [ ] Facebook social proof card titles: #FFFFFF on dark cards
- [ ] Package section button: dark charcoal, visible on orange bg
- [ ] "You own everything" bullet removed from package section only
- [ ] Tier 1 card: steel blue top border
- [ ] Tier 2 card: Facebook blue top border
- [ ] Tier 3 card: Google green top border
- [ ] Tier 4 card: unchanged ✅
- [ ] Web App card: dark gradient, AI badge, orange/gold text
- [ ] Pricing cards: max 4 bullets on mobile
- [ ] Portfolio card 1: CSS gradient placeholder with globe icon
- [ ] Portfolio card 2: CSS gradient placeholder with map icon
- [ ] DogeBeats screenshot: staged and loading correctly
- [ ] Service card descriptions: slightly brighter text
- [ ] Service Areas strip: no changes ✅
- [ ] FAQ cards: stronger shadow, hover lift effect
- [ ] CTA banner call button: bright orange not dark/outlined
- [ ] Why KPW Exists section: no changes ✅
- [ ] Footer: no changes ✅
- [ ] All new image files staged in commit

Commit and push:
```bash
git add .
git commit -m "Fix pass v2 — hero, CTA, cards, pricing design, FAQ depth, portfolio"
git push
```

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695*
*FIXES_V2.md — FINAL after full homepage review*

---

## COMPLETE FINAL CHECKLIST

- [ ] Hero watermark removed
- [ ] New hero image loading correctly
- [ ] Hero overlay lightened
- [ ] Messenger float: 2-second delay
- [ ] Hero Call Now: bright orange, white text, shadow
- [ ] Facebook section secondary button: readable
- [ ] Facebook social proof card titles: white on dark
- [ ] Package section button: dark charcoal on orange
- [ ] Tier 4 + package "you own everything" replaced with split bullets
- [ ] Tier 1 card: steel blue border (homepage + pricing page)
- [ ] Tier 2 card: Facebook blue border (homepage + pricing page)
- [ ] Tier 3 card: Google green border (homepage + pricing page)
- [ ] Tier 4 card: unchanged ✅
- [ ] Web App card: dark gradient, AI badge, orange/gold
- [ ] Pricing cards: max 4 bullets on mobile
- [ ] Portfolio card 1: gradient placeholder + globe icon
- [ ] Portfolio card 2: gradient placeholder + map icon
- [ ] DogeBeats screenshot: staged and loading
- [ ] Service card descriptions: slightly brighter
- [ ] Service Areas strip: no changes ✅
- [ ] FAQ cards: shadow + hover lift on all pages
- [ ] ALL call/phone buttons: bright orange on every page
- [ ] Why KPW Exists: no changes ✅
- [ ] Footer: no changes ✅
- [ ] Blog add-on price: $99 → $50 on ALL pages
- [ ] Blog add-on: AISCO language added
- [ ] Blog add-on card: dark gradient styling
- [ ] Blog button: "Get Started — $50/mo"
- [ ] Pricing page: cancellation blockquote updated
- [ ] Pricing page: "What Happens If You Cancel?" section added
- [ ] All new images staged in commit

Commit and push:
```bash
git add .
git commit -m "Fix pass v2 — hero, CTA, cards, pricing, blog addon, ownership clarity"
git push
```

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695*
*FIXES_V2.md — COMPLETE after full site review*
