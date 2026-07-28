# Blogger Canonical Fix — Manual Step Required

## Problem
Google Search Console shows blog.kansasprairiewebworks.com/?m=1 URLs
as duplicate pages with "Alternate page with proper canonical tag" error.
Blogger auto-generates ?m=1 mobile URLs for every post.

## Fix Required in Blogger Dashboard

1. Go to blogger.com → Kansas Prairie Webworks blog → Theme
2. Click "Edit HTML" (pencil icon)
3. Find the `<head>` section in the theme HTML
4. Look for any existing canonical tag
5. Add or replace with this code INSIDE `<head>`:

```xml
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <link rel='canonical' expr:href='data:post.url'/>
<b:else/>
  <link rel='canonical' expr:href='data:blog.canonicalUrl'/>
</b:if>
```

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

*This file cannot fix the issue on its own — the repo has no access to the
Blogger theme. The steps above must be completed manually in the Blogger
dashboard for blog.kansasprairiewebworks.com.*
