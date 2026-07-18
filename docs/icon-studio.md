<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis Icon Studio

Icon Studio is the searchable browser and preset editor for the Auralis file
icon system. Open it with:

```text
Auralis: Open Icon Studio
```

The browser is built from the file-icon theme shipped with your installed
version of Auralis. Search by icon name, extension, filename, folder, or VS
Code language ID, then select an icon and add an association.

## Desktop Studio: exact Explorer customization

Desktop VS Code uses one contributed `Auralis Icons – Studio` theme whose
manifest and SVGs belong to the installed Auralis extension. When you choose
**Apply to Explorer**, Icon Studio rebuilds only those bounded, extension-owned
files. It never writes into your workspace, opens an arbitrary path, or edits a
third-party icon theme.

The desktop Studio applies all of these together:

- Base, Noir, Frost, Paper, or Botanica colors, including automatic family
  changes when the active Auralis color theme changes.
- Balanced, Minimal, Outline, or Pictorial shapes.
- The exact slider values shown: 0–200% saturation and 10–100% opacity.
- Exact file names and simple `*.extension` patterns, including multi-part
  extensions such as `*.acme.ts`.
- Exact folder names, project-root folder names, and VS Code language IDs.

For file associations, the optional language selector is separate from the
icon. Leave it empty to change only the Explorer glyph. Choose a language when
you also want `files.associations` to change syntax recognition.

The four named starting points are:

| Appearance | Saturation | Opacity | Character |
|---|---:|---:|---|
| Balanced | 100% | 100% | The shipped hybrid of letter chips and pictorial glyphs |
| Minimal | 65% | 76% | Quiet frameless letter marks and reduced intensity |
| Outline | 82% | 88% | Outlined containers and pictorial shapes |
| Pictorial | 115% | 100% | The pictorial system with a more vivid palette |

VS Code can cache a selected icon-theme manifest. Reapplying Studio briefly
switches through the selected shipped Auralis family and back, so Explorer
reliably reloads the new manifest without asking you to reload the window.

## Web and read-only installations

vscode.dev, github.dev, and other browser extension hosts cannot write
extension assets. They use the finite generated fallback: all four named
appearances across all five families. A safe file/language association can also
apply when the chosen icon already has that shipped language mapping.

Custom folder, root-folder, and language maps and arbitrary slider values stay
visible in the inventory and portable preset, but are read-only preview data in
web hosts. The panel labels this boundary before Apply. If a desktop
installation is not writable, Studio fails before taking settings ownership
and leaves the previous theme, associations, and generated assets intact.

## Import and export

The JSON box always contains the current version-1 preset. Use **Copy preset
JSON** to put it on the clipboard. To import, paste JSON into the same box and
choose **Import pasted JSON**, review it, then apply.

Example:

```json
{
  "version": 1,
  "name": "Acme platform",
  "family": "auto",
  "style": "outline",
  "saturation": 82,
  "opacity": 88,
  "associations": {
    "files": [
      {
        "pattern": "*.acme.ts",
        "icon": "_ts",
        "languageId": "typescript"
      }
    ],
    "folders": [
      {
        "name": "platform",
        "icon": "_folder-infra"
      }
    ],
    "rootFolders": [
      {
        "name": "acme-control-plane",
        "icon": "_folder-cloud"
      }
    ],
    "languages": []
  }
}
```

## Exact reset

Choose **Exact reset** inside Icon Studio, or run:

```text
Auralis: Reset Icon Studio
```

Before its first write, Icon Studio records whether each affected User setting
was absent or what its exact value was. It also records a content signature for
its generated Studio manifest and SVGs. Reset restores only settings and assets
that still equal what Icon Studio wrote. If you select another icon theme or a
later change replaces an association, your newer setting wins. Independently,
unchanged generated files return to the pristine packaged baseline while their
content signature is still owned by that Apply, so a later manual reselect
cannot unexpectedly revive an old preset.

Apply and reset are transactional. If any settings or asset write fails,
Icon Studio restores the previous successful state instead of leaving half of
a preset active.

On desktop, applied Studio assets are written into the installed extension's
own icon directory. An extension update or reinstall replaces that directory,
which returns the Studio icon theme to the packaged baseline until you apply
your preset again — your saved preset, associations, and export files are not
lost. After an update, reopen Icon Studio and choose **Apply to Explorer** to
restore the applied look. On hosts where the extension directory is read-only,
Icon Studio reports the failed write instead of applying partially.

## Request a missing icon

Enter the filename, folder, language, framework, and a short reason, then
choose **Open prefilled icon request**. Icon Studio opens the public Auralis
support repository with the issue title and details filled in. Nothing is sent
until you review and submit the issue on GitHub.
