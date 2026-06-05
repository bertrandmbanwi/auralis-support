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

Before a profile changes your theme and writes editor, diff, and SCM settings, Auralis shows a confirmation that names the profile, the target theme, and the scope it will write to. `Auralis: Apply Recommended Experience` is the one exception: it applies the recommended Botanica profile to your user settings for the fastest first run.

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
