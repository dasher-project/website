---
title: Design tokens - Dasher Developers
description: The design tokens that must stay consistent across every Dasher frontend.
layout: ../../layouts/DocsLayout.astro
---

# Design tokens

The **visual** single source of truth for Dasher v6 lives in the separate
[`dasher-design-guide`](https://github.com/dasher-project/dasher-design-guide)
repository:

- [`DESIGN.md`](https://github.com/dasher-project/dasher-design-guide/blob/main/DESIGN.md) — **normative**, machine-readable tokens (Google DESIGN.md spec). This is the file tools and coding agents should read.
- [`README.md`](https://github.com/dasher-project/dasher-design-guide/blob/main/README.md) — the human rationale for _why_ those values exist.

## What must be consistent

Platform-specific adaptations are allowed (a SwiftUI `Toggle` and a GTK `Switch`
won't look identical — that's fine). What **must** match across all platforms:

- **Colour values** (brand palette + light/dark surfaces)
- **Typographic scale**
- **Spacing**
- **Touch-target sizes** (48dp minimum)
- **Interaction patterns**

## Mapping tokens per platform

| Platform       | How to map                                                |
| :------------- | :-------------------------------------------------------- |
| Web / Electron | CSS variables (the reference implementation)              |
| macOS / iOS    | SwiftUI `Color` / `Font` extensions                       |
| Windows        | Avalonia `SolidColorBrush` resources mapped to hex tokens |
| Linux          | GTK CSS theming / `Gtk.CssProvider`                       |

## The update protocol

When a design decision changes (from `DESIGN.md`):

1. Update the **DESIGN.md** YAML front-matter tokens first.
2. Update the corresponding prose sections to match.
3. Validate: `npx @google/design.md lint DESIGN.md` — zero errors before committing.
4. Then update each frontend's mapping.

> Note: this guide is the **visual** SSOT. The **behavioural** SSOT (which
> features each platform ships) is the [feature matrix](/status/).
