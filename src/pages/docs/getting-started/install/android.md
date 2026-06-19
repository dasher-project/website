---
title: Android Installation - Dasher Documentation
description: Install Dasher on Android devices
layout: ../../../../layouts/DocsLayout.astro
sidebarOrder: 2
---

# Android Installation

Dasher for Android is available as a **v6 preview beta** — the official frontend built on the
[DasherCore C API](https://github.com/dasher-project/DasherCore). It is early in development and
has had limited testing so far, but it is real, usable Dasher.

There is also a **community project**, [Dasher Mobile](https://github.com/janmurin2/Dasher-Mobile),
which predates the official frontend and takes a different architectural approach. Both are listed
below.

## Dasher-Android (official v6 beta)

The official Android frontend lives at
[dasher-project/Dasher-Android](https://github.com/dasher-project/Dasher-Android).

1. Download the latest APK from
   [Dasher-Android Releases](https://github.com/dasher-project/Dasher-Android/releases/latest)
2. Enable "Install from unknown sources" in your Android security settings
3. Open the downloaded APK and tap **Install**
4. Find Dasher in your app drawer

**[Download latest APK](https://github.com/dasher-project/Dasher-Android/releases/latest)** ·
**[View Source Code](https://github.com/dasher-project/Dasher-Android)**

> Google Play Store and F-Droid distribution is planned once the beta matures.

## Dasher Mobile (community alternative)

[Dasher Mobile](https://github.com/janmurin2/Dasher-Mobile) is a community Android implementation
developed by Ján Murin as a bachelor's thesis at Masaryk University. It builds on DasherCore with
KenLM language model integration and a focus on Slovak language support.

**[Download Dasher Mobile v1.0](https://github.com/janmurin2/Dasher-Mobile/releases/tag/v1.0)** ·
**[View Source Code](https://github.com/janmurin2/Dasher-Mobile)**

## Input Methods Supported

The Android version of Dasher supports:

- **Touch**: Navigate by dragging your finger across the screen
- **Tilt**: Steer by tilting your device (requires calibration)

## Using Dasher as a System Keyboard (IME)

One of Android's advantages is that Dasher can act as a system-wide input method (IME), letting
you type into any app:

1. Go to **Android Settings → System → Languages & input → On-screen keyboard**
2. Enable **Dasher**
3. When typing in any app, switch to Dasher from the keyboard picker

## First Run

1. Open Dasher from your app drawer
2. Grant any requested permissions
3. Select your preferred alphabet/language from **Settings → Alphabet**
4. Choose your input method from **Settings → Input**

## Troubleshooting

**Problem:** App won't install

**Solution:**

- Ensure you have Android 7.0 (Nougat) or higher
- Enable "Install from unknown sources" in your security settings
- If the APK is blocked, tap "More details" then "Install anyway"

**Problem:** Touch input is unresponsive

**Solution:**

- Try adjusting the speed slider in settings
- Check that your screen protector isn't interfering with touch sensitivity

## Need Help?

- [Main Installation Guide](/docs/getting-started/install/) - Other platforms
- [FAQ](/faq/) - Common questions
- [Matrix Chat](https://matrix.to/#/#dasher:matrix.org) - Get help from the community
- [Dasher-Android Issues](https://github.com/dasher-project/Dasher-Android/issues) - Report bugs
