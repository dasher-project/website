---
title: Contributing - Dasher
description: How to contribute to Dasher v6 — DCO sign-off, Definition of Done, and cross-platform workflow.
layout: ../../layouts/BaseLayout.astro
---

# Contributing to Dasher

## Contributor Certificate: DCO

All contributions must be signed off under the
[Developer Certificate of Origin](https://developercertificate.org/). This is
a lightweight alternative to a CLA — it affirms that you wrote (or have the
right to submit) the code you're contributing.

**Sign off with `-s`:**

```sh
git commit -s -m "Add Catalan alphabet support"
```

This adds a `Signed-off-by:` trailer automatically. CI checks every PR —
commits without it will fail.

For more detail (fixing missing sign-offs, the full DCO text, and why we chose
DCO over a CLA), see the [DCO page](/developers/dco/).

> **Wait — I thought Dasher had a CLA?** When Dasher was relicensed from GPL
> to MIT, each existing contributor gave individual written permission. Those
> documents are held privately. Going forward, the DCO replaces that process.
> See [`LICENSE_NOTES.md`](https://github.com/dasher-project/DasherCore/blob/main/LICENSE_NOTES.md)
> for the relicensing history.

## Definition of Done

A pull request is ready to merge when:

- [ ] CI is green (build + tests + lint + format, as applicable to the repo).
- [ ] New behaviour has tests.
- [ ] If the change affects a cross-platform capability, the [feature matrix](/status/) has been updated.
- [ ] If the change is a new UX/hardware interaction, an [RFC](/developers/rfcs/) is linked.
- [ ] Docs / changelog are updated if the change is user-facing.
- [ ] Commits are signed off (DCO).

## General workflow

1. **Check the [feature matrix](/status/)** — see what's already supported.
2. **Open an issue or RFC first** for anything cross-platform or user-facing.
3. **Branch from `main`**, keep PRs small and focused.
4. **Sign off your commits** (`git commit -s`).
5. **Fill in the PR template** — especially the cross-platform impact section.
6. **Address review feedback** — push new commits (don't force-push during review unless asked).

## Where to go next

- [Org-wide CONTRIBUTING.md](https://github.com/dasher-project/.github/blob/main/CONTRIBUTING.md) — the full contributor guide
- [DCO details](/developers/dco/)
- [RFC process](/developers/rfcs/)
- [Feature parity matrix](/status/)
- [Architecture overview](/developers/architecture/)
