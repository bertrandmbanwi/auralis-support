<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Azure DevOps Account Path

This is the owner-side path for publishing automation when the original Azure/DevOps tenant is blocked or unreliable.

## Token Rotation — Action Required Before December 2026

The current `VSCE_PAT` (token "access-code", created 2026-07-05) is scoped to
**All accessible organizations** with **Marketplace → Manage** and shows an
expiry of **2027-07-04** — but do not trust that date:

1. **The all-orgs PAT mechanism is deprecated on 2026-12-01.** Azure DevOps
   shows this banner on the PAT page: "Beginning December 1, 2026, Global
   Personal Access Tokens (PATs) scoped to all accessible organizations will
   no longer be supported." Publishing will break on or after that date
   regardless of the token's printed expiry. **Rotate to Microsoft's
   prescribed org-scoped mechanism before 2026-12-01** (check the current
   vsce publishing docs for what replaces it — likely an org-scoped PAT
   against the organization backing the `auralis-labs` publisher, or Entra
   ID auth).
2. **Tenant policy can cap PAT lifetimes silently.** The previous token was
   created with a 1-year expiry but died after roughly a month
   ("Access Denied: The Personal Access Token used has expired",
   2026-07-05) — consistent with an Entra maximum-lifetime policy
   overriding the requested expiry. Assume shorter-than-printed lifetimes
   until the policy is confirmed under Organization settings → Policies.

Rotation procedure: create the replacement token (Marketplace → Manage
scope), then update the GitHub secret via the repo web UI
(Settings → Secrets and variables → Actions → `VSCE_PAT` → edit → paste →
Update). Do NOT use `gh secret set` from a non-interactive prompt — with no
TTY it reads empty stdin and silently stores an empty value, which makes the
publish workflow fail with "Missing VSCE_PAT repository secret" even though
the secret appears to exist. Note the PAT list in Azure DevOps filters by
Access scope and Status by default — clear the filters to see all-orgs and
expired tokens.

## Current Situation

- Manual Marketplace upload works through the Visual Studio Marketplace publisher dashboard.
- CLI publishing and GitHub Actions publishing with `vsce publish` need an Azure DevOps Personal Access Token.
- The source repo expects the token to be stored as a GitHub Actions secret named `VSCE_PAT`.
- If the Microsoft/Entra tenant behind the old account is blocked due to inactivity, do not keep fighting it during release work. Keep using the manual dashboard upload until a clean PAT path exists.

## New Account Option

It is reasonable to create a new Microsoft account with a different email for Azure DevOps if the old tenant is blocked and cannot be recovered.

Keep these boundaries:

1. Do not change the permanent Marketplace publisher ID: `auralis-labs`.
2. Do not remove the current owner account until the new account is confirmed as an owner/member of the Marketplace publisher.
3. Create the Azure DevOps organization under the new account only if Microsoft allows it and any required Azure subscription setup is acceptable to the owner.
4. Create a short-lived PAT with the minimum Marketplace scope needed for VS Code extension publishing.
5. Store the PAT only in a password manager or CI secret store. Never commit it, paste it into docs, or put it in `.env`.

## Migration Checklist

1. Create/sign in with the new Microsoft account.
2. Create an Azure DevOps organization if required for PAT creation.
3. In the Visual Studio Marketplace publisher dashboard, add the new Microsoft account as a member/owner of `auralis-labs`.
4. From the new account, create a PAT with Marketplace management permissions.
5. Run:

```bash
npx @vscode/vsce login auralis-labs
```

6. Confirm:

```bash
npx @vscode/vsce show auralis-labs.auralis-theme-system
```

7. Add the PAT to GitHub as `VSCE_PAT`.
8. Run the `Publish Marketplace` GitHub Actions workflow manually.
9. Keep manual dashboard upload as the fallback path.

## References

- VS Code publishing docs: `https://code.visualstudio.com/api/working-with-extensions/publishing-extension`
- Azure DevOps organization docs: `https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization`
- Microsoft Q&A tenant inactivity notes: `https://learn.microsoft.com/en-us/answers/questions/5781383/aadsts5000225-this-tenant-has-been-blocked-due-to`
