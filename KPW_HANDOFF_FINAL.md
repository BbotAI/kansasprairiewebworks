# KPW Agency Brain — Handoff (2026-07-11)

## Current Apps Script deployment — CONFIRMED LIVE

- **Live Web App URL (v38):**
  `https://script.google.com/macros/s/AKfycbyOvZLRDDl9uM6zcxA7vHH1VaimiRvttktcgV5MGDAhCc3nAlJQ3kpVk8nSLXQ5wVBt/exec`
- Verified 2026-07-11: `doGet` (`getClient`) and `doPost` (`verifyClient`) both returned correct live JSON.
- Confirmed on v38 in all 9 places checked: kpw-intake, kpw-client-portal, kpw-photo-curator (fixed this pass — was still on v37), and all 5 INTAKE_FROM_BUILD.md files (kpw-agency-brain, KPW-TIER4-TEMPLATE, mike's_services_llc, pro_cleaning_services, kpw-build).
- Deployment slot freed by undeploying the oldest live deployment (v16) — still at 20/20 after v38, so the next deploy will need another undeploy first.

## Two-stage client email system (new)

- **Email 1 — fires immediately** when a client submits the intake form (`doPost` → `saveClientData_`). Confirmation only, no portal link. Also sends an internal alert to `kansasprairiewebworks@gmail.com` with the client's info and a reminder that "Website Ready" is set to No.
- **Email 2 — fires when you flip "Website Ready" to `Yes`** on the Clients sheet. Sends the portal link + walkthrough email to the client, and logs a timestamp in "Welcome Email 2 Sent". Also fires an internal confirmation to your inbox.
- Implemented via a new **installable** trigger (`onClientSheetEdit`), not the simple `onEdit` — required because sending Gmail from a trigger needs full authorization, which simple triggers don't get.

### One-time manual setup still required (could not be automated)

`clasp run` requires the project to be configured as an API-executable, which this project isn't set up for — so these two functions must be run **once, manually, from the Apps Script editor** (Extensions → Apps Script → select function → Run):

1. **`ADD_WEBSITE_READY_COLUMNS`** — adds the "Website Ready" (default "No", backfilled on existing rows) and "Welcome Email 2 Sent" columns to the Clients sheet. Safe to re-run — skips columns that already exist.
2. **`createWebsiteReadyTrigger`** — installs the `onClientSheetEdit` trigger on the Clients sheet. Safe to re-run — detects and warns if already installed instead of creating a duplicate.

Run `ADD_WEBSITE_READY_COLUMNS` first, then `createWebsiteReadyTrigger`.

**Status as of 2026-07-11: I cannot confirm from outside whether you've run these yet.** The `getClient` API endpoint (`getClientVoiceProfile_` in Client.gs) was never updated to expose the "Website Ready" / "Welcome Email 2 Sent" columns in its JSON response — those two fields will never appear via `getClient` regardless of whether the columns exist on the sheet, because that function builds its response from an explicit fixed field list that doesn't include them. This doesn't affect the trigger itself (`onClientSheetEdit` reads the sheet directly by header name, not through this API) — it's just a blind spot for checking status remotely. Fixing it would require another `clasp deploy` (new URL, another round of updating references), so I left it as-is rather than redeploying unprompted. **Please confirm directly in the Sheet/Apps Script editor** whether both functions have been run — if not, run them now.

### Verification status

- `doGet` and `doPost` both confirmed live and routing correctly against v38 (tested with `getClient` and `verifyClient` actions — both returned correct JSON, all pre-existing client fields intact).
- The actual save+email fallthrough path was **not** live-fired during this update, to avoid writing a fake row into the real Clients sheet and spamming your real inbox with a test alert. Code is syntax-checked clean. First real confirmation will be your next real intake submission — worth watching for both emails (confirmation to the client, alert to you) on that first one.
- `buildWelcomeEmailBody_` (the old single-email, immediate-portal-link function) still exists in Code.gs and is still wired to a separate, pre-existing `action === 'welcomeEmail'` branch — untouched by this project since it's a different, manually-invoked code path, not the automatic intake-submit flow. If anything still calls that action directly, it will send the old-style email with an immediate portal link, bypassing the two-stage gate.

## Audio files

Canonical names now used consistently across `kpw-intake` and `kpw-client-portal`:

- `audio_intake_welcome.mp3` (intake site only)
- `audio_portal_welcome.mp3` (portal site only)
- `audio_track_country.mp3`
- `audio_track_hiphop.mp3`

Both sites' nav player + welcome showcase card point at these. Kept as 2 nav buttons + separate showcase card (not a dropdown) — matches your earlier feedback that the dropdown track selector was confusing.

## Stale-URL bug fixed

Found and fixed independently of the audio/email work: `kpw-intake`'s live form was still pointed at a **v31** deployment, and `kpw-client-portal` at v37 — both silently missing every backend fix shipped since. Both now point at v38.

## Repos pushed this update

- `kpw-intake` — audio update, then v38 URL fix
- `kpw-client-portal` — audio update, then v38 URL fix
- `kpw-agency-brain` — Code.gs/Client.gs two-stage email system, INTAKE_FROM_BUILD.md URL bump
- `kpw-build` — INTAKE_FROM_BUILD.md URL bump, this handoff file
- `kpw-photo-curator` — v38 URL fix (found stuck on v37 during 2026-07-11 verification pass, not part of original scope)

## Local-only doc updates (not pushed — client/template folders, not their own git remotes for this)

- `KPW-TIER4-TEMPLATE/INTAKE_FROM_BUILD.md`
- `mike's_services_llc/INTAKE_FROM_BUILD.md`
- `pro_cleaning_services/INTAKE_FROM_BUILD.md`

All five INTAKE_FROM_BUILD.md files now reference v38 consistently.

## Audio files — confirmed deployed

All 4 canonical files (`audio_intake_welcome.mp3`, `audio_portal_welcome.mp3`, `audio_track_country.mp3`, `audio_track_hiphop.mp3`) confirmed present in both `kpw-intake/` and `kpw-client-portal/` as of 2026-07-11.

## kpw_seo_check.js (kpw_credentials/) — no changes needed

Confirmed it authenticates via a Google service account for Search Console + PageSpeed Insights only — no dependency on the Apps Script deployment URL. `SITES` config (kansasprairiewebworks.com, mikeservicesllc.com, blog.mikeservicesllc.com active; procleaningsalinaks.com pending GSC verification) matches the `CLIENTS` list and is self-consistent. Nothing to fix here.

## All repos — git status as of 2026-07-11

| Repo | Latest commit | Pushed |
|---|---|---|
| kpw-intake | `6a56cc3` fix: point intake form to live v38 deployment | yes |
| kpw-client-portal | `3361e85` fix: point client portal to live v38 deployment | yes |
| kpw-agency-brain | `b0e366e` docs: update Apps Script URL references to v38 | yes |
| kpw-build | `aeebf0d` docs: bump Apps Script URL to v38, add handoff | yes |
| kpw-photo-curator | `d59bd95` fix: update AGENCY_BRAIN URL to v38 | yes |

kpw-agency-brain and kpw-build both have pre-existing unrelated untracked/modified files (`.gitignore` credentials-ignore rule, `GEO_CONTEXT.md.md`, pricing/template docs, raw audio source files) left alone — not part of this work.
