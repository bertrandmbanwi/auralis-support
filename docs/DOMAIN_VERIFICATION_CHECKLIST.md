<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Domain Verification Checklist

Becoming a verified Marketplace publisher is gated on a domain and a waiting period. The code and configuration side is complete. The only remaining owner-side work is purchasing/registering the Auralis domain and then waiting out the required age windows.

## Status

- Code and configuration side: complete.
- Remaining owner-side action: register the domain and complete the verification steps below.
- Domain: not yet registered.
- Domain verified: no.

## Owner-Side Steps (the only work left)

1. **Purchase/register the Auralis apex domain.** It must be a non-subdomain domain served over HTTPS (Microsoft requires verification against an apex domain, not a subdomain). Prefer a durable product domain such as `auralis.dev`; if the strongest names are unavailable, register a Bertrand-owned brand apex domain and keep the Marketplace display name stable as `Bertrand Mbanwi · Auralis`.
2. **Align publisher, repository, and homepage to the registered domain.** Point the publisher profile, and the manifest `repository`/`homepage` direction, at the new domain once it is live.
3. **Wait out the required age windows.** Marketplace verified-publisher eligibility requires both a domain that is at least 6 months old and a publisher that has been on the Marketplace for at least 6 months. Keep the registration continuously active during this period.
4. **Add the DNS TXT verification record.** When eligible, add the TXT record Microsoft provides to the domain's DNS zone so Microsoft can confirm ownership.
5. **Apply for Marketplace verified publisher when eligible.** Submit the verification request once the domain is registered, aligned, aged, and the TXT record resolves.

## Notes

- Use a registrar account protected by MFA, and keep the DNS zone simple so the TXT record can be added quickly.
- Do not change the Marketplace display name after verification starts. Microsoft notes that publisher display-name changes can revoke verification.
- Nothing in the extension code, manifest, CI, or docs blocks verification. Only the purchase and the waiting period remain.
