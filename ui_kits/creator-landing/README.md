# Creator network — landing page UI kit

The flagship marketing surface for this design system: a full **landing page** for the Snackpass creator network, modeled on the structure and voice of the live site (`creators.snackpass.co`).

`index.html` is a complete, scrollable, interactive page:
- **Sticky nav** — logo lockup, links, ghost "log in" + gradient "join the network".
- **Hero** — aurora wash, "20K+" badge, big lowercase Bricolage headline, gradient + ghost CTAs, a rotated cluster of vertical reel cards with a floating notification.
- **Stats strip** — traction numbers (20K+ creators · 100M+ views · 1,000s brands · 10,000+ reviews).
- **Why join** — 2×2 feature grid (built by creators / no more back & forth / real opportunities / simple scheduling), Lucide icons in tinted tiles.
- **See it in action** — a row of creator reel cards.
- **CTA band** — full-bleed product gradient with floating stickers.
- **FAQ** — interactive accordion (one open at a time).
- **Footer** — dark navy, inverted logo, link columns, inlined brand social icons.

**Build notes / what to swap for production:**
- Reel cards and the hero cluster use the brand's 3D **stickers** as stand-ins for real creator video thumbnails — drop in actual `<video>`/reel imagery for production.
- Functional UI icons are **Lucide** (CDN); social icons are inlined SVGs (Lucide dropped brand glyphs).
- Copy is adapted from the live creators site — friendly, lowercase, business/creator-first, in keeping with the brand voice.
