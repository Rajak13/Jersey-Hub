# Jersey Hub Redesign — Starter Project

No build step needed. Just double-click `index.html` to open it in your browser and start editing.

## Where to put your images

Drop your images into the `/images` folder using these exact filenames — the page is already wired up to look for them:

| Filename                  | What it's for                                      |
|----------------------------|-----------------------------------------------------|
| `logo.png`                 | Nav logo (top left)                                 |
| `hero-football.jpg`        | Hero image shown by default / when football selected |
| `hero-cricket.jpg`         | Hero image shown when cricket ball is clicked        |
| `hero-basketball.jpg`      | Hero image shown when basketball is clicked           |
| `ball-football.jpg`        | Small circular football icon in the selector          |
| `ball-cricket.jpg`         | Small circular cricket ball icon in the selector       |
| `ball-basketball.jpg`      | Small circular basketball icon in the selector          |
| `promo-jerseys.jpg`        | Image in the bottom-left promo card                    |

If a file is missing, the page won't break — you'll see a placeholder message instead so you know exactly what's still needed.

## What's already built in

- Crossfade transition when switching between football / cricket / basketball (not a hard cut)
- Active-state ring around the selected sport ball
- Hover motion on the arrow buttons and nav links
- Fully responsive down to mobile (nav, hero, and promo card all restack cleanly)
- Visible keyboard focus states for accessibility
- Respects `prefers-reduced-motion` for users who've turned off animations system-wide

## Easy things to tweak yourself

- **Colors:** all defined as CSS variables at the top of `styles.css` (`--bg`, `--black`, `--white`, `--grey-text`, `--border`) — change these once, they update everywhere.
- **Fonts:** currently Archivo (headline) + General Sans (body), loaded from Google Fonts in `index.html`. Swap the `<link>` and the `font-family` values in `styles.css` if you want something else.
- **Copy:** all text lives directly in `index.html` — headline, subtext, promo card text, trust bar line.
- **Trust bar number:** currently "500+ jerseys delivered across Nepal" in `index.html` — update with your real number once you have it.

## Adding more sports later

To add a 4th sport (e.g. badminton), duplicate one `<button class="sport-ball">` block in `index.html`, give it a new `data-sport` and `data-image`, and drop the matching images into `/images`. The JS in `script.js` already handles any number of sport balls automatically — no code changes needed there.
