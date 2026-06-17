---
title: Contributing - Dasher Developers
description: How to contribute to Dasher, and the Definition of Done that keeps the frontends consistent.
layout: ../../layouts/DocsLayout.astro
---

# Contributing

Thanks for contributing! The org-wide guide lives at
[`dasher-project/.github/CONTRIBUTING.md`](https://github.com/dasher-project/.github/blob/main/CONTRIBUTING.md);
this page adds the developer-specific detail.

## Branches & pull requests

- Work on a branch off the repo's default branch (`main`, except this `website` repo which uses `astro-build`).
- Open a **pull request** — reviews are required on the default branch.
- Keep PRs small and focused; link any issue or RFC.

## Coding standards

[`DasherCore/CONTRIBUTING.md`](https://github.com/dasher-project/DasherCore/blob/main/CONTRIBUTING.md)
is the project's **gold standard**. Its six rules apply in spirit everywhere:

1. No naked `new`/`delete` (or per-language equivalent) — prefer safe, owning constructs.
2. `const` / immutability by default.
3. Use `auto`/inference only when the type is obvious.
4. Keep the C API boundary clean (no exceptions across `extern "C"`, no C++ types crossing it).
5. Zero compiler warnings.
6. No premature optimization — readable first.

Each frontend repo adds language-specific tooling:

- **Dasher-Apple** — SwiftLint (`.swiftlint.yml`).
- **Dasher-Windows** — Roslyn analyzers / `dotnet format` _(being added)_.
- **Dasher-GTK** — clang-format / clang-tidy _(being added)_.

## Definition of Done

A PR is ready to merge when:

- [ ] CI is green (build + tests + lint + format, as applicable).
- [ ] New behaviour has tests.
- [ ] If the change affects a cross-platform capability, the **feature matrix** (`website/src/data/feature-status.yaml`) is updated — in this PR or a linked one.
- [ ] If it's a new UX/hardware interaction, an **RFC** is linked.
- [ ] Docs / changelog updated if the change is user-facing.

The PR template includes checkboxes for the parity matrix and RFCs.

## Tests

For the engine, all new features and bug fixes must include tests (DasherCore
defines Golden / Serialization / Algorithm / Contract tiers). The test suite
doubles as the regression contract for a future rewrite — every test captures
behaviour that a rewrite must match.

## Code of Conduct & security

Our [Code of Conduct](https://github.com/dasher-project/governance/blob/main/code-of-conduct.md)
applies everywhere. Report security issues privately — see
[SECURITY.md](https://github.com/dasher-project/.github/blob/main/SECURITY.md).
