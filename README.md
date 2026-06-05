# Zion Baptist Church — Taylor, MI

The website for Zion Baptist Church, a Reformed (Particular) Baptist church in Taylor, Michigan.
Built and maintained by Pastor Eli ([elijahdesent.com](https://www.elijahdesent.com)).

**Live site:** https://www.zionbaptistchurchtaylor.com

---

## How to edit the site (for Pastor Jones)

You can edit this site by chatting with an AI assistant connected to this GitHub repository
(Claude, or ChatGPT with the GitHub connector). Just describe the change in plain English —
for example:

- "Change the Wednesday Bible study time to 7:00 PM."
- "Update the welcome message from the pastor."
- "Add a note about our upcoming revival meeting."

Every saved change ships to the live website automatically within about a minute.

### Where the words live

Almost everything you'd want to change is text inside the section files in `src/components/`:

| Section | File | What's there |
|---|---|---|
| Top banner / video | `src/components/Hero.tsx` | Church name, tagline, buttons |
| Pastor's welcome | `src/components/Welcome.tsx` | The welcome message |
| Service times | `src/components/Services.tsx` | Sunday & Wednesday times |
| What we believe | `src/components/Beliefs.tsx` | Beliefs cards |
| Scripture banner | `src/components/ScriptureBanner.tsx` | The featured verse |
| Sermons | `src/components/Sermons.tsx` | Sermon section text |
| Visit / contact | `src/components/Contact.tsx` | Address, phone, email, map |
| Footer | `src/components/Footer.tsx` | Bottom-of-page links & info |

The page order is set in `src/app/page.tsx`. The site's name, address, and search-engine
description live in `src/app/layout.tsx` and `src/app/page.tsx` (the JSON-LD block).

### Sermons update themselves

The **Recent Sermons** section pulls the latest videos automatically from the church's YouTube
channel (`@zionbaptistchurchtaylormi`). When a new sermon is posted there, it appears on the site
within a few minutes — no editing required.

### Photos

Replace files in the `public/` folder to swap images:

- `hero-video.mp4` — the looping preaching clip in the top banner (muted, no sound needed)
- `hero-poster.jpg` — the still image shown while the video loads
- `og-image.jpg` — the preview image when the site is shared (1200×630)
- `favicon.svg` — the little icon in the browser tab

To show a real photo of the pastor in the Welcome section, add `pastor.jpg` to `public/` and ask
the AI to "use the pastor photo in the welcome section."

---

## For developers / AI editors

- **Framework:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript
- **Read `AGENTS.md` first** — this Next.js version has breaking changes vs. older training data.
- Theme tokens (the Modern Sanctuary palette: slate `ink`, warm `brass`, off-white `bg`) live in
  `src/app/globals.css` under `@theme inline`. No `tailwind.config.ts`.
- Components are flat in `src/components/`. Server components by default; only `Navbar` and
  `VideoGrid` (and `AnimateOnScroll`) are `"use client"`.
- The sermons feed is a server fetch of the YouTube RSS feed in `src/lib/youtube.ts`, revalidated
  every 10 minutes, with a hardcoded fallback list if the feed is unreachable.
- **For any change to an existing file, replace the smallest exact string you can.** Don't rewrite
  whole files unless asked.

### Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
