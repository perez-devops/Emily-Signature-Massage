---
name: massage-brand-art-direction
description: "Locked art direction for a boutique wellness / holistic massage brand — palette, typography, photography, texture, and application rules. Activate when designing or reviewing any visual asset for this massage brand: logo, website, social posts, banners, signage, packaging, uniforms, business cards, gift certificates, or menu/price lists. Positioning: calm, grounded, natural, tactile — not clinical, not glossy luxury-resort, not app-startup neon. Use this skill BEFORE generating visuals with banner-design, design, or frontend-design-ui-ux skills so output stays on-brand."
argument-hint: "[asset type] e.g. logo, website hero, instagram post, signage, business card"
metadata:
  author: user
  version: "1.0.0"
---

# Massage Brand Art Direction — Boutique Wellness / Holistic

Locked visual identity for a boutique wellness / holistic massage brand. This skill is a **direction**, not a
production tool — when asked to actually produce a logo, banner, web page, or social asset, follow this
direction and then hand execution to `design`, `banner-design`, or `frontend-design-ui-ux` as appropriate.
Never default to generic spa-brand clichés (glossy stock photos of stones-and-candles, lavender gradients,
teal-and-white "medical spa" look) — that is explicitly off-brand here.

## When to Activate

- Designing or reviewing the logo, wordmark, or brand mark
- Website design (hero sections, booking flow, service pages)
- Social media posts, stories, or ads
- Print: business cards, gift certificates, price/menu lists, flyers
- Environmental: signage, window decals, treatment room decor direction
- Packaging: oil bottles, candles, retail product labels
- Uniforms / staff apparel
- Any request to generate imagery, choose colors, or pick fonts for this brand

## Positioning in One Line

**Grounded, not glossy.** The brand should feel like a quiet forest clearing or a sunlit stone cottage —
tactile, unhurried, natural materials, human hands — never like a corporate day-spa chain or a wellness app.

## Core Direction (quick reference)

| Dimension | Direction |
|---|---|
| Mood | Calm, grounded, tactile, unhurried, natural, warm |
| Avoid | Clinical/medical coldness, glossy luxury-resort sheen, neon/app-startup energy, new-age mysticism clichés |
| Palette | Warm neutrals + one muted plant green + one clay/terracotta accent (full list: `references/palette.md`) |
| Typography | Organic/humanist serif for display + clean humanist sans for body (`references/typography.md`) |
| Photography | Natural light, macro texture, hands-on-skin, botanicals, linen/stone/wood — never studio-white or stock-clinical (`references/imagery.md`) |
| Texture | Visible material grain: linen weave, raw paper, unglazed ceramic, wood grain — used sparingly as backgrounds/dividers |
| Logo feel | A simple botanical or hand-drawn mark, or a restrained wordmark in the display serif — no gradients, no glossy 3D icons |
| Motion (if applicable) | Slow, breathing easing curves; nothing snappy or bouncy |

## Palette

Full palette with hex values, ratios, and pairing rules: `references/palette.md`

Quick swatch:
- **Base neutrals**: warm off-white `#F4EEE4`, sand `#DCCFB8`, stone grey-brown `#8C8175`
- **Ink**: deep bark brown `#2E2620` (used instead of pure black)
- **Plant accent**: muted sage `#7A8B70`
- **Clay accent**: terracotta `#B9764C`
- Ratio: ~70% neutrals, ~20% ink/text, ~10% accent color total (split between sage and clay, used sparingly as accents — never as large fills)

## Typography

Full pairing rationale and fallback stacks: `references/typography.md`

- **Display/headline**: an organic serif with some warmth and slightly imperfect character (e.g. Fraunces, Canela, or similar humanist serif) — used large, generous line-height, sentence case (not all-caps)
- **Body/UI**: a clean humanist sans (e.g. Inter, Söhne, or similar) at comfortable reading size, generous letter-spacing
- Never use a geometric/rounded "friendly startup" sans (Poppins, Quicksand) or a clinical grotesque (Helvetica-as-medical-brand) as the primary voice
- No more than 2 typefaces total

## Photography & Imagery

Full shot list and do/don't gallery: `references/imagery.md`

- Natural, soft directional light (window light, golden hour) — never flat studio lighting or ring-light glow
- Real textures in frame: linen sheets, raw wood, stone, dried botanicals, unglazed ceramic oil bottles
- Hands are a recurring motif — hands kneading, hands pouring oil, hands arranging herbs
- Skin tones rendered warm and true, not bleached/blue-toned
- Environmental shots (treatment room, garden, window light) over posed portrait shots
- Avoid: stock-photo stone stacks + bamboo, generic lotus flower icons, teal/purple gradients, glossy skin close-ups with heavy retouch, any imagery that reads as "corporate medical spa"

## Voice-to-Visual Bridge

Copy and captions paired with this direction should read unhurried and concrete (sensory, specific — "warm
oil, slow hands, quiet room") rather than superlative marketing language ("ultimate luxury experience,"
"transform your life"). Keep this in mind when composing text for any asset built under this direction.

## Application Notes

Per-touchpoint rules (logo lockups, social grid rhythm, signage materials, packaging label layout,
business card stock/finish): `references/applications.md`

## Workflow for a New Asset

1. Confirm the asset type and where this direction applies (use the touchpoint table in
   `references/applications.md`).
2. Pull the relevant palette subset and type pairing from the references above — do not invent new colors
   or fonts outside this system without flagging it to the user as a deviation.
3. For photography/illustration generation, write prompts using the imagery language in
   `references/imagery.md` (natural light, real texture, hands, botanicals) and explicitly negative-prompt
   the "avoid" list.
4. Hand off production to the appropriate skill:
   - Logo/full identity system → `design`
   - Banners/social/ads → `banner-design`
   - Web/product UI → `frontend-design-ui-ux` or `ui-styling`
5. Before presenting final output, check it against the Core Direction table — if anything reads glossy,
   clinical, or neon/app-startup, revise before showing the user.
