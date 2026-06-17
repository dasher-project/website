---
title: DCO (Developer Certificate of Origin) - Dasher
description: How the Developer Certificate of Origin works for Dasher contributors.
layout: ../../../layouts/BaseLayout.astro
---

# Developer Certificate of Origin (DCO)

All contributions to the Dasher project must be signed off under the
[Developer Certificate of Origin](https://developercertificate.org/).

## What is the DCO?

The DCO is a lightweight attestation that you wrote (or have the right to
submit) the code you're contributing. It's a single line in your commit
message — no separate forms, no portals, no waiting.

This is the same model used by the **Linux kernel**, **Git**, and many other
major open-source projects.

## How to sign off

Add `-s` (or `--signoff`) when you commit:

```sh
git commit -s -m "Add Catalan alphabet support"
```

This adds a `Signed-off-by:` trailer automatically:

```
Add Catalan alphabet support

Signed-off-by: Jane Doe <jane@example.com>
```

## Fixing missing sign-offs

### Last commit only

```sh
git commit --amend -s --no-edit
```

### Multiple commits in a PR

Rebase with signoff against the base branch:

```sh
git rebase --signoff main
git push --force-with-lease
```

## CI enforcement

Our [DCO GitHub Action](https://github.com/dasher-project/.github/blob/main/.github/workflows/dco.yml)
automatically checks every pull request. If any commit is missing a
`Signed-off-by:` line, CI will fail with instructions on how to fix it.

## Why DCO instead of a CLA?

Dasher is MIT-licensed and community-driven. A full Contributor License
Agreement (CLA) adds legal friction — sign-on portals, corporate approvals,
waiting. The DCO achieves the same provenance tracking with a single line
that every contributor already controls via their git config.

> **Historical note:** When Dasher was relicensed from GPL to MIT, each
> existing contributor gave individual written permission. Those documents
> are held privately by the project stewards. Going forward, the DCO ensures
> every new contribution has clear provenance without that overhead. See
> [`LICENSE_NOTES.md`](https://github.com/dasher-project/DasherCore/blob/main/LICENSE_NOTES.md)
> for the full relicensing history.

## The full DCO text

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.


Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```
