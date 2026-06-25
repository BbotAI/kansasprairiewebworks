# BLOG_AGENT.md — Kansas Prairie Webworks
# Permanent file — never delete from project folder.

## HOW TO USE
Open Claude Code in the kpw-build folder and type:
  Add blog post: [paste Blogger URL here]

## WHAT CLAUDE CODE DOES AUTOMATICALLY
1. Fetch the URL — extract title, og:description, og:image, publication date
2. Open blog.html — find #blog-list
3. Replace the FIRST .blog-card--placeholder with a new live card:
   - src="images/blog-placeholder.webp"
   - data-thumbnail="[og:image URL]"
   - alt="[descriptive alt from post content]"
   - width="600" height="400" loading="lazy"
   - blog-date, h3 title, excerpt, Read More link → target="_blank" rel="noopener"
4. If all 8 slots are live — add as card 9, do not remove any cards
5. Commit and push: "Add blog post: [title]"

## RULES
- Never change existing cards, copy, or layout
- Use HTML entities: &mdash; &amp; &rarr;
- All images: src placeholder + data-thumbnail + width/height + loading="lazy"
- target="_blank" rel="noopener" on all blog links

## CURRENT BLOG CARD COUNT
Slot 1: LIVE — Do You Need a Website in 2026?
Slot 2: LIVE — Meet Kaleb — Your Local Web Designer in Salina KS
Slot 3: LIVE — How AI Is Changing What Small Businesses Can Do Online
Slot 4: LIVE — Single Page vs Multi-Page Website — Which Do You Need?
Slot 5: LIVE — Does My Small Business Need a Website?
Slot 6: PLACEHOLDER
Slot 7: PLACEHOLDER
Slot 8: PLACEHOLDER

Last updated: 2026-06-25

## SITE STRUCTURE
Blog page:    blog.html
Blog section: #blog-list > .service-grid.blog-grid
Card class:   .service-card.blog-card
Placeholder:  .service-card.blog-card.blog-card--placeholder
Placeholder img: images/blog-placeholder.webp
