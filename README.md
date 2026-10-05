# Zion Baptist Church — Taylor, MI

The website for Zion Baptist Church, a Reformed (Particular) Baptist church in Taylor, Michigan.
Built and maintained by Pastor Eli ([elijahdesent.com](https://www.elijahdesent.com)).

## Your website addresses

| Address | What it does |
|---|---|
| **https://www.ziontaylor.org** | **The live website.** This is the main address to share. |
| https://ziontaylor.org | Sends visitors to www.ziontaylor.org |
| https://www.zionbaptistchurchtaylor.com | Sends visitors to www.ziontaylor.org |
| https://zionbaptistchurchtaylor.com | Sends visitors to www.ziontaylor.org |

Both domain names are still registered at **Bluehost**, and **church email still runs through
Bluehost**. Only the website moved. Your email addresses (like pastor@ziontaylor.org) work exactly
as before. When Bluehost sends a renewal notice for either domain, **renew it**. If a domain
lapses, the website and the email on it both stop working.

---

## For Pastor Jones — quick guide

### Going live on Sunday

The **Watch Live** buttons (top menu, top banner, and Sermons section) all open
**www.ziontaylor.org/live**.

- When you go live on the church's **YouTube channel** (`@zionbaptistchurchtaylormi`), the
  stream shows up on that page by itself within a few seconds. You don't need to change anything
  on the website.
- When you're not live, the page shows the Sunday service time and links to recent sermons.
- **The stream has to be on YouTube, on that same channel.** A Facebook-only live won't show on
  the website. If you stream to both, the website will play the YouTube one.
- To check whether the website sees your stream, open **www.ziontaylor.org/api/live-status**.
  `"isLive":true` means it's showing on the site.

### Sermons update themselves

The **Recent Sermons** section pulls the newest videos from the YouTube channel automatically.
A newly posted sermon appears on the site within about 10 minutes. You don't need to edit anything.

### Making changes

You can edit the site by chatting with an AI assistant connected to this GitHub repository
(Claude, or ChatGPT with the website connector). Describe the change in plain English, for example:

- "Change the Wednesday Bible study time to 7:00 PM."
- "Update the welcome message from the pastor."
- "Add a note about our upcoming revival meeting."
- "Replace the photo in the Life at Zion section with this one."

Every saved change goes live on the website automatically, usually in under a minute.

If something looks wrong after a change, ask the assistant to **"undo my last change."**
Or email Pastor Eli.

### Website chat

The chat bubble in the corner of the site sends visitors' messages to the church's
**#ziontaylor** channel in Slack, and Pastor Jones gets an @-mention. Reply in that Slack thread
and the visitor sees your answer on the website.

### What's on the site

**Homepage** (top to bottom): video banner → Pastor's welcome → service times → what we
believe → Life at Zion photos → Scripture verse → recent sermons → giving → visit & contact.

**Other pages:**

| Page | Address |
|---|---|
| Watch live | `/live` |
| About Zion | `/about` |
| Meet our pastor | `/about/pastor` |
| Elders & leadership | `/about/leadership` |
| Statement of Faith | `/beliefs` |
| Church covenant | `/covenant` (and `/covenant/teaching`) |
| Membership | `/membership` |
| Common questions | `/faq` |
| How can I know I'm a Christian? | `/gospel` |
| Missions | `/missions` |
| Directions | `/directions` |

Links from the old WordPress site (like `/about-2/meet-our-pastor`) automatically send visitors to
the matching new page, so old bookmarks still work.

### Where the words live

| Section | File | What's there |
|---|---|---|
| Top banner / video | `src/components/Hero.tsx` | Church name, tagline, buttons |
| Pastor's welcome | `src/components/Welcome.tsx` | The welcome message |
| Service times | `src/components/Services.tsx` | Sunday & Wednesday times |
| What we believe | `src/components/Beliefs.tsx` | Beliefs cards |
| Life at Zion | `src/components/LifeAtZion.tsx` | Photo gallery |
| Scripture banner | `src/components/ScriptureBanner.tsx` | The featured verse |
| Sermons | `src/components/Sermons.tsx` | Sermon section text |
| Giving | `src/components/Give.tsx` | Online giving |
| Visit / contact | `src/components/Contact.tsx` | Address, phone, email, map |
| Footer | `src/components/Footer.tsx` | Bottom-of-page links & info |
| Live page | `src/app/live/page.tsx` | Watch Live page text |
| Other pages | `src/app/<page>/page.tsx` | e.g. `src/app/faq/page.tsx` |

### Photos

Photos live in the `public/` folder. Please use **real photos of Zion**. Don't use AI-generated
pictures of people. Main ones:

- `hero-video.mp4`: the looping preaching clip in the top banner (muted)
- `hero-poster.jpg`: the still image shown while that video loads
- `pastor-and-family.jpg`: Welcome section
- `pastor-preaching.jpg`: Sermons section
- `building.jpg`: Services section background
- `sunday-school.jpg`, `fellowship-breakfast.jpg`, `serving-community.jpg`: Life at Zion
- `og-image.jpg`: the preview picture when someone shares the site (1200×630)

---

## For developers / AI editors

**Read this before editing.** If a change breaks the build, Vercel quietly keeps the *old* version
live, so the edit seems to "not happen."

- **Framework:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript (strict).
  **Read `AGENTS.md` first.** This Next.js version has breaking changes compared with older
  training data.
- **Hosting:** Vercel project `zionbaptisttaylor`. Every push to `main` deploys to production.
  After pushing, check that the deploy succeeded. Don't assume it's live.
- **Canonical domain:** `https://www.ziontaylor.org`, set in `metadataBase` (`src/app/layout.tsx`),
  the JSON-LD in `src/app/page.tsx`, and `src/app/sitemap.ts`. Keep all three in sync.
- **DNS:** Nameservers stay at Bluehost because church email is hosted there. Only the apex `A`
  (`216.150.1.1`) and `www` `CNAME` point at Vercel. **Don't change MX records or `mail`
  records.**
- **Theme tokens** (the Modern Sanctuary palette: slate `ink`, warm `brass`, off-white `bg`) live
  in `src/app/globals.css` under `@theme inline`. There's no `tailwind.config.ts`.
- **Components** are flat in `src/components/`. Server components by default. Only `Navbar`,
  `VideoGrid`, and `AnimateOnScroll` are `"use client"`. Subpages use the shared `PageShell`.
- **Sermons feed:** `src/lib/youtube.ts` server-fetches the channel's RSS
  (`UCyWAEz_-RVuPsZwxqLdoULw`), revalidates every 10 min, and falls back to a hardcoded list.
- **Livestream:** `src/lib/live.ts` fetches `youtube.com/channel/<id>/live` and treats an
  `hlsManifestUrl` in the HTML as "live." The canonical `watch?v=` link gives the video id.
  `/live` is `force-dynamic` and embeds that video id, or shows the offline card.
  `/api/live-status` returns the raw result for debugging.
- **Next 16 gotchas:** dynamic-route `params` and `searchParams` are Promises (`await` them);
  `ref` is reserved and can't be used as a prop name; remote `<Image>` hosts must be allow-listed
  in `next.config.ts`.
- **Old-URL redirects** live in `next.config.ts` (`redirects()`).
- **For any change to an existing file, replace the smallest exact string you can.** Don't rewrite
  whole files unless asked.

### Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (same type-check Vercel runs)
```
