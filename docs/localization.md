<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Language Support

Auralis follows the VS Code display language automatically. No Auralis setting
or restart is required after VS Code has switched languages.

## Included languages

- English (`en`) is the source language and fallback.
- Spanish (`es`) includes the extension listing, command palette, settings,
  Getting Started walkthrough, Setup Dashboard, Accessibility Lab, status
  center, reset flow, and support/diagnostic prompts.
- French (`fr`) covers the same surfaces.

Theme names such as `Auralis Botanica`, setting IDs such as
`auralis.rhythm.enabled`, command IDs, JSON keys, filenames, and product names
remain unchanged so team instructions and shared profiles stay portable.
Technical identifiers in health reports also remain unchanged to make support
searches and comparisons reliable.

## Change the language

Run **Configure Display Language** from the VS Code Command Palette, install the
language pack VS Code recommends if needed, and select Spanish or French.
VS Code owns that language choice; Auralis reads it through the standard
extension localization API.

If a translated label is missing or unclear, run **Auralis: Request Language
Coverage**. The command opens the public support form only after you choose to
use it; Auralis never sends language or diagnostic data automatically.

Some secondary feature-specific dialogs remain in English while their command,
setting, and primary dashboard entry are translated. English is always the
safe fallback for locales Auralis does not yet ship.
