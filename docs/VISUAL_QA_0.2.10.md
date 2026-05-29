<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis 0.2.10 Patch QA

Date: 2026-05-28

## Scope

- Patch release after `0.2.9` Marketplace verification.
- Source and public support docs drift checks.
- Terraform and Kubernetes/YAML sample cleanup.
- CI guardrail for public docs sync.

## Results

- Marketplace latest was confirmed as `0.2.9` before preparing `0.2.10`.
- Terraform sample now defines `var.project_name`, reducing avoidable diagnostics in clean visual QA.
- Kubernetes/YAML sample image tag now matches the `0.2.10` release line.
- GitHub Actions now runs `npm run docs:check` before validation and packaging.
- Local install references point to `auralis-theme-system-0.2.10.vsix`.
- No theme runtime or activation changes were made in this patch; the theme/icon path remains declarative and lightweight.

## Follow-Ups

- Capture a new Marketplace screenshot set from the published `0.2.10` build.
- Continue the next premium pass on custom product icon glyph design and broader file icon coverage.
- Register the Auralis domain to start the verified-publisher clock.
