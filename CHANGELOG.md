<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Changelog

## Unreleased

- Exact reset correctness: focused resets now preserve pre-existing empty
  theme-scoped blocks, and Icon Studio's manifest bounce can no longer record
  a stale ledger edge that made a later reset revert itself.
- Environment Guard no longer removes user-authored color customizations
  that coincide with Auralis tint values; the tint peel is now gated on
  Auralis's own recorded writes.
- Auralis Tune enforces the token-color contrast floors on the contrast
  slider's softest settings, persists crash-safe ownership for live previews
  (leaked previews are cleaned up on the next activation), keeps panel
  controls across tab switches, and validates accents consistently
  (#RGB/#RRGGBB, with visible feedback).
- Accessibility Lab surfaces webview action failures instead of swallowing
  them; the Setup Dashboard no longer reports successful actions as errors
  after its panel closes; Rhythm retries a failed theme write on the next
  tick; shared-profile notes are sanitized before the consent dialog.
- JetBrains Companion parity: strict profile JSON parsing, exact variant
  matching, guard fields applied only when the profile contains them, and
  exact reset restoring the pre-Companion baseline after a profile.
- Community ports: readable Zed muted text and tmux copy-mode selection in
  all nine variants; the in-product Ghostty export drops the extra `.txt`.
- The bracket-hue audit now checks the depth-6-to-depth-1 wrap pair (shipped
  palettes are frozen at their published values under the visual contract).
- The browser-bundle budget rose from 275 KiB to 284 KiB to carry these
  web-host fixes, Icon Studio's update self-healing, and the stale-read
  settling that keeps exact reset correct on slow hosts; the bundle is
  280.8 KiB.
- Shipped help docs use the real command titles, the current bundle ceiling,
  and document Icon Studio behavior across extension updates.

## 0.9.0 — 2026-07-17

- The shared Auralis status entry is now absent while idle. It appears only
  for Guard state (including the opt-in safe indicator) or an active Review
  Session, keeping command-palette, walkthrough, and dashboard access quiet.

- **Auralis Tune 2** adds advanced comment, keyword, function, variable
  contrast, workbench surface, border, bracket, and density controls while
  keeping live changes theme-scoped, contrast-protected, and exactly
  reversible per color, TextMate rule, semantic selector, and setting. Later
  manual edits win without stranding other unchanged Tune, Contrast Repair, or
  previous-look entries during reset.
- **Auralis Icon Studio** adds a searchable inventory and versioned portable
  presets. Desktop Studio now applies exact saturation/opacity plus file,
  folder, project-root, and language associations through one bounded,
  extension-owned Explorer theme, with transactional apply/reset and
  cache-safe refresh. Browser hosts keep four genuinely generated appearances
  across every family and label custom controls as read-only preset previews.
- **Accessibility Lab** audits active-theme contrast and diagnostic, git, test,
  diff, bracket, and terminal-status separation under approximate common CVD
  simulations, with two reviewed theme-scoped status axes, copy/save reports,
  and reversible contrast repair.
- **Shared profile v1** makes `.auralis/profile.json` versioned and
  editor-neutral, including comfort, Tune 2 style choices, literal
  repository guard labels, and consent-based VS Code/JetBrains application.
  VS Code consent is now generated from the actual full write plan, and
  Complete Experience, team Guard/Tune, Review Sessions, Customize Accent,
  Project Theme, and Auralis Type use transactional per-scope/per-key
  ownership. Prior values survive reapply, later manual edits win, unrelated
  file/color associations stay untouched, and interrupted restore remains
  retryable instead of discarding recovery state.
- Terraform, YAML, web, Better Comments, bracket, Switch Variant, and direct
  icon commands now use the same transactional exact-reset standard. User and
  Workspace baselines stay separate, optional companion settings skip safely,
  and icon sync retains the original pre-Auralis choice across theme changes.
  General Reset also unwinds interleaved Auralis features in their true reverse
  application order, so intermediate values from Icon Studio, profiles, Type,
  Tune, Accessibility, accent/project customization, previous-look, or Guard
  can never become a stranded baseline; genuine later manual edits still win.
- **Environment Guard** now shares one restrained Auralis status entry,
  supports repository-specific rules and optional once-per-signal warnings,
  explains matched local signals, and stores only a hash for alert snoozing.
- **Auralis Theme for JetBrains** gains Islands-aware surface coverage,
  packaged plugin artwork, icon substitutions, change notes, and verifier CI;
  behavioral parity lives in the separate optional **Auralis Companion** with
  one status widget, profiles, project identity, Rhythm, Guard, diagnostics,
  and exact reset. Accepted JetBrains profiles now apply faithfully supported
  comfort, syntax typography, variable-contrast, bracket, and density choices
  through a project-owned editor scheme; the consent preview names unsupported
  Look and Feel fields, and reset preserves later manual scheme edits.
- Added quiet, user-initiated diagnostics, visual-bug, icon, language-coverage,
  setup-sharing, and review paths. No report is sent or review prompt shown
  automatically.
- Added stable GitLens, Error Lens, and GitHub Pull Requests color surfaces,
  Spanish and French marketplace/runtime localization foundations, real
  browser/fork QA, visual-regression and performance budgets, canonical
  post-publish version verification, a public palette package, and a validated
  community port kit.
- Repositioned the Marketplace copy and website around **Auralis — Adaptive
  Themes & Icons**, with canonical VS Code Marketplace, Open VSX, and public
  JetBrains Marketplace links and measured, local-first performance language.

## 0.8.1

- License activation now verifies signed keys against the embedded production public key (previously fail-closed pending key generation). No behavior change for beta users — everything remains unlocked, and no license is required for anything.

## 0.8.0

- **Repair Theme Contrast**: one command scans the ACTIVE theme — Auralis or any installed theme — for WCAG contrast violations across audited UI pairs, plus genuinely unreadable syntax colors (below 3:1 — deliberately muted roles are respected), and repairs them hue-intact by adjusting lightness only. Repairs apply as theme-scoped customizations (other themes untouched) and are removed exactly by running the command again. No other theme product ships this.
- **Auralis Type**: curated font pairings per variant — JetBrains Mono, Fira Code, Cascadia Code, Victor Mono, IBM Plex Mono (all free, SIL OFL) — applied to editor and terminal in one command, with exact restore of whatever fonts you had before.
- **Ports program**: machine-readable palettes for all nine variants now ship at `ports/palettes.json` on the support hub, with a porting guide (`docs/porting.md`) for community ports — Neovim, Zed, tmux, starship, and anywhere else with colors.

## 0.7.0

- **Project themes & accents**: `Auralis: Assign Project Theme & Accent` gives each workspace its own variant and a deterministic window accent derived from the project's folder name (same name, same color, every machine) — title bar and activity border tint via workspace settings only, cleared exactly on request. Ends the which-window-is-which problem on multi-project days.
- **Open VSX**: Auralis is published to the Open VSX registry, so VS Code forks and web editors that install from Open VSX (VSCodium, Gitpod, and several AI-first editors) get first-class access.
- **Auralis for JetBrains IDEs**: all nine variants ship as a JetBrains plugin (UI themes + editor color schemes incl. the full ANSI console palette), generated from the same palette source as the VS Code themes and terminal ports.

## 0.6.4

Presentation patch — no theme, icon, or runtime behavior changes.

- The variant gallery on the Marketplace listing is now a three-column card grid, and every card opens its full-resolution view when clicked.
- The listing and the support hub link the new website, auralislab.dev.

## 0.6.2

Presentation patch — no theme, icon, or runtime behavior changes.

- The Marketplace listing was redesigned around a gallery: every one of the nine variants now has its own preview card showing the same code and an integrated terminal running the theme's full ANSI palette, with an Auralis wordmark drawn from the theme's own terminal colors. Developer-facing content moved out of the listing into internal docs.
- New runnable terminal demo (`terminal-colors.sh`, published on the support hub next to the ports): prints your terminal theme's 16-color palette and the Auralis wordmark in those colors — pair it with Export Terminal Theme.

## 0.6.1

Documentation patch — no theme, icon, or runtime behavior changes.

- The packaged Help Center catches up with 0.6.0: a new Export Terminal Theme guide, shared Tune presets documented in the team profiles guide, Auralis Void in the variant lists, current icon coverage and product-glyph notes, and offline signed-key verification in the privacy notes.
- The Getting Started walkthrough's "Make it yours" step now offers Export Terminal Theme.
- All preview images re-rendered from the 0.6.0 palettes, including the new Auralis Void preview.
- The public support hub now hosts the six newer feature guides and the complete generated terminal ports tree for every theme.

## 0.6.0

A depth-and-polish release: a ninth theme, pictorial icons, deeper syntax coverage, in-product terminal export, team-shared Tune presets, real entitlement plumbing, and a set of correctness fixes.

New:

- **Auralis Void**: a true-black OLED variant (`#000000` canvas) with electric cyan/violet accents — pixels off, colors on.
- **Export Terminal Theme**: the generated iTerm2, Windows Terminal, Alacritty, WezTerm, Ghostty, and Warp ports are now available inside VS Code — `Auralis: Export Terminal Theme` writes the palette of the active Auralis theme for the terminal you pick, byte-identical to the committed `ports/` tree. Also on the Setup Dashboard.
- **Team-shared Tune presets**: `.auralis/profile.json` can now carry Tune adjustments and an accent alongside the recommended profile, so a whole team gets the identical calibrated environment. Values from the repo are clamped and validated, applying still always asks first, and `Write Team Profile Recommendation` offers to include your current Tune settings.
- **Pictorial file icons**: Docker, Python, React (jsx/tsx), Kubernetes, Helm, git, SQL, Rust, Cargo, secrets, shell, and image files trade their letter chip for a hand-drawn glyph; everything else keeps the chip system.
- **Icon coverage roughly doubled**: 398 icon definitions (was 238), 227 file extensions, 312 file names, 69 language ids, and 122 folder names — jest, vitest, playwright, cypress, storybook, babel, angular, nuxt, .NET, devcontainers, openapi/swagger, bicep, CDK, firebase, cloudflare, expo, bun, deno, HashiCorp vault/nomad/consul/packer, dbt, argo, flux, bazel, grafana, prometheus, `.tfstate`, `.d.ts`, `*.test.*`/`*.spec.*`/`*.stories.*`, and many more.
- **Product icons**: the window minimize/maximize/restore controls now have three distinct glyphs, every common IntelliSense symbol kind has its own glyph (12 distinct shapes instead of one shared mark), and `code`, `eye`, `tag`, and `arrow-both` are covered. 583 workbench ids over 111 bespoke glyphs.
- **Richer syntax**: dedicated rules for regex internals (quantifiers, anchors, groups, escapes), string interpolation, SQL, C#, Java, Kotlin, Swift, C/C++, and GraphQL; new semantic modifiers (`*.async` italic, `*.static` underline, `*.abstract`, Rust lifetimes, Python dunder/self); JSON keys and string values are finally distinct colors; full `symbolIcon.*` theming; terminal selection, debug stack-frame highlights, fold/hover/range highlights, and diff gutter keys added (509 workbench colors per theme, up from 462).
- **Show License Status** command, and license activation now verifies signed keys (ECDSA P-256, offline, WebCrypto) with fail-closed handling; the documented `entitlementState()`/`isEntitled()` gate is now real code with tests. Everything remains unlocked during the public beta.

Fixed:

- Auralis Tune, Calibrate, and team profiles work on vscode.dev again (a Node-only `Buffer` call had broken them in browser hosts; a packaging gate now blocks Node globals from the web bundle).
- Environment Guard no longer deletes user-set status/title bar colors: it only removes tint values it wrote itself, restores anything it covered, and stops its background poll when disabled.
- Doctor CLI probes now work on Windows for npm/choco-installed tools (`.cmd` shims).
- Edit Heatmap highlights stay on the lines they belong to when lines are inserted or deleted above them.
- Language and file-association setup no longer copies workspace settings into user settings (or vice versa) when merging.
- Rainbow bracket colors are guaranteed visually distinct in all themes — six designed hues per theme, enforced by a new audit gate.
- Unverified breakpoints no longer render as a checkmark in the product icons, and window-control glyphs are no longer identical.
- Theme switches no longer leak decoration handles, and rapid theme changes rebuild ambience decorations once instead of twice.
- Publish workflow now requires main, runs the integration smoke test, and CI gained Windows and minimum-VS Code (1.90) test jobs.

## 0.5.0

Signature features — all local-first, no network, no telemetry:

- **Environment Guard**: the workbench warns you when you are pointed at production. Local kubectl current-context, Terraform workspace, and git branch signals are matched against configurable patterns; a red `PROD` shield (amber for staging) appears in the status bar with an optional status bar/title bar tint. File reads only — Auralis never runs kubectl, terraform, or git for this — trust-gated and off by default.
- **Auralis Tune**: reshape the active Auralis theme in OKLab space with warmth, contrast, saturation, and accent sliders, previewing live. Overrides apply theme-scoped (other themes untouched) and the WCAG contrast floors that gate every release are re-enforced after each adjustment.
- **Calibrate Comfort & Contrast**: a three-question wizard (contrast strength, color intensity, temperature) with live preview and exact cancel-restore, saved as Tune adjustments.
- **Rhythm**: scheduled theme switching — Paper by day, Botanica at dusk, Noir at night, Dimmed past midnight by default, fully configurable. A manual theme change always wins until the next slot boundary.
- **Edit provenance**: the Edit Heatmap can color bulk edits (multi-line insertions arriving in one change — the shape of AI suggestions and pastes) violet apart from typed orange, and `Show Session Edit Summary` reports typed vs bulk lines per file. Classification is by edit shape and labeled honestly.
- **Review Sessions**: `Start Review Session` snapshots your setup, applies Review Lens, resets edit heat, and times the session in the status bar; `End Review Session` restores the exact prior state (including unset values) and summarizes what you touched. Sessions survive reloads.
- **Team profiles**: commit `.auralis/profile.json` (written by `Write Team Profile Recommendation`) and trusted workspaces offer the recommended experience once per recommendation — Apply / Not now / Never for this repo, never silent.
- **Tinted icon families**: four generated icon theme variants (Noir, Frost, Paper, Botanica) whose accent glyphs match the active color theme; Sync Icons and profiles pick the family automatically.
- **Terminal ports**: generated iTerm2, Windows Terminal, Alacritty, WezTerm, Ghostty, and Warp palettes for all eight themes, built from the same color source and drift-gated like every other generated asset.
- New runtime OKLab color engine with unit-tested conversions, transforms, and a contrast-floor walker; 20+ new unit tests overall.

## 0.4.1

- Rebuilt both entry points from a single shared source tree (`src/`): `extension.js` and `browser.js` are now generated, drift-gated esbuild bundles instead of two hand-maintained copies, so desktop and web can no longer diverge. As part of unifying, browser VS Code gained the full Doctor report (output channel) and the complete Setup Dashboard.
- Added a real VS Code integration smoke test (`npm run test:integration`) that activates the extension, applies the recommended experience, and asserts the theme, icon, and git decoration settings; it runs in CI under xvfb.
- Split the asset generator into focused modules (`scripts/lib/`), with one WCAG color-math implementation shared by the generator and the contrast auditor.
- No user-facing theme or icon changes; this release is internal hardening only.

## 0.4.0

- Broadened syntax coverage so far more file types read fully themed instead of near-plain: string escapes, template expression delimiters, `this`/`self`, namespaces, decorators and annotations, C/C++ preprocessor directives, PHP variables, Ruby instance variables and symbols, shell variables and builtins, CSS selectors/properties/units, SQL identifiers, Markdown lists/quotes/tables/strikethrough, diff and patch coloring, INI/TOML sections and keys, and log output tokens.
- Expanded file icons from 68 to 162 extensions and from 129 to 173 file names (Elixir, Erlang, Clojure, Scala, Haskell, OCaml, Nim, Zig, Julia, Perl, PowerShell, F#, Groovy, Gradle, Objective-C, Protocol Buffers, Solidity, notebooks, fonts, audio, video, archives, WebAssembly, Nix, Composer, templates, and more), and added a `languageIds` map so unsaved and extension-less files get icons too.
- Made git status visibility a first-class check: Complete Experience profiles restore `explorer.decorations.badges`, `explorer.decorations.colors`, and `git.decorations.enabled` (so the M/A/U letters and colors next to changed files always show), Doctor and the Setup Dashboard report their state with a fix hint, and the contrast audit asserts every theme's `gitDecoration` colors stay legible on the sidebar.
- Renamed the two theme files that still carried old slugs: `Auralis Frost` now ships in `frost-color-theme.json` and `Auralis Paper` in `paper-color-theme.json`. Theme labels are unchanged, so your selected theme is unaffected.
- Stamped every generated theme/icon JSON with a `_generatedBy` marker, and CI now fails when the checked-in generated assets drift from `scripts/build-assets.js` output or when a hand edit would be silently overwritten.
- Added ESLint, Prettier, and a unit test suite (blame parsing, edit-heat scoring, license and color validation, HTML escaping, WCAG contrast math) — all gating CI and the publish workflow.
- Added a desktop/web entry parity check to the validation chain; it already caught and fixed the web reset command missing the terminal settings desktop profiles write.
- Removed the legacy Lumen Pro settings cleanup and Vira panels; that migration path never shipped publicly and had no users.
- Hardened the build scripts: temp glyph output is cleaned up even when the font build fails, and CI tolerates a support-repo outage with a warning instead of failing unrelated PRs (the publish workflow still enforces docs sync strictly).

## 0.3.0

- Made installation non-intrusive: removed the forced `configurationDefaults` color theme, icon theme, product icon theme, and editor overrides so Auralis never changes your editor silently. You adopt the look through the walkthrough, the Setup Dashboard, or `Auralis: Apply Recommended Experience`.
- Replaced the previous "no startup activation" behavior with a truthful, lazy `onStartupFinished` activation: commands and the status bar always register cheaply, ambience decorations build only when an ambience setting is on, and enabled ambience now survives a restart instead of resetting.
- Made `Auralis Noir High Contrast` a true `hc-black` theme and `Auralis Paper High Contrast` a true `hc-light` theme, each with explicit `contrastBorder`/`contrastActiveBorder` and stronger widget borders.
- Moved the colorblind variant's status meaning onto a CVD-safe blue/orange axis so add, modify, and error states stay distinguishable without red/green separation.
- Gave each terminal its full bright ANSI palette as distinct colors and fixed the light-theme `terminal.ansiBlack` so terminal output reads correctly in light mode.
- Distinguished Markdown bold and italic so emphasis no longer collapses into one style.
- Added theming for the three-way merge editor and the debug token expression (variables) view.
- Made all six bracket-pair color slots visually distinct, including on the colorblind variant.
- Clarified AI ghost text and added an `auralis.cognitiveContrast.aiSurfaces` control for the legibility of generated/inline suggestions.
- Stopped product icons from falling back to the Auralis brand mark: real VS Code codicons render where Auralis has no bespoke glyph, and high-visibility actions (replace, replace-all, zoom, copy, bold, italic, find, source control, debug, testing, terminal, comment/chat, and the AI sparkle) got faithful new glyphs.
- Hardened the Setup Dashboard webview: a crypto-strong per-render nonce, `localResourceRoots: []`, `retainContextWhenHidden: false`, and a locked-down Content-Security-Policy.
- Gated Auralis Doctor CLI checks (terraform, tflint, prettier, eslint) on Workspace Trust, and added `restrictedConfigurations` so blame-related settings stay off until a workspace is trusted.
- Made profile application scope-aware (`auralis.profiles.scope`: ask/workspace/global) with an explicit confirmation before writing settings.
- Made tooling setup safer and opt-in: Auralis detects an existing default formatter before overwriting it, prefers Workspace scope when a folder is open, and asks before enabling format-on-save instead of turning it on silently.
- Added `Auralis: Reset Auralis Settings`, `Auralis: Customize Accent & Overrides`, `Auralis: Apply AI Pairing Profile`, and `Auralis: Auralis Menu`, plus an optional status bar entry.
- Documented the Codicons attribution accurately as CC-BY-4.0.
- Hardened CI with SHA-pinned actions, a Dependabot entry for GitHub Actions, and a fail-loud tag-and-release publish workflow.
- Shrank the VSIX by excluding README-only Marketplace media that is never used by the walkthrough.
- Added a privacy-first, local-first license and trial foundation: `Auralis: Start Auralis Trial` (30-day, stored in global state, no network) and `Auralis: Activate License` (key stored in VS Code secret storage at command time, never on the network), with an entitlement gate that keeps every feature unlocked during the public beta and no startup license check.

## 0.2.12

- Added `npm run qa:screenshots` and `npm run qa:screenshots:dry-run` for clean-profile VS Code visual QA across all eight themes.
- Tuned Botanica Terraform and YAML/Kubernetes color roles to improve scanability for infrastructure files.
- Expanded custom file icon coverage for cloud, Terraform modules, Kubernetes, CI/CD, Docker, Python, Go, Rust, React, env/security files, lockfiles, and monorepo folders.
- Added modern VS Code surface coverage for Activity Bar active states, Command Palette focus states, panel sections, SCM graph colors, and inline edit indicators.
- Refreshed Marketplace copy, docs, monetization architecture, domain verification notes, and the Azure DevOps account fallback path.

## 0.2.11

- Upgraded Auralis Product Icons to a WOFF-first bespoke glyph font with TTF fallback.
- Persisted private product-glyph SVG sources for design iteration while excluding them from Marketplace packages.
- Added validation that product icon themes include a WOFF source and kept packaged-file audits blocking private glyph sources.
- Added polished Marketplace hero and Complete Experience preview assets.
- Refreshed Marketplace copy and icon docs to describe the custom product font and updated visual assets.

## 0.2.10

- Added `npm run docs:check` to CI so the public support hub cannot drift from the private source docs before release.
- Cleaned the Terraform sample by defining `var.project_name`, reducing sample diagnostics during first-run QA.
- Updated the Kubernetes/YAML sample image tag to the current 0.2.10 release line.
- Refreshed Marketplace-facing copy to speak more directly to Terraform, Kubernetes/YAML, cloud infrastructure, and long-session users.
- Updated local install references and recorded a 0.2.10 patch QA note.

## 0.2.9

- Added `npm run docs:sync` and `npm run docs:check` so the public `auralis-support` documentation can be refreshed from the private source docs before each release.
- Refreshed stale beta QA, install, and issue-template references for the Auralis naming and 0.2.9 release line.
- Added Markdown and JSON QA samples so the release language matrix covers Terraform, Kubernetes/YAML, TSX, Rust, Markdown, and JSON.
- Added core Terraform/HCL/YAML file associations to Auralis defaults and Complete Experience profiles, and made the recommended infrastructure profile prompt for missing companion extensions.
- Added a domain verification checklist for the paid domain-registration step that must start the Marketplace verified-publisher clock.
- Recorded a fresh Marketplace-install QA pass and visual tuning notes for the 0.2.9 release.

## 0.2.8

- Added the public Auralis support hub at `https://github.com/bertrandmbanwi/auralis-support`.
- Updated Marketplace metadata links for docs, support, and public GitHub presence so users no longer land on private-repo 404s.
- Clarified that the source repo stays private while customer-facing docs, support, privacy, and security notes live publicly.
- Updated local install references for the 0.2.8 VSIX.
- Updated the packaged-file audit to enforce the new public support URLs.

## 0.2.7

- Added `Auralis: Open Setup Dashboard` as a guided, lazy-loaded first-run panel for profiles, icon sync, formatter readiness, companion extension checks, Doctor, docs, and legacy settings cleanup.
- Added Doctor visibility for old `lumenPro.*` settings and Vira-scoped color customizations.
- Moved the Kubernetes visual QA sample to `samples/k8s/deployment.yaml`, avoiding the Rancher/RKE `cluster.yaml` schema trap.
- Added migration cleanup for the pre-release Kubernetes SchemaStore mappings used during local QA, including empty-setting cleanup so setup avoids noisy explicit Kubernetes schema validation.
- Updated local install references for the 0.2.7 VSIX.

## 0.2.6

- Updated release references after the Marketplace 0.2.5 onboarding and YAML tooling polish.
- Refreshed the security note so the current beta licensing statement applies to the whole 0.2.x line.
- Cleaned the Kubernetes/YAML QA sample so its image tag matches the current release track.

## 0.2.5

- Moved `Auralis Botanica: Calm Infra` to the top of the Complete Experience picker and marked it as the recommended first-run profile.
- Hardened optional tooling setup so unregistered companion-extension settings are skipped with a clear message instead of throwing a VS Code error.
- Improved Doctor notifications by naming missing companion extensions directly in the toast.
- Polished command titles so the command palette shows clean `Auralis: ...` entries instead of duplicate `Auralis: Auralis: ...` labels.

## 0.2.4

- Strengthened first-run onboarding with a fuller Getting Started walkthrough that points non-technical users to the recommended profile, infrastructure tooling, icon system, docs, and Doctor.
- Added `Auralis: Setup YAML and Kubernetes Tooling` for YAML file associations, Prettier formatting, Red Hat YAML schema support, two-space indentation, semantic highlighting, and active bracket guides.
- Tuned YAML/Kubernetes highlighting so keys, plain values, quoted strings, booleans, numbers, anchors, aliases, tags, punctuation, and documentation links separate more clearly.
- Added a Kubernetes/GitHub Actions YAML sample for visual QA.

## 0.2.3

- Tuned Terraform/HCL highlighting so block keywords, provider/resource type labels, resource names, variable references, strings, numbers, booleans, URLs, comments, diagnostics, and SCM gutter states separate more clearly.
- Added a dedicated Auralis Product Icons preview image so the bespoke workbench glyph font is visible in the Marketplace listing.
- Added an animated Apply Complete Experience demo asset for the Marketplace README.
- Reworked Marketplace positioning around Terraform, cloud infrastructure, React, Rust, first-run setup, and the free public beta.

## 0.2.2

- Added optional setup commands for Terraform formatting, web formatting/linting, and Better Comments tags.
- Added `Auralis: Doctor` to check active Auralis settings, companion extensions, and desktop CLI availability for Terraform, TFLint, Prettier, and ESLint.
- Added bracket utility commands for pair colorization, active guides, and bracket style presets.
- Kept tooling optional and lightweight: Auralis writes VS Code settings and prompts for companion extensions, but does not bundle formatter or linter engines.

## 0.2.1

- Added a first-install Getting Started walkthrough with one-click setup for `Auralis Botanica: Calm Infra`.
- Added `Auralis: Apply Recommended Experience` for a fast, non-technical first run.
- Added declarative default theme/icon values for users who have not already chosen their own VS Code theme settings.
- Refined Botanica Terraform/HCL syntax separation so attributes, references, strings, labels, operators, and comments read more distinctly.

## 0.2.0

- Added web extension support through `browser.js` so browser VS Code environments can use Auralis themes, icons, and profiles without Node-only runtime code.
- Added Workspace Trust and virtual workspace guardrails for local git-based Blame Ghosts.
- Added accessibility variants: Auralis Noir High Contrast, Auralis Frost Colorblind, Auralis Paper Contrast, and Auralis Dimmed.
- Added profile upgrades: Review Lens, Terminal Heavy, and AI Pairing.
- Added `Auralis: Sync Icons With Active Theme`, `Auralis: Enter Review Mode`, and `Auralis: Open Documentation`.
- Expanded file icon associations for modern frontend, backend, infrastructure, data, and config workflows.
- Added contrast auditing to `npm run validate`.
- Added customer-facing help docs and a monetization plan for a future free-trial-to-paid model.

## 0.1.3

- Added `SECURITY.md` with the extension security model and vulnerability reporting guidance.
- Added a package audit script that blocks source-only files, private folders, credentials, and common secret patterns from the VSIX file list.
- Added dependency audit and package audit checks to CI.
- Clarified the proprietary all-rights-reserved license and the Codicons notice boundary.
- Documented security, publisher identity, and defensibility strategy for `Bertrand Mbanwi · Auralis`.

## 0.1.2

- Removed startup activation so theme, file icon, and product icon usage stays declarative until an Auralis command runs.
- Added Auralis Product Icons and an `Auralis: Enable Product Icons` command.
- Added `Auralis: Apply Complete Experience` profiles for Noir, Frost, Paper, and Botanica.
- Hardened Focus Field, Edit Heatmap, and Blame Ghosts with visible-range focus shading, capped edit heat storage, age/count heat buckets, and debounced cached git blame.
- Expanded modern VS Code surface colors for chat, notebooks, testing, debug, charts, extension details, merge editor, comments, ports, keybindings, and related UI.
- Deepened TextMate and semantic token coverage for TypeScript/React, Rust, Python, Go, Terraform/HCL, YAML/JSON, Markdown/MDX, and Docker.
- Added performance and publisher verification docs.

## 0.1.1

- Fixed Marketplace README preview images by moving screenshot references to public HTTPS asset URLs.
- Kept the source repository private while exposing only the published preview PNGs.

## 0.1.0

- Initial Auralis extension structure.
- Added four generated color themes: Auralis Noir, Auralis Frost, Auralis Paper, and Auralis Botanica.
- Added generated SVG file icon theme.
- Added optional Focus Field, Blame Ghosts, and Edit Heatmap commands.
- Added validation script for generated theme and icon assets.
- Tuned subtle UI text, active line number contrast, editor widgets, menus, scrollbars, and settings surfaces after first VS Code visual QA.
- Added generated Marketplace icon, GitHub CI, issue templates, PR template, Dependabot, beta QA checklist, and release checklist.
- Added generated Marketplace preview images and wired them into the README.
