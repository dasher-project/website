---
title: Build Dasher-GTK - Dasher Developers
description: Build Dasher for Linux (and the Windows/macOS fallback) with GTK4.
layout: ../../../layouts/DocsLayout.astro
---

# Build: Dasher-GTK (GTK4 / Linux)

A C++ frontend using **GTK4 / gtkmm**, primarily for Linux but also buildable on
macOS and Windows as a fallback. The authoritative source is the
[repo README](https://github.com/dasher-project/Dasher-GTK).

## Branches

- `main` — stable development
- `feature/v6-capi-migration` — the active CAPI-based GTK4 frontend (uses the DasherCore `feature-CAPI` submodule). Build from here for v6.

## Prerequisites

- **CMake** 3.20+, a C++17 compiler
- GTK4 + gtkmm development files:
  - **macOS:** `brew install gtk4 gtkmm4 pkg-config cmake`
  - **Debian/Ubuntu:** `apt install libgtk-4-dev libgtkmm-4.0-dev pkg-config cmake`
  - **Windows:** a GTK stack (e.g. via GVSBuild) at `C:\gtk`

## Build

```bash
git clone --recurse-submodules -b feature/v6-capi-migration https://github.com/dasher-project/Dasher-GTK.git
cd Dasher-GTK
cmake -B build
cmake --build build -j
```

Run from inside `build/Dasher/` so the relative `"Data"` path resolves:

```bash
cd build/Dasher
./Dasher
```

## How DasherCore is consumed

DasherCore (submodule) is built via CMake into the **CAPI shared library** and
linked directly into the `Dasher` executable; headers are consumed from
`DasherCore/src/`:

```cmake
set(BUILD_CAPI ON CACHE BOOL "" FORCE)
add_subdirectory("DasherCore")
target_link_libraries(Dasher PRIVATE dasher ...)
```

Runtime data (alphabets, colours, training) is copied post-build from
`DasherCore/Data/` and `DasherCore/Strings/`.
