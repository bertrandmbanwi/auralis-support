<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Rhythm — Scheduled Themes

Rhythm switches Auralis themes automatically at the local times you choose:
light for daylight, forest for the evening, cinema dark at night, dimmed past
midnight. It is built into the theme system, entirely local, and off by
default.

## Enable

Run:

```text
Auralis: Toggle Rhythm (Scheduled Themes)
```

or set `auralis.rhythm.enabled` to `true`.

Enablement through the Toggle command is exact-reset owned. General Reset
restores the prior enabled value, preventing another scheduled switch; a
manual edit to the setting after the command still wins.

## Schedule

The default schedule:

```json
{
  "auralis.rhythm.schedule": {
    "08:00": "Auralis Paper",
    "17:00": "Auralis Botanica",
    "21:00": "Auralis Noir",
    "23:30": "Auralis Dimmed"
  }
}
```

Keys are local times (`HH:MM`), values are Auralis theme labels. The slot
containing the current time is active, and the last slot of the day carries
past midnight. Invalid times or unknown theme labels are ignored rather than
breaking the schedule.

## You always win

If you switch themes manually, Rhythm respects your choice until the next
scheduled boundary. The Setup Dashboard and `Auralis: Run Doctor` both show
the active slot.
