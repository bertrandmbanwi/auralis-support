<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Azure DevOps Account Path

This is the owner-side path for publishing automation when the original Azure/DevOps tenant is blocked or unreliable.

## Current Situation

- Manual Marketplace upload works through the Visual Studio Marketplace publisher dashboard.
- CLI publishing with `vsce publish` needs an Azure DevOps Personal Access Token.
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

7. Keep manual dashboard upload as the fallback path.

## References

- VS Code publishing docs: `https://code.visualstudio.com/api/working-with-extensions/publishing-extension`
- Azure DevOps organization docs: `https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization`
- Microsoft Q&A tenant inactivity notes: `https://learn.microsoft.com/en-us/answers/questions/5781383/aadsts5000225-this-tenant-has-been-blocked-due-to`
