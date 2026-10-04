# B.Sc. Mathematics — Exam Roadmap 2026–2028

## Overview
A responsive, interactive examination and career infographic for a mathematics graduate in India, recreated from the `designer2-c3e5873b-5e80-4ee8-9ffd-c9573558297e` design handoff. Uses the selected Highlighter palette, self-hosted editorial fonts, milestone marks, and warm-paper visual system.

## Completed features
- Ten primary routes across six tracks and ten quarters (January 2026–June 2028).
- Swimlane, quarterly Planner, and Job/PG Fork views.
- Composable route, track, and eligibility filters; double-click track isolation and Reset.
- Twenty-eight also-consider routes with complete detail drawers.
- Full timelines, eligibility, competition, fees, pay, preparation time, and official portal links.
- Sixteen-source panel with research caveats and preserved projected-date flags.
- Actual current India calendar date, current-quarter positioning and derived countdowns.
- Next-action rings, hover tooltips, mobile horizontal scrolling, A3 landscape print styling.
- Accessible controls, modal focus trapping, Escape/scrim close and restored focus.
- Eight Playwright browser tests covering core interactions, responsive and print layouts.

## URLs and entry points
- Sandbox preview: https://3000-imi0l4aal6pdv7ilpl4nw-b237eb32.sandbox.novita.ai
- `/`: Interactive infographic; no query parameters required.
- `/api/health`: JSON status endpoint.
- `/static/*`: JavaScript modules, CSS and self-hosted fonts.
- `/#timeline-section`: Timeline anchor.
- `/#also-consider`: Secondary-route index.
- Production: not deployed. Sandbox URLs are temporary.

## Architecture and content provenance
Hono on Cloudflare Pages, built with Vite. The browser uses native ES modules and CSS without React/Babel CDN scripts, global datasets, or third-party font requests. The handoff dataset is normalized into `public/static/roadmap-data.js`: quarters, tracks, route metadata, primary records and events, secondary detail records, plans, eligibility labels and source links.

The original context came from project `3718f03c-499b-4131-9dd5-81b35d5b4085`; its transcript and timeline artifact were read before implementation. The authoritative content is the handoff dataset derived from `India_BSc_Maths_Career_Exams_2026-2028.xlsx`. No new exam research was conducted. Fees, pay and eligibility are historical workbook entries, not guaranteed current figures. Planning text remains the original 2026 research snapshot; the calendar marker and countdown use the actual date.

There is no persistent user storage, database or API secret. Filter/view state is session-only, as specified by the handoff. Dates are calculated in Asia/Kolkata; coarse dates use the first of the month. Past-quarter tinting is derived dynamically, and a 25-day grace is retained for coarse labels. Unlike the prototype's two concurrent 'now' columns, production marks only the actual current quarter. Projected entries are not presented as hard deadlines.

## User guide
Choose Both, Job route or PG route. Toggle tracks, or double-click one to isolate it. Enable Eligible now only to retain workbook-flagged eligible entries. Switch between Swimlane, Planner and Fork without losing filters. Click any exam, milestone or secondary card for details. Use the official portal to confirm the current notification. Close a drawer with its close button, Escape or the scrim. Use Print / save PDF for the designed print layout.

## Development and testing
```sh
npm install
npm run build
pm2 start ecosystem.config.cjs
curl http://localhost:3000/api/health
# First browser-test setup only:
npx playwright install --with-deps chromium
npm test
```
Service runs on port 3000 under PM2. Build outputs to `dist/`. Run a fresh build after source/static changes. `npm audit --omit=dev` reports zero production vulnerabilities at implementation time.

## Deployment and next steps
Cloudflare Pages-compatible production build is complete; production hosting has not been requested or configured. Choose Genspark Hosted Deploy or your own Cloudflare account before deployment. No service bindings are required for this read-only infographic.

Not implemented: accounts, saved exam selections, reminders, automated official-notification refresh, and runtime design tweaks (explicitly excluded by the handoff). Recommended next step is a content-verification pass against current official notifications before relying on application dates, followed by production deployment through the selected hosting path.
