import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()
app.use('/static/*', serveStatic({ root: './public' }))
app.get('/api/health', (c) => c.json({ status: 'ok', project: 'exam-roadmap' }))
app.get('/', (c) => c.html(`<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#FBF6E9">
<meta name="description" content="Explore 38 examination and career routes for B.Sc. Mathematics graduates in India. An interactive 2026–2028 timeline, quarterly planner and career comparison.">
<title>B.Sc. Mathematics — Exam Roadmap 2026–2028</title>
<link rel="stylesheet" href="/static/style.css">
<script type="module" src="/static/app.js"></script>
</head>
<body><a class="skip-link" href="#timeline-section">Skip to exam timeline</a>
<main class="roadmap-page" id="roadmap-app"><p class="loading">Loading your examination roadmap…</p></main>
<div id="drawer-root"></div><div id="tooltip-root"></div>
<noscript>This interactive roadmap requires JavaScript. Please enable it to explore the exam timelines.</noscript>
</body></html>`))
export default app
