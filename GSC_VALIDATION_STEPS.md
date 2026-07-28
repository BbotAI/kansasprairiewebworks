# Google Search Console — Validation Steps
# After the 2026-07-28 GSC cleanup pass — follow these steps

## Step 1 — Already done (verified live, not just assumed):
- kansasprairiewebworks.com — all 20 pages already had correct canonical tags; sitemap and robots.txt already clean. No code changes needed.
- mikeservicesllc.com — all 11 pages already had correct canonical tags; sitemap and robots.txt already clean. No code changes needed.
- procleaningsalinaks.com — **index.html's canonical was wrong** (pointed to `/index.html` instead of `/`) — this was the real "alternate page with proper canonical tag" bug for this site. Fixed and pushed.
- All three Blogger blogs (blog.kansasprairiewebworks.com, blog.mikeservicesllc.com, blog.procleaningsalinaks.com) — live-checked via curl, both the plain URL and the `?m=1` variant. All three already emit a correct self-referencing canonical that resolves to the clean URL. **No manual Blogger theme edit was needed for any of them.** (The Blogger API v3 has no `themes` resource at all — this could only ever be fixed through the Blogger dashboard UI if it had been broken, never via API.)

## Step 2 — Validate in GSC (do these now, for all three properties):
1. Go to search.google.com/search-console
2. For each property — kansasprairiewebworks.com, mikeservicesllc.com, procleaningsalinaks.com:
   - Click Pages → "Alternate page with proper canonical tag" → Start New Validation
   - Click Pages → "Duplicate without user-selected canonical" → Start New Validation

## Step 3 — Leave these alone (Google handles them):
- "Crawled - currently not indexed" — Google's decision, resolves naturally
- "Discovered - currently not indexed" — already started, resolves naturally

## Step 4 — Redirect errors on blog.kansasprairiewebworks.com — investigated:

| URL | Finding |
|---|---|
| `web-development-vs-website-design-kansas-small-business_0431377441.html` | **Confirmed duplicate.** Same title, live, HTTP 200, but a *different* postId (448614953153943322) than the clean URL `web-development-vs-website-design-kansas-small-business.html` (postId 7394745673266303196). The clean version published 2026-07-14; the suffixed duplicate published 2026-07-21 — 7 days later, not a same-day double-click. blog.html only links the clean URL. **Not yet deleted** — deleting a live post requires Blogger OAuth write access, which isn't available from this local environment (only an unauthenticated API key exists locally; real write access lives inside the kpw-agency-brain Apps Script project's own authorization). Two options: (a) delete `web-development-vs-website-design-kansas-small-business_0431377441.html` manually from the Blogger dashboard — fastest, one click; (b) ask Claude Code to write a one-off Apps Script function into kpw-agency-brain and run it via `clasp run` to delete it via the API — more setup, touches production automation code for a one-time task. **Worth also checking:** the Agency Brain's Publish_Queue/Content_Ideas sheet for whether this topic got queued and posted twice — if the automated posting pipeline can double-publish a topic, this duplicate will recur. |
| `ai-powered-content-posting-central-kansas.html` | Live, single post, HTTP 200, no redirect, no duplicate found. GSC's redirect-error entry is likely stale from before Google's last recrawl. Safe to validate directly. |
| `ai-powered-marketing-cost-small-business-kansas.html` | Live, single post, HTTP 200, no redirect, no duplicate found. Same as above — safe to validate. |
| `using-claude-perplexity-market-salina-small-business.html` | Live, single post, HTTP 200, no redirect, no duplicate found. Same as above — safe to validate. |

**Action:** Validate the redirect-error issue in GSC for the 3 healthy URLs now. Hold off validating it for the duplicate post until it's actually deleted (validating before removing it just re-triggers the same error).

## Step 5 — Blogger manual fix:
Not required for any of the three blogs — see Step 1. `BLOGGER_CANONICAL_FIX.md` exists in each site's repo (and in KPW-TIER4-TEMPLATE for future builds) documenting this "verify live before assuming a fix is needed" finding.

## Timeline:
Google recrawls and clears validated errors within 2-4 weeks after validation is started.
Check back in GSC weekly to monitor progress.
