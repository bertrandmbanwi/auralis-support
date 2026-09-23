<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Accessibility Lab

Accessibility Lab turns the active theme's readability and status colors into
an inspectable report. It works with Syntalume themes and with other installed
themes that VS Code makes available to the extension.

Run:

```text
Syntalume: Open Accessibility Lab
```

## What the report checks

- Audited foreground/background pairs and their WCAG contrast ratios.
- Git added, modified, and deleted states.
- Test pass/fail and diagnostic error/warning states.
- Diff insert/remove and bracket-level separation.
- Terminal ANSI green/red and yellow/blue separation; missing ANSI keys are
  reported as missing rather than silently replaced.
- Approximate protanopia, deuteranopia, and tritanopia simulations for those
  status pairs.

Every CVD view shows the actual transformed color swatches alongside the
distance heuristic, so you can review the appearance rather than relying on a
number alone.

The color-vision-deficiency distance is a review heuristic, not a medical test
or a WCAG conformance claim. A flagged pair means it deserves visual review;
it does not by itself mean that a theme is inaccessible.

## Optional status axes

The Lab includes two previewable status-axis presets:

- **Sky / orange**: sky blue for positive states, burnt orange for negative
  states, magenta for warnings, and green for information.
- **Teal / violet**: teal for positive states, violet-magenta for negative
  states, amber for warnings, and blue for information.

Both are reviewed by the same approximate protanopia, deuteranopia, and
tritanopia heuristic shown in the Lab. They are visual-review aids—not medical
advice or WCAG conformance claims. Selecting an axis changes only the preview.
**Apply selected axis** shows a modal confirmation before anything is written.
Every role swatch reaches at least 4:1 against both black and white in the
release tests, so the axes remain viable across light and dark editor themes.

An applied axis uses only the public User-level
`workbench.colorCustomizations` setting, inside the active theme's `[Theme
Name]` block. Its exact owned keys are:

```text
gitDecoration.addedResourceForeground
gitDecoration.untrackedResourceForeground
gitDecoration.modifiedResourceForeground
gitDecoration.deletedResourceForeground
testing.iconPassed
testing.iconFailed
testing.iconQueued
testing.iconSkipped
editorError.foreground
problemsErrorIcon.foreground
editorWarning.foreground
problemsWarningIcon.foreground
editorInfo.foreground
problemsInfoIcon.foreground
diffEditor.insertedTextBackground
diffEditor.removedTextBackground
terminal.ansiGreen
terminal.ansiBrightGreen
terminal.ansiRed
terminal.ansiBrightRed
terminal.ansiYellow
terminal.ansiBrightYellow
terminal.ansiBlue
terminal.ansiBrightBlue
```

Choose **Exact reset** or run `Syntalume: Reset Accessibility Status Axis` to
restore each owned key to its value—or absence—before Apply. Unrelated keys you
add to the same theme block later remain. If you manually change one of the 24
owned keys after Apply, that newer value wins while reset still restores the
other unchanged Syntalume-written keys.

## Share or repair

Choose **Copy health report** to put the complete JSON report on the clipboard,
or **Save JSON** to write it where you choose. The report names theme color
keys and measurements; it does not include source code, file paths, project
names, or environment context names. It also identifies the selected status
axis and includes the exact color-key map that applying that axis would write.

Use **Display stress preview** to switch between the original colors, a
bright-room projector-washout approximation, and a low-quality-display
approximation with reduced chroma and quantized channels. These are honest,
device-agnostic review heuristics—not calibrated hardware profiles. They are
read-only and reversible because switching them changes only the Lab preview;
it writes no editor setting. Copy and Save export the selected stress report.

Choose **Repair contrast** to run Syntalume's reversible, theme-scoped contrast
repair. The repair adjusts lightness while preserving hue and leaves every
other theme untouched. Run `Syntalume: Repair Theme Contrast` again to remove the
repair exactly per color and syntax rule: later manual edits win, every other
unchanged repair entry restores, and unrelated entries remain. General Reset
removes repairs for every theme through the same exact, cross-feature history.

The shipped high-contrast themes and Frost Colorblind remain useful starting
points. Accessibility Lab is for verifying the exact active combination after
Tune, extension surfaces, and personal overrides are included.
