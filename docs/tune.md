<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis Tune and Calibration

Every Auralis theme is generated from a perceptual (OKLab) color engine — and
Tune puts a slice of that engine in your hands.

## Tune

Run:

```text
Auralis: Open Auralis Tune
```

The core controls reshape the **active Auralis theme**, live:

- **Warmth** — shift the whole palette toward amber or toward blue.
- **Contrast** — push text and surfaces apart (or soften them).
- **Saturation** — from vivid to nearly monochrome.
- **Accent** — replace the theme accent with any hex color.

Open **Advanced syntax and workbench style** for Tune 2 controls:

- **Comments** — use the theme default, regular text, or italics.
- **Keywords** — use the theme default, regular, bold, italic, or bold italic.
- **Functions** — use the theme default, regular text, or italics.
- **Variable contrast** — choose calm, standard, or strong emphasis. Calm
  keeps a 3:1 readability floor; strong raises emphasis without changing the
  palette's hue.
- **Workbench surface** — layered keeps the shipped depth, unified gives the
  workbench one continuous canvas, and minimal flattens only the editor chrome.
- **Border strength** — remove structural separators, keep the shipped subtle
  borders, or make them clear.
- **Bracket style** — keep the shipped rainbow, dim the same hues, or use a
  monochrome foreground.
- **Workbench density** — keep comfortable tabs or preview and apply compact
  editor tabs. Reset restores the value that was present before Tune took
  ownership, while later manual edits are preserved.

Syntax choices cover both TextMate grammars and semantic highlighting, so the
result stays consistent in languages whose extensions provide richer token
information. Every control previews in the active editor after a short delay;
click **Apply** when you are satisfied.

If General Reset runs while Tune is open, Auralis first drains queued preview
work, restores the transient preview, and closes the panel. It then resets the
committed Tune ownership, so closing an old panel cannot resurrect stale
values.

Tune also includes a live in-panel sample for TypeScript, Python, Java, Kotlin,
Rust, YAML, Terraform, Markdown, and diffs. Syntax typography, variable
emphasis, bracket treatment, surface depth, border strength, accent, and tab
density update in that sample immediately. Palette changes continue to use the
real, theme-scoped active-editor preview, so the sample never pretends to be a
full grammar or renderer.

Two guarantees no manual color tweaking gives you:

1. Changes apply **only to Auralis themes** (they are written as theme-scoped
   customizations), so other themes are never touched.
2. The same WCAG contrast floors that gate every Auralis release are
   re-enforced after every adjustment — you cannot tune yourself into
   unreadable text.

"Reset to shipped" restores every unchanged workbench color, TextMate rule,
semantic-token selector, density value, and Tune setting to its prior value or
absence. If you manually edit one Tune-owned entry after Apply, that newer
entry wins; every other unchanged Tune entry still resets, and unrelated later
entries in the same theme block remain.

### Shared profile mapping

The local `auralis.tune.adjustments` setting stays flat for compatibility.
When a team profile is imported or exported, Tune maps the advanced choices
to the editor-neutral `style` object:

- `commentStyle` ↔ `style.comments`
- `keywordStyle` ↔ `style.keywords` (`boldItalic` is written as `bold-italic`)
- `functionStyle` ↔ `style.functions`
- `variableContrast`, `workbenchSurface`, `borderStrength`, `bracketStyle`, and
  `density` keep the same names inside `style`

Theme-default choices are omitted from the shared profile, so it stays small
and future theme improvements continue to flow through.

## Calibration wizard

Run:

```text
Auralis: Calibrate Comfort & Contrast
```

Three quick choices — contrast strength, color intensity, temperature — each
previewing live as you pick. Cancelling restores exactly what you started
with. The result is saved as Tune adjustments you can refine later.

## Repair Theme Contrast

Works on ANY installed theme, not only Auralis. Run:

```text
Auralis: Repair Theme Contrast
```

Auralis reads the active theme's own file, measures the audited UI pairs and
every syntax color against WCAG floors, and repairs what fails by adjusting
lightness only — hues are never touched, so the theme keeps its character.
Deliberately muted roles (struck-through text, faded log noise) are
respected. Repairs apply as theme-scoped customizations: other themes are
untouched, and running the command again restores every unchanged repaired
color and syntax rule. A later manual edit to one repaired entry wins without
stranding the other repair-owned entries, and unrelated later entries remain.
General Reset removes repairs for every theme with the same guarantees.
