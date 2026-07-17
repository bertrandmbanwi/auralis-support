<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis Visual Contract

Auralis treats every published variant as a visual API. The meaning of syntax,
diagnostics, source control, tests, diffs, terminals, active tabs, and tool
windows must remain recognizable across updates.

## Stable promises

- Published variants are never materially recolored in place for novelty.
- New visual identities ship under new names; existing names keep their role,
  contrast direction, and status meaning.
- Accessibility floors remain release gates, not optional review notes.
- UI keys added for new editor or extension surfaces inherit the existing
  palette roles and do not redefine the palette.
- A material change requires before/after evidence, a changelog explanation,
  an explicitly approved baseline update, and a packaged previous-look
  contract that users can restore with one command.

The `Auralis: Restore Previous Published Look` command applies the packaged
0.8.1 visual contract only to the active Auralis variant. Running it again
restores the exact User settings it covered. Other themes and later manual
changes are left alone. Ownership is tracked per workbench color, TextMate
rule, semantic selector, and scoped semantic setting, so editing one contract
entry later does not prevent every other unchanged contract entry from
restoring.

## Automated evidence

`npm run qa:visual` renders and verifies a deterministic 27-image regression
matrix: nine VS Code scene boards plus Classic and Islands JetBrains scenes for
all nine published variants. The manifest also locks five clean-profile
PyCharm captures by exact file hash and rejects theme-source drift.

```text
npm run qa:visual
```

After a human has reviewed an intentional visual change, the approved baseline
can be replaced only with the explicit `npm run qa:visual:update` command.

`npm run audit:visual-contract` separately verifies the packaged palette
snapshot used for rollback. The baseline cannot be replaced by a normal build.
Creating a new contract requires an explicit release, reason, and approval
command; the old contract remains packaged for at least one major release.

Representative VS Code scenes cover TypeScript/Python, Java/Kotlin, Rust,
Terraform, Kubernetes YAML, Markdown, diffs, terminal output, debugging, and
tests.
JetBrains evidence covers both Classic and Islands behavior, including active
tabs, editor/tool-window separation, terminals, VCS, tests, search, diagnostics,
and the high-contrast/colorblind variants.

## Contribution path

Community ports should consume the versioned palette and association schemas,
then validate fixtures with `scripts/validate-community-port.js`. See
[Porting Auralis](PORTING.md) for the supported Zed, Neovim, Kitty, tmux, and
Starship formats. Visual changes should include:

1. the affected role and why it cannot use the existing role;
2. clean-profile before/after captures;
3. contrast and CVD-separation results;
4. classic/Islands evidence when JetBrains surfaces are affected;
5. an explicit baseline-approval note when the stable contract changes.

This process is intentionally stricter than a generated-color diff: a palette
can remain mathematically accessible while still breaking users' visual muscle
memory.
