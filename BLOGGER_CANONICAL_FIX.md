# Blogger Canonical Fix — blog.kansasprairiewebworks.com

## Problem (as reported in GSC)
Google Search Console can show blog.kansasprairiewebworks.com/?m=1 URLs
as duplicate pages with an "Alternate page with proper canonical tag" error.
Blogger auto-generates ?m=1 mobile URLs for every post.

## Status: verified live 2026-07-28 — no action needed
**Correction to this file's original 2026-07-28 version:** it assumed a
manual Blogger theme edit was required, based on the skill template.
That assumption was wrong for this blog — live-checked instead of
guessing. Fetched a post URL both plain and with `?m=1` and confirmed
the theme already emits a correct self-referencing canonical tag that
resolves to the clean (non-mobile) URL in both cases:

```
canonicalUrl: https://blog.kansasprairiewebworks.com/2026/07/ai-powered-content-posting-central-kansas.html
```

Blogger's stock responsive theme handles this automatically — no manual
"Edit HTML" change was needed. The Blogger API v3 also has no `themes`
resource at all (confirmed against Google's discovery doc), so this
could not have been fixed via the API even if it had been broken —
it would only ever be fixable through the Blogger dashboard UI.

## If GSC still shows this error after this date
That most likely means Google is displaying a stale error from before its
last recrawl, not a live issue. Use URL Inspection in Search Console to
re-test a `?m=1` URL live; if it reports the clean URL as canonical,
click "Validate Fix" rather than editing the theme.

## If a future theme change ever removes the canonical tag
Add this inside the theme's `<head>` section (Blogger → Theme → Edit HTML):

```xml
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <link rel='canonical' expr:href='data:post.url'/>
<b:else/>
  <link rel='canonical' expr:href='data:blog.canonicalUrl'/>
</b:if>
```

## Related blogs (same check applies)
- blog.mikeservicesllc.com — verified live 2026-07-28, already correct
- blog.procleaningsalinaks.com — verified live 2026-07-28, already correct
