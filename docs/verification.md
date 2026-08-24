<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Public Listing and Publisher Verification

## Canonical public listings

Syntalume (formerly Auralis) is distributed from these durable listing URLs.
The legacy URL slugs and publisher id are intentionally unchanged so existing
installs, reviews, and update continuity survive the rebrand:

- VS Code Marketplace:
  https://marketplace.visualstudio.com/items?itemName=auralis-labs.auralis-theme-system
- Open VSX:
  https://open-vsx.org/extension/auralis-labs/auralis-theme-system
- JetBrains Marketplace:
  https://plugins.jetbrains.com/plugin/32762-auralis-theme

Open VSX is a separate registry for VS Code-compatible editors; it is not the
Microsoft VS Code Marketplace. The JetBrains URL is the public, approved
Syntalume Theme listing (currently still displaying the pre-release Auralis
name), not a private publisher preview.

After publishing, verify the release through each registry's canonical API:

```bash
node scripts/verify-distributions.js --registry=marketplace --attempts=6 --delay-ms=10000
node scripts/verify-distributions.js --registry=openvsx --attempts=6 --delay-ms=10000
node scripts/verify-distributions.js --registry=jetbrains --attempts=6 --delay-ms=10000
```

The publish workflows perform the matching check automatically, and the
scheduled `Verify Public Distributions` workflow catches later drift. The
scheduled run uses `--expect=converged`: it passes while the version in
`package.json` is either published on every registry or not published on any
(the normal state between a release PR and the publish dispatch), and fails
only on partial presence or registry errors. Search engine results are
deliberately not release evidence because their indexes can remain stale
after a successful publish.

## VS Code publisher verification path

The Marketplace "publisher not verified" label is expected until Microsoft approves the publisher.

## Requirements

Microsoft's current path requires:

- At least one extension published under the Marketplace publisher for 6 months.
- A registered domain that is at least 6 months old.
- Domain ownership verification through a DNS TXT record.
- Marketplace publisher review.

Official reference:

- https://code.visualstudio.com/api/working-with-extensions/publishing-extension#verify-a-publisher

## Recommended Syntalume Steps

1. Keep `syntalume.dev` registered and auto-renewing. Its authoritative
   registry creation timestamp is 2026-08-07T17:34:39.693Z.
2. Keep `auralislab.dev` serving the existing site and publisher verification
   record until the cutover runbook explicitly authorizes the domain change.
3. Create the DNS TXT record Microsoft provides during verification.
4. Keep the extension live and maintained during the 6-month publisher-age window.
5. Apply for verified status once both clocks are satisfied.

## Public Publisher Name

The rebrand target is `Bertrand Mbanwi · Syntalume`. Change the display name
during the coordinated marketplace cutover, before a verified badge is granted.

Keep `auralis-labs` as the permanent publisher identifier. The identifier is already part of the extension ID, listing URL, and installed extension identity:

`auralis-labs.auralis-theme-system`

Do not change the display name again after verification is granted, because
Microsoft warns that a later display-name change revokes verified status.

See also `docs/DOMAIN_VERIFICATION_CHECKLIST.md` for the owner action list and current status.
