<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Team Profiles

A repository can recommend an Auralis experience to everyone who opens it.

## For team leads

```text
Auralis: Write Team Profile Recommendation
```

picks a Complete Experience profile, adds an optional note, and writes:

```json
// .auralis/profile.json
{
  "profile": "Auralis Botanica: Calm Infra",
  "note": "Matches our Terraform review setup"
}
```

Commit the file and your team gets the offer.

## Shared Tune presets

If you have Auralis Tune adjustments active (warmth, contrast, saturation, or
an accent), the write command offers to include them, so the whole team gets
your exact calibrated environment:

```json
// .auralis/profile.json
{
  "profile": "Auralis Botanica: Calm Infra",
  "note": "Matches our Terraform review setup",
  "tune": { "warmth": 1, "contrast": 2 },
  "accent": "#5cc8a0"
}
```

Values coming from the repository are always clamped and validated (sliders to
the -5..5 range, the accent to a hex color) before anything is applied, and
the Tune adjustments are written theme-scoped exactly like your own Tune
changes, so `Reset Auralis Settings` removes them cleanly.

## For everyone else

When a **trusted** workspace contains `.auralis/profile.json`, Auralis shows
one toast: *"This repo recommends the 'Auralis Botanica: Calm Infra'
experience"* with **Apply**, **Not now**, and **Never for this repo**.

- Applying writes the profile to **workspace** settings, so your global setup
  is untouched.
- The offer appears once per recommendation (it returns only if the file's
  content changes), and "Never" is remembered per repo.
- Nothing is ever applied silently; set `auralis.teamProfile.enabled` to
  `false` to suppress the offer entirely. You can always trigger it manually
  with `Auralis: Apply Team Profile Recommendation`.
