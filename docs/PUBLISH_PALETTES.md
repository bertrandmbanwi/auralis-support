<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Preparing and publishing the palette package

The public support repository owns npm publication so provenance identifies
the reviewed public source. Ordinary pull requests and pushes only validate
and prepare an artifact; they cannot publish it.

## Review a candidate

1. Run **Prepare palette package**, or inspect its pull-request/main run.
2. Review the package file inventory, public API validation, source commit,
   tarball, and SHA-256 recorded in the run summary and `public-palettes` artifact.
3. Approve the final source and merge through the normal repository process.
   Publication requires a successful preparation run on the exact current
   `main` commit. A pull-request artifact is review evidence, not publishable input.

## One-time registry and approval setup

Before the first publication, the repository owner must establish the npm
package using npm's supported initial-publication process. Trusted publishing
configuration currently requires an existing package; the workflow does not
bootstrap registry ownership or mint long-lived tokens.

Configure the support repository's `npm` environment with required reviewers
and a main-branch restriction. Configure the npm trusted publisher for this
repository, `publish-palettes.yml`, and the `npm` environment. If using direct
publication, explicitly allow `npm publish`; newly created npm trusted publishers
may otherwise permit staged publication only. Preserve two-factor authentication
and review npm's current [trusted-publisher instructions](https://docs.npmjs.com/trusted-publishers/).
An environment name in a workflow does not itself create an approval policy.

These account operations require separate owner action. Preparing a tarball
is not permission to register a package, dispatch publication, or change release
protection settings.

## Publish the reviewed bytes

1. Select **Publish reviewed Syntalume palette artifact** from `main`.
2. Supply the successful main preparation run ID and the exact reviewed tarball
   SHA-256. The workflow rejects a different commit, workflow, repository, or
   untrusted event source.
3. The environment reviewer checks the selected preparation artifact and
   digest before approving publication. The publishing job downloads that
   artifact, verifies its checksum, and publishes with lifecycle hooks disabled.
   It does not rebuild or check out product source.
4. Verify the npm version, package contents, and provenance against the reviewed
   artifact, then announce availability. The README must not claim an npm release
   before the registry has accepted it.

If main changes after preparation, prepare and review the new commit. Never
substitute a new digest merely to bypass a mismatch. If the checksum, protection
policy, bootstrap, or trusted-publisher setup is incomplete, stop publication
and correct that prerequisite first.
