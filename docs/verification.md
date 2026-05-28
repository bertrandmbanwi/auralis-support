<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Publisher Verification Path

The Marketplace "publisher not verified" label is expected until Microsoft approves the publisher.

## Requirements

Microsoft's current path requires:

- At least one extension published under the Marketplace publisher for 6 months.
- A registered domain that is at least 6 months old.
- Domain ownership verification through a DNS TXT record.
- Marketplace publisher review.

Official reference:

- https://code.visualstudio.com/api/working-with-extensions/publishing-extension#verify-a-publisher

## Recommended Auralis Steps

1. Register the final Auralis domain as soon as possible to start the 6-month domain-age clock.
2. Add the domain to the `auralis-labs` publisher profile when the brand name is final.
3. Create the DNS TXT record Microsoft provides during verification.
4. Keep the extension live and maintained during the 6-month publisher-age window.
5. Apply for verified status once both clocks are satisfied.

## Public Publisher Name

Use `Bertrand Mbanwi · Auralis` as the Marketplace publisher display name.

Keep `auralis-labs` as the permanent publisher identifier. The identifier is already part of the extension ID, listing URL, and installed extension identity:

`auralis-labs.auralis-theme-system`

Do not change the display name again once verification starts, because publisher identity changes can affect verified status.

See also `docs/DOMAIN_VERIFICATION_CHECKLIST.md` for the owner action list and current status.
