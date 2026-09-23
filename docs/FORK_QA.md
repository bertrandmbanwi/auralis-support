<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Browser and editor-fork QA

The scheduled `Browser and Fork QA` workflow exercises the extension in five
independent paths:

- a real headless VS Code browser workbench;
- the current VSCodium desktop host with the exact unpacked candidate VSIX;
- the current code-server workbench, driven through a real Chromium browser,
  with the same VSIX;
- the exact current public artifact downloaded from Open VSX.
- the candidate package contract required by Cursor desktop and Ona's VS
  Code Browser: desktop and browser entries, stable APIs, no Marketplace-only
  dependency, and both workspace and UI extension kinds.

The VS Code browser smoke verifies the recorded real `activate()` path, opens
Tune, Icon Studio, and Accessibility Lab, then applies and exactly resets a
theme-scoped Accessibility Lab status axis. VSCodium goes further than an
install check: the workflow unpacks the built VSIX, asserts that this exact
directory and version were loaded, and runs the extension-host integration
suite under Xvfb. That suite covers activation and its performance budget,
command registration, Complete Experience settings, scoped status-axis
application, exact reset, and preservation of an unrelated `files.autoSave`
sentinel.

code-server is also a functional test rather than a shell check. The workflow
installs the candidate into a clean code-server data directory, starts the
upstream image pinned to the resolved release digest, and drives its real
workbench with the exact-pinned `playwright-core` version in `package-lock.json`
and the runner's Chrome. It opens Tune, Icon Studio, and Accessibility Lab from
the Command Palette, applies the sky/orange axis through the visible quick pick
and confirmation dialog, then invokes exact reset. The test reads the same
code-server User settings file to prove the pre-existing theme color and the
unrelated sentinel survive. A failure screenshot and container logs are kept as
workflow artifacts/diagnostics.

Cursor and Ona remain release-operator evidence because an unauthenticated
Linux runner cannot reproduce their hosted/product-specific UI state. The
contract job is a fast compatibility gate, not a substitute for opening those
products. Before every major release, complete both reproducible product smokes
below and copy
`qa/forks/manual-evidence-template.md` into the release issue.

## Cursor desktop smoke

1. Close every Cursor window so installation does not route through a stale
   running profile.
2. Record the version from **Cursor: About** and use a new default profile.
3. Open **Extensions: Install from VSIX...** from the Command Palette and pick
   `auralis-theme-system-<version>.vsix`. Installing from the Extensions view
   avoids the known ambiguity of CLI installation into non-default profiles.
4. Run **Syntalume: Open Setup Dashboard**, apply Paper, and switch through the
   file and product icon systems.
5. Open Tune, Icon Studio, and Accessibility Lab. Apply and reset one scoped
   change, then confirm a deliberately unrelated setting is unchanged.
6. Reload the window, run **Developer: Show Running Extensions**, and confirm
   `auralis-labs.auralis-theme-system` is active without an extension-host
   error.

Expected result: the dashboard and desktop features work, the browser-safe
surfaces remain available, reset preserves unrelated settings, and no proposed
API warning appears.

## Ona / VS Code Browser smoke

Use the current Ona environment service for the default hosted-editor check.
Record the host product/version, browser version, candidate VSIX SHA-256, and
whether Syntalume runs in a browser or remote Node extension host. A browser UI
alone does not prove that the extension runs in a browser host.

1. Start a clean Ona environment for a small public repository, using the
   current Dev Container configuration. Open its **Code** tab, or select
   **VS Code Browser** from the editor dropdown for a separate browser tab.
2. In Extensions, search `auralis-labs.auralis-theme-system` and install the
   public release available from that host's registry. Record the registry and
   displayed version rather than assuming it uses an Open VSX mirror.
3. Upload the reviewed `auralis-theme-system-<version>.vsix` to the environment.
   Run **Extensions: Install from VSIX...**, select it, and reload. Confirm the
   candidate version and its running host in **Developer: Show Running Extensions**.
4. Open the setup dashboard, apply Paper, and open Tune, Icon Studio, and
   Accessibility Lab. Apply and exactly reset one supported setting; verify an
   unrelated setting remains unchanged.
5. On an actual browser extension host, confirm desktop-only features show
   their limitation. On a remote Node host, record the supported remote behavior
   instead. Do not count a remote desktop-host run as the separate browser-host gate.
6. Capture the Extensions details, dashboard, host/version information, and
   reset result. Sanitize private paths and environment details before sharing.

Expected result: the reviewed candidate installs, the host-appropriate features
work, exact reset preserves unrelated settings, and no extension-host error
appears. These are manual runtime results, separate from the static package
contract and automated VS Code browser smoke.

The procedure follows Ona's [supported editors](https://ona.com/docs/ona/editors/overview)
and [VS Code Browser instructions](https://ona.com/docs/ona/editors/vscode-browser).
Gitpod Classic PAYG retired on **2025-10-15**; the old documentation remaining
online does not make it an available public test service. [Official retirement
notice](https://ona.com/stories/gitpod-classic-payg-sunset).

An existing **Gitpod Classic enterprise** instance can remain an additional
compatibility target only when its operator confirms its supported version and
migration timeline. Record that instance/version explicitly; enterprise migration
schedules differ from PAYG. Do not require a retired PAYG account for release QA.

## Shared functional checklist

1. install the same release-candidate VSIX;
2. open the setup dashboard;
3. apply one color theme and each icon system;
4. open Tune, Icon Studio, and Accessibility Lab;
5. confirm desktop-only features explain their limitation instead of failing;
6. reset Syntalume and verify unrelated settings remain unchanged.

Record product versions, results, and screenshots in the release issue. The
scheduled workflow owns real VS Code Browser, VSCodium, and code-server runtime
evidence plus the deterministic package contract. The two manual product
smokes own only the Cursor and Ona evidence that cannot be reproduced on an
unauthenticated Linux runner.
