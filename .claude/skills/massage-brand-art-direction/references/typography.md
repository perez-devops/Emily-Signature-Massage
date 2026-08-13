# Typography — Boutique Wellness / Holistic Massage

Two typefaces, maximum. One organic/humanist serif for display, one clean humanist sans for body and UI.

## Display / Headline

**Character**: warm, slightly imperfect, humanist — not a rigid geometric serif, not a thin high-contrast
"fashion editorial" serif.

Recommended (in order of preference, pick based on availability/licensing):
1. **Fraunces** (variable, free/Google Fonts) — soft optical sizing makes it feel handcrafted at large sizes
2. **Canela** (paid, Commercial Type) — if budget allows, closest to the "quiet luxury linen" feel
3. **Freight Display** or **Tiempos Headline** as alternates

Usage:
- Sentence case only — never all-caps for headlines (all-caps reads corporate/clinical)
- Generous line-height (1.15–1.3 for display sizes)
- Left-aligned by default; centered only for short standalone statements (e.g. a single quote)
- Avoid letter-spacing tighter than default — this typeface should breathe

## Body / UI

**Character**: clean, humanist, highly legible at small sizes — not geometric-rounded ("friendly app" look),
not a cold grotesque ("clinical/medical" look).

Recommended:
1. **Inter** (variable, free/Google Fonts) — safe, versatile, works well for booking UI and long-form copy
2. **Söhne** (paid) — warmer alternative if budget allows
3. System fallback stack: `-apple-system, "Segoe UI", Inter, sans-serif`

Usage:
- Body copy: 16–18px minimum, line-height 1.5–1.6
- Letter-spacing: default to slightly open (+0.01em) for small caps/labels (e.g. service category tags),
  default tracking for paragraph text
- Weight: regular for body, medium (not bold) for emphasis — avoid heavy/black weights, which read aggressive

## Explicitly Avoid

- **Geometric rounded sans** (Poppins, Quicksand, Nunito) — reads as "friendly startup app," undercuts the
  grounded/tactile mood
- **Cold corporate grotesque as primary voice** (Helvetica/Arial as the display face) — reads clinical
- **High-contrast fashion serif** (Didot, Bodoni) — reads luxury-resort, too sharp/cold for this brand
- **Script/handwriting fonts** — reads generic spa-menu cliché
- **All-caps headlines** anywhere in the system

## Pairing Example

```
Display: Fraunces, 500 weight, 48px, sentence case
"Slow hands, warm oil"

Body: Inter, 400 weight, 17px, 1.55 line-height
"A 75-minute deep tissue session focused on the shoulders and lower back,
using warmed oil and slow, sustained pressure."
```
