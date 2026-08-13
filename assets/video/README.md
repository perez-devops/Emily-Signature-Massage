# Hero background video

`index.html`'s hero section (`.hero-video`) expects two files here, matching the direction in
`.claude/skills/massage-brand-art-direction/references/imagery.md` (natural light, real texture,
editorial/documentary framing — not glossy stock-spa cliché):

- `hero-spa-treatment.mp4` (H.264, primary format)
- `hero-spa-treatment.webm` (VP9, lighter fallback for browsers that prefer it)
- `hero-poster.jpg` — a single still frame, shown before the video loads and if it fails

Until these exist, `js/hero-video.js` detects the missing/broken source and hides the `<video>`
element so the site falls back cleanly to the styled placeholder — nothing breaks visually in the
meantime.

## Search queries (stock video)

Try these on **Pexels Videos** and **Mixkit** first (free, and their editorial/natural-light
footage tends to avoid the glossiest spa-cliché grading) before Coverr or Adobe Stock/Getty for a
wider paid selection:

1. `massage therapy hands slow motion natural light`
2. `massage table linen warm light close up`
3. `hands massage back slow motion editorial`
4. `spa treatment natural window light` (screen results hard — this query alone tends to surface
   the teal-graded, candle-and-stones stock cliché; use it only combined with "natural light" and
   reject anything glossy/teal)
5. `therapist hands warming oil massage`

## What to screen out

Same avoid-list as photography (`imagery.md`): teal/purple color grading, stacked stones + bamboo,
lotus graphics, glossy over-retouched skin, posed camera-facing shots, anything that reads
clinical/medical rather than warm and tactile. A slow, mostly-static shot (hands, table, linen
moving slightly) works better as a hero background than anything with fast motion or a visible
face — it needs to sit *behind* text without competing with it.

## Technical specs

- **Length**: 6–15 seconds, seamlessly loopable (matching start/end frames helps — check before
  downloading if the source offers a loop-optimized version)
- **Resolution**: 1920×1080 minimum; the CSS uses `object-fit: cover` so any aspect ratio works,
  but a landscape source crops best across mobile/desktop
- **File size**: compress to roughly 3–8MB for web performance (use HandBrake or `ffmpeg`) — this
  autoplays on page load, so an uncompressed multi-hundred-MB source will hurt Core Web Vitals
- **Audio**: strip it or ignore it — the `<video>` is `muted` (required for autoplay in every
  browser) and `aria-hidden` (decorative only, not conveying information)
- **License**: confirm commercial-use terms on whichever clip you pick before publishing

## Compressing a downloaded clip (ffmpeg example)

```
ffmpeg -i source.mp4 -vcodec libx264 -crf 28 -preset slow -an -vf "scale=1920:-2" hero-spa-treatment.mp4
ffmpeg -i source.mp4 -vcodec libvpx-vp9 -crf 32 -b:v 0 -an -vf "scale=1920:-2" hero-spa-treatment.webm
ffmpeg -i hero-spa-treatment.mp4 -vframes 1 -ss 00:00:01 hero-poster.jpg
```
