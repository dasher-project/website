---
title: Build Dasher-Apple - Dasher Developers
description: Build Dasher for iOS, macOS and visionOS.
layout: ../../../layouts/DocsLayout.astro
---

# Build: Dasher-Apple (iOS / macOS / visionOS)

SwiftUI frontend for Apple platforms. The repo has no committed `.xcodeproj` —
the project is **generated** with [XcodeGen](https://github.com/yonaskolb/XcodeGen)
from `project.yml`.

> This page is a quick start. The authoritative source is the repository itself;
> a repo-level `README.md` is being added.

## Prerequisites

- macOS with **Xcode** (recent)
- [XcodeGen](https://github.com/yonaskolb/XcodeGen): `brew install xcodegen`
- Git (for the DasherCore submodule)

## Generate & build

```bash
git clone --recurse-submodules https://github.com/dasher-project/Dasher-Apple.git
cd Dasher-Apple
xcodegen generate
open Dasher.xcodeproj
```

Then pick a target (`DasherApp` / `DasherMac` / `DasherVision` / `DasherKeyboard`) and run.

## How DasherCore is consumed

DasherCore's **source is compiled directly** into a per-platform static library
(see the `DasherCoreTemplate` in `project.yml`). Swift accesses the engine via
**bridging headers** that contain a single line:

```objc
#import "dasher.h"
```

`HEADER_SEARCH_PATHS` includes `$(SRCROOT)/DasherCore/src`.

## Targets

| Target           | Platform                           |
| :--------------- | :--------------------------------- |
| `DasherApp`      | iOS app                            |
| `DasherMac`      | macOS app                          |
| `DasherVision`   | visionOS app                       |
| `DasherKeyboard` | iOS system-wide keyboard extension |

## Lint

SwiftLint runs as a build phase (`swiftlint lint --quiet`) per the `.swiftlint.yml` config. DasherCore itself is excluded from linting.
