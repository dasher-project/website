---
title: Architecture - Dasher Developers
description: How DasherCore and the native frontends fit together, and the C API contract that binds them.
layout: ../../layouts/DocsLayout.astro
---

# Architecture

## One engine, many frontends

**DasherCore** owns everything that must be identical on every platform: the
language models, the node tree, the rendering maths, the settings/parameter
system, alphabets, and the input filters. It exposes a small, flat **C API**
through a single header, [`dasher.h`](https://github.com/dasher-project/DasherCore/blob/main/Src/dasher.h),
documented in [`docs/C_API.md`](https://github.com/dasher-project/DasherCore/blob/main/docs/C_API.md).

Each **frontend** owns only:

1. **Input** — capturing pointer coordinates, switch events, joystick axes, eye-gaze samples, and feeding them to the engine.
2. **Rendering** — drawing the engine's draw-command buffer onto a canvas (text measuring is the frontend's job).
3. **UI chrome** — toolbars, settings UI, onboarding, platform integration (clipboard, TTS, keyboard extensions).

## How frontends consume DasherCore

All three v6 frontends currently include DasherCore as a **git submodule** and
build the C API from source as part of their own build process. This is useful
while the C API is still evolving — you get the latest changes, can step into
the engine from a debugger, and can test against unreleased DasherCore commits.

| Frontend    | Build integration                                                                                                                            |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Apple**   | XcodeGen compiles DasherCore sources into a per-platform static library; Swift calls the C API via a bridging header (`#import "dasher.h"`). |
| **Windows** | CMake builds DasherCore into `dasher.dll`; C# calls through P/Invoke.                                                                        |
| **GTK**     | CMake builds DasherCore into `libdasher.so` and links it into the GTK executable.                                                            |

### Alternative: consume a pinned binary

You don't have to build from source. DasherCore's
[GitHub Releases](https://github.com/dasher-project/DasherCore/releases) ship
ready-to-use artefacts for each platform:

- The **shared library** (`dasher.dll` / `libdasher.so` / `libdasher.dylib`)
- The `Data/` directory (alphabets, colour schemes, training text)
- The `dasher.h` header

This is a sensible approach for new integrations — **`main` will fluctuate**,
so pinning to a tagged release protects you from breaking changes. The
frontends will likely move to this model once the C API stabilises.

## Contracts every frontend must honour

From `C_API.md`'s "Important notes" — the implicit contract:

- Call `dasher_set_screen_size()` before `dasher_frame()`.
- Returned string pointers are **ephemeral** — copy them immediately; they're valid only until the next API call.
- A `dasher_ctx` is **not thread-safe**. One thread per context.
- The engine does **no font rendering** — the frontend measures text width.
- `out_command_count` is an **int count**, not a command count.
- Speed is a percentage mapped non-linearly to bitrate.
- `alpha == 0` draw commands are skipped by the frontend.

## Single sources of truth

- **Parameters** — [`settings_manifest.json`](https://github.com/dasher-project/DasherCore/blob/main/settings_manifest.json) is code-generated into `Parameters.cpp`. The UI settings tabs render from its `group`/`subgroup`.
- **Strings / translations** — [`Strings/strings_en.json`](https://github.com/dasher-project/DasherCore/blob/main/Strings/) is the single template for translators.
- **Design tokens** — [`dasher-design-guide/DESIGN.md`](https://github.com/dasher-project/dasher-design-guide/blob/main/DESIGN.md).
- **Feature support** — [the status matrix](/status/) (`src/data/feature-status.json` in this repo).

## Diagnostic vs. stable API

Functions under the "Test / diagnostic hooks" section of `dasher.h` are **not**
stable and **not for production frontends** — they exist to validate a future
rewrite. Stick to the public API above that section.
