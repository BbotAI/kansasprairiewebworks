# KPW Agency Brain — Handoff (2026-07-10)

## Current Apps Script deployment

- **Live Web App URL (v38):**
  `https://script.google.com/macros/s/AKfycbyOvZLRDDl9uM6zcxA7vHH1VaimiRvttktcgV5MGDAhCc3nAlJQ3kpVk8nSLXQ5wVBt/exec`
- Replaces the old v37 URL (`AKfycbwD3uKrg-Tzty...`) everywhere it was referenced.
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

### Verification status

- `doGet` and `doPost` both confirmed live and routing correctly against v38 (tested with `getClient` and `verifyClient` actions — both returned correct JSON).
- The actual save+email fallthrough path was **not** live-fired during this update, to avoid writing a fake row into the real Clients sheet and spamming your real inbox with a test alert. Code is syntax-checked clean. First real confirmation will be your next real intake submission — worth watching for both emails (confirmation to the client, alert to you) on that first one.

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

## Local-only doc updates (not pushed — client/template folders, not their own git remotes for this)

- `KPW-TIER4-TEMPLATE/INTAKE_FROM_BUILD.md`
- `mike's_services_llc/INTAKE_FROM_BUILD.md`
- `pro_cleaning_services/INTAKE_FROM_BUILD.md`

All five INTAKE_FROM_BUILD.md files now reference v38 consistently.
