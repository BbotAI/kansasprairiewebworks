# FIXES_V4.md
# Kansas Prairie Webworks — Fix Pass 4
# kansasprairiewebworks.com
# Repo: bbotai/kansasprairiewebworks

---

## CLAUDE CODE — INSTRUCTIONS

Pull current repo first.
Read every service page HTML file before touching anything.
Execute fixes in order below — surgical edits only.
Do NOT change any text content — words are correct everywhere.
Fix CSS, layout, contrast, and broken elements only.

Delete FIXES_V3.md from repo after completing all fixes.

Commit message:
"Fix pass v4 — service pages, watermark, hero buttons, blog cards"

---

## FIX 1 — REMOVE WATERMARK FROM ALL SERVICE PAGE HEROES

### Problem:
Every service page hero has a large faded "Kansas Prairie Webworks"
or "KPW" watermark text bleeding through behind the hero content.
This same issue was fixed on index.html but NOT on service pages.

### Affected pages:
- service-web-design.html
- service-google-profile.html
- service-facebook-page.html
- service-local-seo.html
- service-monthly-posting.html
- service-web-app.html
- about.html
- services.html
- Any other page showing watermark text in hero

### Fix:
Find and REMOVE the watermark element from each page hero.
It will be a div/element with class containing "watermark",
"hero__watermark", "bg-text", or similar.
OR it may be a CSS ::before or ::after pseudo-element generating text.

In styles.css find and remove or set to display:none:
```css
.hero__watermark,
.hero-watermark,
.bg-text,
[class*="watermark"] {
  display: none !important;
}
```

Also check if it's generated via CSS content property:
```css
.hero::before,
.hero::after {
  content: none !important; /* if content was set to text */
}
```

Remove the actual HTML element if it exists in each page.

---

## FIX 2 — ALL SERVICE PAGE HERO CTA BUTTONS — ORANGE

### Problem:
Every service page hero call button is dark/outlined.
Needs to be bright orange btn--primary on ALL service pages.

### Fix in styles.css — add universal rule:
```css
/* Service page hero buttons — force orange */
.service-hero .btn,
.service-hero a[href^="tel"],
.page-hero .btn,
.page-hero a[href^="tel"],
.hero--service .btn,
[class*="service"][class*="hero"] .btn,
[class*="page"][class*="hero"] .btn {
  background: var(--primary) !important;
  color: #FFFFFF !important;
  border: none !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 20px rgba(230,126,34,0.4) !important;
}
[class*="service"][class*="hero"] .btn:hover,
[class*="page"][class*="hero"] .btn:hover {
  background: #d35400 !important;
  box-shadow: 0 6px 28px rgba(230,126,34,0.6) !important;
  transform: translateY(-2px) !important;
}
```

Also check each service page HTML and change any
btn--secondary or btn--outline on the hero CTA to btn--primary.

---

## FIX 3 — MONTHLY POSTING SERVICE CARDS (service-monthly-posting.html)

### Problem:
The "Three Services" section shows Blog Package, Facebook Manager,
and Google Manager as cards that are nearly invisible —
very dark text on dark background, no visual card separation.
Reads like unstyled plain text — completely unreadable on mobile.

### Fix — restyle all three service cards:
Each card needs the Card Type A glass dark treatment:

```css
.posting-service-card,
.service-option-card,
[class*="posting"][class*="card"],
[class*="service"][class*="option"] {
  background: linear-gradient(135deg,
    rgba(44,62,80,0.95) 0%,
    rgba(26,37,47,0.98) 100%) !important;
  border: 1px solid rgba(255,255,255,0.08) !important;
  border-top: 3px solid var(--primary) !important;
  border-radius: 16px !important;
  padding: 2rem !important;
  margin-bottom: 1.5rem !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3),
              0 2px 8px rgba(230,126,34,0.1) !important;
}

/* Card icon */
.posting-service-card .service-icon,
.posting-service-card i,
.service-option-card i {
  color: var(--primary) !important;
  font-size: 2rem !important;
  margin-bottom: 1rem !important;
}

/* Card title */
.posting-service-card h3,
.service-option-card h3,
.posting-service-card .card-title {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.2rem !important;
  margin-bottom: 0.5rem !important;
}

/* Price */
.posting-service-card .price,
.service-option-card .price,
[class*="price"] {
  color: var(--secondary) !important; /* gold */
  font-family: 'Poppins', sans-serif !important;
  font-weight: 800 !important;
  font-size: 1.5rem !important;
  margin-bottom: 0.75rem !important;
}

/* Description */
.posting-service-card p,
.service-option-card p {
  color: #B0C4D8 !important;
  line-height: 1.7 !important;
}

/* Feature list items */
.posting-service-card li,
.service-option-card li {
  color: #B0C4D8 !important;
  line-height: 1.7 !important;
}

/* Check icons in list */
.posting-service-card .check,
.posting-service-card li::before {
  color: var(--primary) !important;
}
```

Also check the actual class names in service-monthly-posting.html
and apply these styles to whatever classes are actually used.

---

## FIX 4 — BLOG CARDS AND "SEE ALL" BUTTON (service-monthly-posting.html)

### Problem 1 — "See All Blog Posts" button is broken:
The button shows only an emoji/icon with no text — completely broken.
It renders as just a small outlined square with a book emoji.

### Fix:
Find the "See All Blog Posts" link in service-monthly-posting.html.
Replace with:
```html
<a href="https://kansasprairiewebworks.blogspot.com"
   target="_blank"
   rel="noopener"
   class="btn btn--primary"
   style="display:inline-flex;align-items:center;gap:8px;margin-top:1.5rem;">
  📖 See All Blog Posts →
</a>
```

