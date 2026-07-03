<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis Tune and Calibration

Every Auralis theme is generated from a perceptual (OKLab) color engine — and
Tune puts a slice of that engine in your hands.

## Tune

Run:

```text
Auralis: Open Auralis Tune
```

Four controls reshape the **active Auralis theme**, live:

- **Warmth** — shift the whole palette toward amber or toward blue.
- **Contrast** — push text and surfaces apart (or soften them).
- **Saturation** — from vivid to nearly monochrome.
- **Accent** — replace the theme accent with any hex color.

Two guarantees no manual color tweaking gives you:

1. Changes apply **only to Auralis themes** (they are written as theme-scoped
   customizations), so other themes are never touched.
2. The same WCAG contrast floors that gate every Auralis release are
   re-enforced after every adjustment — you cannot tune yourself into
   unreadable text.

"Reset to shipped" removes everything Tune wrote.

## Calibration wizard

Run:

```text
Auralis: Calibrate Comfort & Contrast
```

Three quick choices — contrast strength, color intensity, temperature — each
previewing live as you pick. Cancelling restores exactly what you started
with. The result is saved as Tune adjustments you can refine later.
