<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Domain Verification Checklist

Becoming a verified Marketplace publisher is gated on a domain and a waiting period. The code and configuration side is complete. The only remaining owner-side work is purchasing/registering the Auralis domain and then waiting out the required age windows.

## Status

- Code and configuration side: complete.
- Domain: **registered — `auralislab.dev`** (2026-07-05, Hostinger, auto-renew on, serving the marketing site over HTTPS via Vercel).
- Domain verified: in progress — DNS ownership check passed and the verification request was submitted to the Marketplace team on 2026-07-05. The verified-publisher badge additionally waits out the domain-age window (~2027-01-05).

## Owner-Side Steps (remaining)

1. ~~Purchase/register the Auralis apex domain.~~ Done: `auralislab.dev`, an apex domain on HTTPS (the `.dev` TLD enforces it).
2. ~~Add the domain in the publisher portal.~~ Done 2026-07-05: `https://auralislab.dev` set as the verified domain, DNS TXT ownership check passed, and the request is with the Marketplace team for processing. The publisher profile was also filled out (description, website, support/issues links).
3. **Wait out the required age windows.** Marketplace verified-publisher eligibility requires both a domain that is at least 6 months old and a publisher that has been on the Marketplace for at least 6 months. The domain window ends around 2027-01-05; keep registration and auto-renew active.
4. **Apply for Marketplace verified publisher when eligible.** Submit the verification request once the age windows have passed and the TXT record resolves.

## Notes

- Use a registrar account protected by MFA, and keep the DNS zone simple so the TXT record can be added quickly.
- Do not change the Marketplace display name after verification starts. Microsoft notes that publisher display-name changes can revoke verification.
- Nothing in the extension code, manifest, CI, or docs blocks verification. Only the purchase and the waiting period remain.
