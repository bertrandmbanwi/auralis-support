<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Themes and Profiles

## Theme Variants

- `Syntalume Noir`: cinematic dark for deep work.
- `Syntalume Frost`: crisp technical dark for systems work.
- `Syntalume Paper`: warm light mode for daylight.
- `Syntalume Botanica`: quiet forest dark for infrastructure work.
- `Syntalume Noir High Contrast`: a true `hc-black` VS Code high-contrast theme with explicit contrast borders for review and debugging.
- `Syntalume Frost Colorblind`: a CVD-safe palette that puts status meaning on a blue/orange axis instead of red/green.
- `Syntalume Paper High Contrast`: a true `hc-light` VS Code high-contrast theme for dense daylight and projector work.
- `Syntalume Dimmed`: lower-glare dark mode for terminal-heavy sessions.
- `Syntalume Void`: true-black OLED dark (`#000000` canvas) with electric cyan/violet accents — pixels off, colors on.

## Complete Experience Profiles

- `Syntalume: Open Setup Dashboard` gives a guided first-run panel for applying profiles, syncing icons, checking formatter readiness, and cleaning legacy settings.
- `Syntalume: Apply Recommended Experience` applies `Syntalume Botanica: Calm Infra` as the fastest first-run setup.
- `Syntalume Noir: Deep Work`: focused dark editor, bracket guides, minimap, Focus Field, and Edit Heatmap.
- `Syntalume Frost: Systems`: technical dark editor, icons, minimap, and low visual drag.
- `Syntalume Paper: Daylight`: quiet warm light setup with reduced ambience.
- `Syntalume Botanica: Calm Infra`: Terraform-friendly forest palette with gentle focus and edit heat.
- `Syntalume Review Lens`: high-contrast review mode for diffs, SCM, Problems, and optional blame context.
- `Syntalume Terminal Heavy`: dimmed editor and stronger panel rhythm.
- `Syntalume AI Pairing`: tuned ghost text, inlay hints, chat, and generated edits. Apply it directly with `Syntalume: Apply AI Pairing Profile`.

## Where Profiles Write Settings

Profiles and customizations are scope-aware. The `auralis.profiles.scope` setting controls where they write:

- `ask` (default): Syntalume prompts you to choose Workspace or Global each time, when a folder is open.
- `workspace`: prefer the current folder's settings.
- `global`: write your user settings.

Before a profile changes anything, Syntalume shows a target-aware consent diff
generated from the same write plan used by Apply. It names every changed
theme, file/product icon, file association, font, editor, diff, SCM, terminal,
chat, and ambience value. `Syntalume: Apply Recommended Experience` is the one
exception: it applies the recommended Botanica profile to User scope for the
fastest first run.

Apply is transactional. A failure restores completed writes and retains exact
recovery ownership if VS Code cannot finish the rollback. User and Workspace
scope have independent ledgers. Reapplying another profile keeps the original
pre-Syntalume baseline; Reset restores an owned value only while it still equals
what Syntalume wrote. A later manual edit wins, and `files.associations` is
tracked per pattern so unrelated or newly added associations are never erased.

## Commands

```text
Syntalume: Apply Recommended Experience
Syntalume: Open Setup Dashboard
Syntalume: Apply Complete Experience
Syntalume: Switch Theme Variant
Syntalume: Enter Review Mode
Syntalume: Apply AI Pairing Profile
Syntalume: Customize Accent & Overrides
Syntalume: Reset Syntalume Settings
```
