---
title: Developers - Dasher
description: Build, contribute to, and navigate the Dasher v6 codebase — one shared engine, many native frontends.
layout: ../../layouts/DocsLayout.astro
---

# Developer handbook

Dasher v6 is **one shared engine** ([DasherCore](https://github.com/dasher-project/DasherCore)) consumed by several **native frontends**. This handbook is the navigation hub for anyone working on Dasher code.

## The architecture at a glance

| Repository                                                         | Platform                     | UI stack           | DasherCore integration        |
| :----------------------------------------------------------------- | :--------------------------- | :----------------- | :---------------------------- |
| [DasherCore](https://github.com/dasher-project/DasherCore)         | All                          | C++ engine + C API | _is_ the engine               |
| [Dasher-Apple](https://github.com/dasher-project/Dasher-Apple)     | iOS / macOS / visionOS       | SwiftUI            | compiled core + C API header  |
| [Dasher-Windows](https://github.com/dasher-project/Dasher-Windows) | Windows                      | Avalonia (.NET)    | `dasher.dll` via P/Invoke     |
| [Dasher-GTK](https://github.com/dasher-project/Dasher-GTK)         | Linux (+ Win/macOS fallback) | GTK4 / gtkmm       | `libdasher.so` linked         |
| [website](https://github.com/dasher-project/website)               | Web                          | Astro              | this handbook + public status |

Read the [architecture overview](./architecture/) for how the engine and frontends fit together, and the [C API contract](https://github.com/dasher-project/DasherCore/blob/main/docs/C_API.md) in DasherCore for the exact integration surface.

## Where do I start?

- **I want to build a platform** → [build guides](#build-guides).
- **I want to fix a bug / add a feature** → [contributing](./contributing/).
- **I want to know what's supported where** → the [feature status matrix](../status/).
- **I'm changing UX or hardware interaction across platforms** → [RFCs](./rfcs/).
- **I'm changing colours, type, spacing** → [design tokens](./design/).

## Build guides

- [DasherCore (the engine)](./build-guides/core/)
- [Dasher-Apple (iOS / macOS / visionOS)](./build-guides/apple/)
- [Dasher-Windows (Avalonia)](./build-guides/windows/)
- [Dasher-GTK (Linux)](./build-guides/gtk/)

## Keeping frontends in sync

Parity is a first-class goal. Every frontend PR template asks: _"does this change a capability users see on other platforms?"_ If yes, update the [feature matrix](../status/). If it's a new UX/hardware interaction, write an [RFC](./rfcs/) first so the other platforms can align their blueprints.

See:

- [Feature parity: how the matrix works](./feature-parity/)
- [Contributing & Definition of Done](./contributing/)
- [RFC process](./rfcs/)
- [Design tokens](./design/)
