# FIXES_V3.md
# Kansas Prairie Webworks — Fix Pass 3
# kansasprairiewebworks.com
# Repo: bbotai/kansasprairiewebworks

---

## CLAUDE CODE — INSTRUCTIONS

First: DELETE FIXES_V1.md and FIXES_V2.md from the repo root.
They are complete and no longer needed.

Then: Execute every fix below in order.
Surgical edits only — do NOT rebuild from scratch.
Pull current repo before starting.

Commit message:
"Fix pass v3 — hero badge, FAQ cards, systematic card design sitewide"

---

## FIX 1 — REMOVE HERO BADGE PILL (index.html)

### Problem:
The orange pill badge showing the KPW logo + "Kansas Prairie Webworks"
text sits above the hero headline. The KPW logo is already in the navbar.
This badge creates visual clutter and reduces the premium feel of the hero.

### Fix:
Find and REMOVE the hero badge element from index.html entirely.
It will be a div/span with class containing "badge", "hero__badge",
"hero-badge", or similar — sitting above the h1 hero headline.

After removal the hero should flow:
[Background image + overlay]
↓
"Your Complete Online Presence" (h1 headline)
↓
"Website. Google. Facebook. All in one package." (subheadline)
↓
"We handle the setup. You run your business." (tagline)
↓
[Call Now button]
↓
"Serving Salina & Central Kansas — local pricing, local accountability"

---

## FIX 2 — FAQ / COMMON QUESTIONS CARD REDESIGN (SITEWIDE)

### The vision:
Premium cards with colored backgrounds — not white on white.
Decorative top and bottom border treatment giving a "scroll" or
ribbon feel. Color behind each card so it has personality and
visual weight. Hover effect that feels responsive and alive.
Consistent on EVERY page that has a Common Questions section.

### New FAQ card CSS — replace all existing FAQ card styles in styles.css:

```css
/* ============================================
   FAQ / COMMON QUESTIONS — UNIVERSAL STANDARD
   Apply to every page — no exceptions
   ============================================ */

.faq-section {
  background: var(--dark) !important; /* deep night sky — dark bg */
  padding: 80px 0 !important;
}

.faq-section__title {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 800 !important;
  font-size: 2.2rem !important;
  color: #FFFFFF !important;
  text-align: center !important;
  margin-bottom: 0.5rem !important;
}

.faq-section__subtitle {
  text-align: center !important;
  color: var(--text-muted) !important;
  font-family: 'Inter', sans-serif !important;
  margin-bottom: 3rem !important;
}

.faq-list {
  max-width: 820px !important;
  margin: 0 auto !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem !important;
  padding: 0 1rem !important;
}

.faq-item {
  /* Card base */
  background: linear-gradient(135deg,
    rgba(44,62,80,0.95) 0%,
    rgba(26,37,47,0.98) 100%) !important;
  border-radius: 16px !important;
  padding: 0 !important; /* padding handled by inner elements */
  position: relative !important;
  overflow: hidden !important;

  /* Orange left accent bar */
  border-left: 5px solid var(--primary) !important;

  /* Top decorative ribbon line */
  border-top: 2px solid rgba(230,126,34,0.3) !important;

  /* Bottom decorative ribbon line */
  border-bottom: 2px solid rgba(241,196,15,0.2) !important;

  /* Shadow with orange glow */
  box-shadow:
    0 8px 32px rgba(0,0,0,0.4),
    0 2px 8px rgba(230,126,34,0.15),
    inset 0 1px 0 rgba(255,255,255,0.05) !important;

  /* Smooth transitions */
  transition: transform 0.25s ease, box-shadow 0.25s ease,
              border-left-color 0.25s ease !important;
}

.faq-item:hover {
  transform: translateY(-4px) translateX(2px) !important;
  box-shadow:
    0 16px 48px rgba(0,0,0,0.5),
    0 4px 16px rgba(230,126,34,0.3),
    inset 0 1px 0 rgba(255,255,255,0.08) !important;
  border-left-color: var(--secondary) !important; /* gold on hover */
}

/* Top decorative scroll bar */
.faq-item::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 3px !important;
  background: linear-gradient(90deg,
    var(--primary) 0%,
    var(--secondary) 50%,
    transparent 100%) !important;
  border-radius: 16px 16px 0 0 !important;
}

/* Bottom decorative scroll bar */
.faq-item::after {
  content: '' !important;
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 2px !important;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(241,196,15,0.4) 50%,
    transparent 100%) !important;
}

.faq-item__inner {
  padding: 1.75rem 2rem !important;
}

.faq-item__question {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.05rem !important;
  color: #FFFFFF !important;
  margin-bottom: 0.75rem !important;
  line-height: 1.4 !important;
}

.faq-item__answer {
  font-family: 'Inter', sans-serif !important;
  font-size: 0.97rem !important;
  color: #B0C4D8 !important; /* readable blue-grey on dark */
  line-height: 1.75 !important;
  display: block !important;
  visibility: visible !important;
  max-height: none !important;
  opacity: 1 !important;
}

/* Mobile */
@media (max-width: 768px) {
  .faq-section { padding: 50px 0 !important; }
  .faq-section__title { font-size: 1.7rem !important; }
  .faq-item__inner { padding: 1.25rem 1.5rem !important; }
  .faq-item__question { font-size: 0.97rem !important; }
  .faq-item__answer { font-size: 0.92rem !important; }
}
```

