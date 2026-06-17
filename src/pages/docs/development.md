---
title: Development - Dasher
description: Dasher v6 development has moved to the developer handbook.
layout: ../../layouts/DocsLayout.astro
---

# Development

Dasher v6 development documentation has moved to the
**[developer handbook](/developers/)**.

## Quick links

- [Architecture overview](/developers/architecture/) — one engine, many
  frontends, the C API contract, and **two integration paths** (C API shared
  library or direct C++ source compilation).
- [Build guides](/developers/#build-guides) — step-by-step build instructions
  for DasherCore and every platform frontend.
- [Contributing](/developers/contributing/) — how to open PRs, the Definition
  of Done, and CI gates.
- [Feature status matrix](/status/) — what each platform supports, with a
  v5 baseline comparison.

## Integrating DasherCore into your own app

DasherCore exposes a small, flat **C API** through
[`dasher.h`](https://github.com/dasher-project/DasherCore/blob/main/Src/dasher.h),
documented in
[`docs/C_API.md`](https://github.com/dasher-project/DasherCore/blob/main/docs/C_API.md).
You can integrate it in two ways:

1. **Pre-built shared library** (recommended) — download `dasher.dll` /
   `libdasher.so` / `libdasher.dylib` plus the `Data/` directory from
   [DasherCore Releases](https://github.com/dasher-project/DasherCore/releases)
   and link against the C API.
2. **Compile the C++ source directly** — pull DasherCore into your build and
   call either the C API or the internal C++ classes.

See the [architecture page](/developers/architecture/) for details.

## Stable release (v5)

The stable v5 codebase lives at
[dasher-project/dasher](https://github.com/dasher-project/dasher). For
production use, download [Dasher 5.0](/downloads/).
