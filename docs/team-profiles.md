<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Shared Team Profiles

A repository can recommend one editor-neutral Auralis appearance to everyone
who opens it. VS Code and the optional Auralis Companion for JetBrains consume
the same versioned `.auralis/profile.json` contract.

Nothing is applied silently. A trusted workspace shows the recommendation and
asks each person to **Apply**, choose **Not now**, or choose **Never for this
repo**.

## Write a profile

Run:

```text
Auralis: Write Team Profile Recommendation
```

Choose a variant, optional note, whether to include your current Tune 2
comfort/style choices, and whether to recommend repository-specific
Environment Guard labels. Auralis writes a version-1 profile such as:

```json
{
  "$schema": "https://auralislab.dev/schema/profile-v1.json",
  "version": 1,
  "variant": "botanica",
  "note": "Matches our Terraform review setup",
  "accent": "#5cc8a0",
  "comfort": {
    "warmth": 1,
    "contrast": 2,
    "saturation": 0
  },
  "style": {
    "comments": "italic",
    "keywords": "bold",
    "workbenchSurface": "layered",
    "bracketStyle": "rainbow"
  },
  "environmentGuard": {
    "enabled": true,
    "productionLabels": ["prod", "live"],
    "stagingLabels": ["staging", "uat"],
    "alert": "statusOnly"
  }
}
```

Commit the file so the recommendation travels with the repository. VS Code
validates `.auralis/profile.json` against the bundled schema while you edit it.

## Profile fields

- `variant` is one of `noir`, `frost`, `paper`, `botanica`,
  `noir-high-contrast`, `frost-colorblind`, `paper-high-contrast`, `dimmed`, or
  `void`.
- `comfort` carries whole-step warmth, contrast, and saturation values from
  -5 through 5.
- `style` carries Tune 2 choices for comments, keywords, functions, variable
  contrast, surfaces, borders, brackets, and density.
- `environmentGuard` carries only local guard policy. Production and staging
  labels are literal strings, limited in number and length, and never sent to
  a service.

Version 1 is strict: unsupported versions, unknown fields, invalid accents,
out-of-range comfort values, and unsupported enum choices reject the whole
recommendation instead of partially applying it.

## Apply behavior

When you choose **Apply** in VS Code:

- the Complete Experience profile is written to Workspace scope, leaving your
  global setup untouched;
- Tune and style values are written as reversible, theme-scoped
  customizations;
- guard labels become escaped workspace patterns, and the optional alert mode
  is applied only to that workspace.

The consent detail for VS Code is generated from the actual Complete
Experience write plan, then adds every changed comfort and style value. That
keeps themes, icons, font ligatures, all core file associations, editor/diff/
SCM/terminal/chat values, ambience, and Guard recommendations visible before
consent. Complete Experience, Guard, and Tune apply as one recoverable
Workspace transaction: a failure unwinds completed writes, while exact-reset
ownership is retained if VS Code itself prevents a full rollback.

The offer appears once per file content and returns only if the profile
changes. Reads are capped at 1 MiB before parsing, and the offer memory keeps
only a short local fingerprint—not the repository's profile content. Set
`auralis.teamProfile.enabled` to `false` to suppress automatic offers, or run
`Auralis: Apply Team Profile Recommendation` to inspect the current file
manually.

In the optional JetBrains Companion, **Review and apply shared profile** shows
the same consent diff before changing anything. JetBrains applies the variant,
project accent, Guard recommendation, all three comfort axes, common
comment/keyword/function typography, variable contrast, dimmed or monochrome
brackets, and compact or comfortable editor line spacing through public editor
scheme APIs. Adjusted text retains a 4.5:1 contrast floor.

Three boundaries are explicit in that preview:

- `workbenchSurface` and `borderStrength` require declarative Look and Feel
  resources, so a runtime Companion cannot apply them faithfully;
- `bracketStyle: rainbow` requires multi-level behavior without a stable public
  runtime API, so it remains unchanged;
- editor schemes are IDE-wide in JetBrains. The derived scheme has
  project-owned metadata and a stable local name, but selecting it affects the
  current IDE application.

Those fields stay in the portable profile and are reported as **not applied**;
the Companion does not invent an approximation. Exact reset restores the
captured Look and Feel and scheme only while they still match what the profile
applied. A later manual theme switch or edit to the derived scheme wins.

Legacy files using `profile`, `tune`, and a boolean `environmentGuard` remain
readable through an explicit, safe migration step. The consent diff names that
migration before Apply, and the next write uses version 1, so teams can migrate
without a flag day.