### HTML structure update for every FAQ item:
Wrap the inner content in a .faq-item__inner div:
```html
<div class="faq-item">
  <div class="faq-item__inner">
    <h3 class="faq-item__question">Question here?</h3>
    <p class="faq-item__answer">Answer here — fully visible.</p>
  </div>
</div>
```

### Apply this structure to:
- index.html FAQ preview section
- faq.html all 7 categories
- service-web-design.html
- service-google-profile.html
- service-facebook-page.html
- service-local-seo.html
- service-monthly-posting.html
- service-web-app.html
- pricing.html
- about.html
- services.html
- ALL other pages with FAQ sections

### "See All FAQ" button at bottom of homepage FAQ section:
Change from current style to btn--primary (orange):
```html
<a href="faq.html" class="btn btn--primary">
  See All FAQ →
</a>
```

---

## FIX 3 — SYSTEMATIC CARD STANDARD SITEWIDE

Every card on every page must follow ONE of these three card types.
No white cards on white/cream backgrounds anywhere.
Apply across: service pages, pricing page, portfolio, about, contact.

### Card Type A — Glass Dark (for dark section backgrounds):
```css
.card-glass {
  background: linear-gradient(135deg,
    rgba(44,62,80,0.9) 0%,
    rgba(26,37,47,0.95) 100%);
  border: 1px solid rgba(255,255,255,0.08);
  border-top: 2px solid rgba(230,126,34,0.4);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3),
              0 2px 8px rgba(230,126,34,0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card-glass:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.4),
              0 4px 16px rgba(230,126,34,0.2);
}
```

### Card Type B — White Elevated (for light section backgrounds):
```css
.card-elevated {
  background: #FFFFFF;
  border-radius: 16px;
  border-top: 4px solid var(--primary);
  box-shadow: 0 4px 24px rgba(0,0,0,0.10),
              0 1px 4px rgba(230,126,34,0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card-elevated:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.14),
              0 2px 8px rgba(230,126,34,0.15);
}
```

### Card Type C — Colored Featured (Tier 4 / package highlight):
Keep existing dark featured treatment — already looks great ✅

Apply Card Type A to:
- All service detail page content cards on dark sections
- FAQ cards (see FIX 2)
- Portfolio cards
- "Two Ways We Can Help" cards

Apply Card Type B to:
- Pricing Tier 1/2/3 cards (already have colored top border from v2)
- Any remaining white cards on light section backgrounds

---

## FIX 4 — PRICING PAGE CARD CONSISTENCY

The pricing page (pricing.html) homepage pricing preview cards
now have colored borders from Fix pass v2.
Verify the full pricing.html page matches:

- Tier 1: steel blue top border (#3498DB) — Card Type B
- Tier 2: Facebook blue top border (#1877F2) — Card Type B
- Tier 3: Google green top border (#34A853) — Card Type B
- Tier 4: dark featured card ✅
- Web App: dark gradient AI card ✅

The "Choose the Right Tier" section background:
Change from warm wheat to dark section:
```css
.pricing-tiers-section {
  background: var(--dark-mid) !important;
}
```
This makes the white elevated cards (Tier 1/2/3) pop visually
against the dark background instead of disappearing into cream.

---

## FIX 5 — DELETE OLD FIX FILES FROM REPO

Remove these files from the repo root:
- FIXES_V1.md
- FIXES_V2.md

Keep:
- AGENT_BRIEF.md
- TASKS.md
- PROGRESS.md
- FIXES_V3.md
- SITE_AUDIT_REQUEST.md
- SITE_AUDIT.md

Command:
```bash
git rm FIXES_V1.md FIXES_V2.md
```

---

## FINAL CHECK BEFORE PUSH

- [ ] Hero badge pill removed from index.html
- [ ] Hero flows cleanly: headline → sub → tagline → button
- [ ] FAQ cards: dark gradient background, orange left border
- [ ] FAQ cards: orange-to-gold top gradient ribbon
- [ ] FAQ cards: subtle gold bottom ribbon
- [ ] FAQ cards: hover lift + glow effect
- [ ] FAQ card titles: #FFFFFF
- [ ] FAQ card answers: #B0C4D8 readable on dark
- [ ] FAQ section background: dark (not warm wheat)
- [ ] "See All FAQ" button: orange btn--primary
- [ ] FAQ structure consistent on ALL pages
- [ ] Card Type A (glass dark) applied to all dark section cards
- [ ] Card Type B (white elevated) applied to all light section cards
- [ ] Pricing section background: dark-mid so cards pop
- [ ] FIXES_V1.md deleted from repo
- [ ] FIXES_V2.md deleted from repo

Commit and push:
```bash
git add .
git commit -m "Fix pass v3 — hero badge, FAQ cards, systematic card design sitewide"
git push
```

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695*
*FIXES_V3.md*
