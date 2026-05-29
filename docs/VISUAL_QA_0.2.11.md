<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis 0.2.11 Visual QA

## Scope

- Marketplace conversion assets.
- Product icon font packaging.
- Generated media used by the Marketplace README and Getting Started walkthrough.

## Product Icon Font

- Product icon theme now points to `auralis-product-icons.woff` first with `auralis-product-icons.ttf` as fallback.
- The WOFF and TTF are generated from original Auralis SVG geometry in `scripts/build-assets.js`.
- Private glyph SVG sources are persisted in `product-icons/source` for design iteration and are excluded from Marketplace packages.
- Validation requires at least one WOFF product icon font source.

## Marketplace Media

- Added `media/marketplace-hero.png` as the primary Marketplace hero image.
- Added `media/complete-experience.png` as a static one-command setup explainer.
- Regenerated the existing theme previews, product icon specimen, file icon specimen, and Apply Complete Experience GIF.

## Follow-Up Visual Checks

- Inspect the Marketplace listing after publish to confirm the raw GitHub images refresh correctly.
- Confirm the product icon theme still appears in VS Code's Product Icon Theme picker.
- Confirm Explorer, Search, Source Control, Testing, Chat, Settings, folding controls, breakpoints, and terminal/output glyphs render with Auralis shapes.
