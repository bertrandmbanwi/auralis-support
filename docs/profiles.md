<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Themes and Profiles

## Theme Variants

- `Auralis Noir`: cinematic dark for deep work.
- `Auralis Frost`: crisp technical dark for systems work.
- `Auralis Paper`: warm light mode for daylight.
- `Auralis Botanica`: quiet forest dark for infrastructure work.
- `Auralis Noir High Contrast`: a true `hc-black` VS Code high-contrast theme with explicit contrast borders for review and debugging.
- `Auralis Frost Colorblind`: a CVD-safe palette that puts status meaning on a blue/orange axis instead of red/green.
- `Auralis Paper High Contrast`: a true `hc-light` VS Code high-contrast theme for dense daylight and projector work.
- `Auralis Dimmed`: lower-glare dark mode for terminal-heavy sessions.
- `Auralis Void`: true-black OLED dark (`#000000` canvas) with electric cyan/violet accents — pixels off, colors on.

## Complete Experience Profiles

- `Auralis: Open Setup Dashboard` gives a guided first-run panel for applying profiles, syncing icons, checking formatter readiness, and cleaning legacy settings.
- `Auralis: Apply Recommended Experience` applies `Auralis Botanica: Calm Infra` as the fastest first-run setup.
- `Auralis Noir: Deep Work`: focused dark editor, bracket guides, minimap, Focus Field, and Edit Heatmap.
- `Auralis Frost: Systems`: technical dark editor, icons, minimap, and low visual drag.
- `Auralis Paper: Daylight`: quiet warm light setup with reduced ambience.
- `Auralis Botanica: Calm Infra`: Terraform-friendly forest palette with gentle focus and edit heat.
- `Auralis Review Lens`: high-contrast review mode for diffs, SCM, Problems, and optional blame context.
- `Auralis Terminal Heavy`: dimmed editor and stronger panel rhythm.
- `Auralis AI Pairing`: tuned ghost text, inlay hints, chat, and generated edits. Apply it directly with `Auralis: Apply AI Pairing Profile`.

## Where Profiles Write Settings

Profiles and customizations are scope-aware. The `auralis.profiles.scope` setting controls where they write:

- `ask` (default): Auralis prompts you to choose Workspace or Global each time, when a folder is open.
- `workspace`: prefer the current folder's settings.
- `global`: write your user settings.

Before a profile changes anything, Auralis shows a target-aware consent diff
generated from the same write plan used by Apply. It names every changed
theme, file/product icon, file association, font, editor, diff, SCM, terminal,
chat, and ambience value. `Auralis: Apply Recommended Experience` is the one
exception: it applies the recommended Botanica profile to User scope for the
fastest first run.

Apply is transactional. A failure restores completed writes and retains exact
recovery ownership if VS Code cannot finish the rollback. User and Workspace
scope have independent ledgers. Reapplying another profile keeps the original
pre-Auralis baseline; Reset restores an owned value only while it still equals
what Auralis wrote. A later manual edit wins, and `files.associations` is
tracked per pattern so unrelated or newly added associations are never erased.

## Commands

```text
Auralis: Apply Recommended Experience
Auralis: Open Setup Dashboard
Auralis: Apply Complete Experience
Auralis: Switch Theme Variant
Auralis: Enter Review Mode
Auralis: Apply AI Pairing Profile
Auralis: Customize Accent & Overrides
Auralis: Reset Auralis Settings
```
