---
title: Build Dasher-Windows - Dasher Developers
description: Build Dasher for Windows with Avalonia and .NET.
layout: ../../../layouts/DocsLayout.astro
---

# Build: Dasher-Windows (Avalonia / .NET)

A Windows desktop frontend built with **Avalonia** and **.NET 10**.

> This page is a quick start. The authoritative source is the
> [repo README](https://github.com/dasher-project/Dasher-Windows).

## Prerequisites

- **.NET 10 SDK**
- **CMake** 3.20+
- **Visual Studio 2026** (or Build Tools) with the _Desktop development with C++_ workload, CMake tools, and the Windows SDK

## Build

```bash
git clone --recurse-submodules https://github.com/dasher-project/Dasher-Windows.git
cd Dasher-Windows

# 1. Build the DasherCore C API DLL
cd native
./build.cmd        # or: build.ps1
cd ..

# 2. Run the app
cd src/Dasher.Windows
dotnet run
```

The build copies `dasher.dll` next to the app.

## How DasherCore is consumed

DasherCore (as a submodule) is built via CMake into **`dasher.dll`** (the C API).
The C# frontend calls it directly through **P/Invoke** in
`Engine/NativeBridge.cs`:

```csharp
[DllImport("dasher", CallingConvention = CallingConvention.Cdecl)]
public static extern IntPtr dasher_create(int width, int height);
```

> Architecture note: this frontend uses **direct C API P/Invoke**. (An earlier
> "command-buffer bridge" design has been retired.)

## Packaging

`installer/` produces an MSI and an MSIX via WiX v5; CI
(`build-installer.yml`) builds installers and publishes GitHub Releases on `v*`
tags.
