# Photography placeholders

No real photography exists yet for Emily Signature Massage. Rather than using fake stock photos and
presenting them as final (explicitly against the brand brief), the site currently renders styled placeholder
blocks (`.media-placeholder` in `css/components.css`) with descriptive `aria-label`/alt text in place of every
photograph. The hero now uses a background **video** instead of a still — see `assets/video/README.md` for
that one.

When real/sourced photography is available, matching the direction in
`.claude/skills/massage-brand-art-direction/references/imagery.md` (natural light, hands, texture, editorial
framing — not glossy stock), drop files here and swap each `.media-placeholder` block for a real `<img>` with
matching `alt` text, `loading="lazy"`, and matching `aspect-ratio`.

**One exception:** the About Emily portrait (#8 below) must be an actual photo of the real Emily, not a stock
photo. A stock image standing in for a named, real person's portrait misrepresents identity to site
visitors — same category of problem as a fabricated testimonial, just visual instead of text. Every other
slot below is fine to source generically.

## Search queries by placeholder

Try **Unsplash** and **Pexels** first (free, and their editorial-style results tend to avoid the glossiest
stock-spa cliché) before Adobe Stock/Getty/iStock for a wider paid selection — especially for genuine
hands-on-client action shots, which free sites have fewer of. Screen every result against the avoid-list in
`imagery.md`: no stacked stones + bamboo, no lotus graphics, no teal/purple color grading, no glossy
over-retouched skin, no posed camera-facing smiling, nothing that reads clinical/medical.

1. **Introduction** (hands warming oil, 4:5) — `hands pouring massage oil natural light close up` ·
   `massage oil hands warm light editorial`
2. **Signature Deep Tissue** (4:3) — `deep tissue massage hands shoulder therapist natural light` ·
   `massage therapist hands pressure back editorial`
3. **Swedish** (4:3) — `swedish massage back long strokes natural light` · `massage hands back relaxation
   editorial`
4. **Hot Stone** (4:3) — `hot stone massage warm basalt stones back` · `hot stone therapy natural light
   close up`
5. **Sports Recovery** (4:3) — `sports massage therapist athlete leg recovery` · `massage therapy muscle
   recovery natural light`
6. **Prenatal** (4:3) — `prenatal massage side lying pregnant client therapist` · `pregnancy massage natural
   light editorial`
7. **Aromatherapy** (4:3) — `aromatherapy massage essential oil bottle hands` · `essential oil massage
   relaxation natural light`
8. **Gift cards** (wide, min-height ~18rem) — `gift card flat lay linen natural light neutral tones` ·
   `wrapped gift natural light minimal flat lay`
9. **About Emily portrait** (4:5) — must be a real photo of Emily, not stock. If a professional headshot
   isn't available yet, a candid natural-light photo in the studio works better than a posed corporate
   headshot anyway, per the brand's "editorial profile, not standard About Me block" direction.

## Shot list (from `index.html`, in order of appearance)

1. ~~Hero~~ — now a background video, see `assets/video/README.md`
2. Introduction — hands warming oil
3. Six service photos (Signature Deep Tissue, Swedish, Hot Stone, Sports Recovery, Prenatal, Aromatherapy)
4. Gift card section — single strong image
5. About Emily — real portrait (not stock)