### Problem 2 — Blog cards white on cream background:
Both blog cards (Kaleb post + AI post) are white cards on
a light/cream section background — no visual separation.

### Fix — restyle blog cards:
```css
.blog-card,
[class*="blog"][class*="card"] {
  background: linear-gradient(135deg,
    rgba(44,62,80,0.95) 0%,
    rgba(26,37,47,0.98) 100%) !important;
  border: 1px solid rgba(255,255,255,0.08) !important;
  border-top: 3px solid var(--primary) !important;
  border-radius: 16px !important;
  overflow: hidden !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
  transition: transform 0.25s ease !important;
}
.blog-card:hover {
  transform: translateY(-4px) !important;
}
.blog-card__content {
  padding: 1.5rem !important;
}
.blog-card__title,
[class*="blog"] h3 {
  color: #FFFFFF !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.05rem !important;
  margin-bottom: 0.75rem !important;
}
.blog-card__excerpt,
[class*="blog"] p {
  color: #B0C4D8 !important;
  font-size: 0.95rem !important;
  line-height: 1.65 !important;
  margin-bottom: 1.25rem !important;
}
.blog-card .btn--primary {
  background: var(--primary) !important;
  color: #FFFFFF !important;
  border: none !important;
}
```

Change the blog cards section background to dark:
```css
.blog-examples-section,
[class*="blog"][class*="section"],
[class*="blog"][class*="examples"] {
  background: var(--dark) !important;
  padding: 60px 0 !important;
}
.blog-examples-section h2,
[class*="blog"][class*="section"] h2 {
  color: #FFFFFF !important;
}
.blog-examples-section p,
[class*="blog"][class*="section"] > p {
  color: var(--text-muted) !important;
}
```

### Problem 3 — Second blog post image not loading:
Check if the second blog card has a thumbnail image set.
If the src is missing or broken, replace with the Blogger OG image:
```html
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIBKAb2TLdKjq5F7YXHIf4X4I1X1I1X1/s1200/ai-small-business.jpg"
     alt="AI tools for small business — Kansas Prairie Webworks"
     loading="lazy"
     onerror="this.parentElement.style.background='linear-gradient(135deg,#1A252F,#E67E22)';this.style.display='none';">
```

If the exact Blogger thumbnail URL is unknown, use a CSS gradient
fallback for the image area instead of a broken image:
```css
.blog-card:nth-child(2) .blog-card__image,
.blog-card--ai .blog-card__image {
  background: linear-gradient(135deg, #1A252F 0%, #2C3E50 50%, #E67E22 100%);
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## FIX 5 — GENERAL SERVICE PAGE READABILITY

### Run through every service page and verify:

For each of these pages:
service-web-design.html
service-google-profile.html
service-facebook-page.html
service-local-seo.html
service-monthly-posting.html
service-web-app.html

Check and fix:

**A — Section background alternation:**
Dark sections must have: body text #ECF0F1, headings #FFFFFF
Light sections must have: body text #2C3E50, headings var(--dark-mid)
No grey text on dark backgrounds anywhere.

**B — Card titles on dark cards:**
All h3/h4 inside glass/dark cards: color #FFFFFF
Subtitles inside dark cards: color #B0C4D8

**C — Feature list items:**
On dark backgrounds: color #B0C4D8 or #ECF0F1
Checkmark icons: color var(--primary) orange

**D — "Two Ways We Can Help" sections:**
Titles: color #FFFFFF font-weight 700
Body text: color #B0C4D8

Add to styles.css:
```css
/* Universal service page readability */
.service-detail__content h2,
.service-detail__content h3,
.two-paths h3,
.path-card h3 {
  color: #FFFFFF !important;
  font-weight: 700 !important;
}

.service-detail__content p,
.two-paths p,
.path-card p {
  color: #B0C4D8 !important;
}

.service-detail__content li,
.two-paths li,
.path-card li {
  color: #B0C4D8 !important;
}

/* Light section overrides */
.section--light .service-detail__content h2,
.section--light .service-detail__content h3 {
  color: var(--dark-mid) !important;
}
.section--light .service-detail__content p,
.section--light .service-detail__content li {
  color: #4A4A4A !important;
}
```

---

## FIX 6 — DELETE OLD FIX FILE

Remove from repo root:
```bash
git rm FIXES_V3.md
```

---

## FINAL CHECK BEFORE PUSH

- [ ] Watermark removed from ALL service page heroes
- [ ] All service page hero CTA buttons: bright orange
- [ ] Monthly posting "Three Services" cards: visible, dark glass treatment
- [ ] Monthly posting "See All Blog Posts" button: full text, orange, working
- [ ] Blog cards: dark background, white titles, readable text
- [ ] Blog section background: dark not cream
- [ ] Second blog card: image or gradient fallback — no broken image
- [ ] All service pages: body text readable on dark sections
- [ ] All service pages: card titles white on dark cards
- [ ] "Two Ways We Can Help" titles: white on dark
- [ ] FIXES_V3.md deleted from repo
- [ ] No text content changed — words only, no edits

Commit and push:
```bash
git add .
git commit -m "Fix pass v4 — service pages, watermark, hero buttons, blog cards"
git push
```

---

*Kansas Prairie Webworks — kansasprairiewebworks.com*
*Owner: Kaleb Diehl — 785-577-7695*
*FIXES_V4.md*
