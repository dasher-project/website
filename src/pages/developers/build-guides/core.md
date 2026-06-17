---
title: Build DasherCore - Dasher Developers
description: Build the shared DasherCore engine and run its tests.
layout: ../../../layouts/DocsLayout.astro
---

# Build: DasherCore (the engine)

DasherCore is the platform-independent C++ engine. Full details in the
[repo README](https://github.com/dasher-project/DasherCore/blob/main/README.md);
the essentials are below.

## Prerequisites

- **CMake** 3.12+
- A **C++17** compiler: MSVC, GCC, or Clang
- Git (submodules)

## Build

```bash
git clone --recurse-submodules https://github.com/dasher-project/DasherCore.git
cd DasherCore
cmake -B build -DBUILD_CAPI=ON -DBUILD_TESTS=ON
cmake --build build --config Release
```

Outputs:

- `build/DasherCore.lib` / `.a` — static library
- `build/bin/dasher.dll` / `libdasher.so` / `.dylib` — C API shared library

## Run the tests

```bash
ctest --test-dir build -C Release --output-on-failure
```

## Conventions (the gold standard)

DasherCore has the tightest contributor rules in the project — see
[`CONTRIBUTING.md`](https://github.com/dasher-project/DasherCore/blob/main/CONTRIBUTING.md).
CI runs **four** mandatory gates: build+test matrix, AddressSanitizer +
UndefinedBehaviorSanitizer, clang-tidy, and clang-format. Local mirrors are
wired through `.pre-commit-config.yaml` and CMake presets (`strict` =
warnings-as-errors).
