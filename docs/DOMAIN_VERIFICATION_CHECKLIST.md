<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Domain Verification Checklist

Becoming a verified Marketplace publisher is gated on a domain and a waiting
period. Both the legacy site domain and the final Syntalume domain are now
registered; the remaining work is the coordinated domain cutover, DNS
verification, and the required age windows.

## Status

- Code and configuration side: complete.
- Current verified/site domain: **`auralislab.dev`** (registered 2026-07-05,
  Hostinger, serving the marketing site over HTTPS via Vercel).
- Final brand domain: **`syntalume.dev`** (registered 2026-08-07T17:34:39.693Z,
  Hostinger). Defensive `syntalume.com` and `syntalume.org` registrations were
  completed the same day.
- Domain verified: in progress — DNS ownership check passed and the verification request was submitted to the Marketplace team on 2026-07-05. The verified-publisher badge additionally waits out the domain-age window (~2027-01-05).

## Owner-Side Steps (remaining)

1. ~~Register the current site domain.~~ Done: `auralislab.dev`.
2. ~~Register the final and defensive Syntalume domains.~~ Done 2026-08-07:
   `syntalume.dev`, `syntalume.com`, and `syntalume.org`.
3. **Do not switch the publisher domain early.** Keep `auralislab.dev` and its
   existing verification record until the coordinated cutover explicitly
   selects `syntalume.dev`.
4. **At cutover, configure `syntalume.dev`.** Deploy the site, add redirects
   from `auralislab.dev`, and complete the Marketplace TXT ownership check.
5. **Wait out the required age windows.** `auralislab.dev` reaches six months
   around 2027-01-05; `syntalume.dev` reaches six months around 2027-02-07.
6. **Apply for Marketplace verified publisher when eligible.** Submit once the
   selected domain and publisher tenure satisfy Microsoft's current rules.

## Notes

- Use a registrar account protected by MFA, and keep the DNS zone simple so the TXT record can be added quickly.
- Do not change the Marketplace display name after verified status is granted.
  Microsoft notes that a later display-name change revokes verification.
- Domain registration is no longer a blocker. DNS/site cutover, the selected
  verified-domain strategy, and the age windows remain owner-side steps.
