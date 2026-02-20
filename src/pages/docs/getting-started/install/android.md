---
title: Android Installation - Dasher Documentation
description: Install Dasher on Android devices via Google Play Store or F-Droid
layout: ../../../../layouts/DocsLayout.astro
sidebarOrder: 2
---

# Android Installation

Dasher is available on Android devices through both the Google Play Store and F-Droid.

## Installing from Google Play Store

1. Open the **Google Play Store** app on your Android device
2. Search for "Dasher"
3. Tap **Install**
4. Grant necessary permissions when prompted

**[Open in Google Play Store](https://play.google.com/store)**

## Installing from F-Droid

F-Droid is an open-source app repository that doesn't require a Google account.

1. [Install F-Droid](https://f-droid.org/) on your device
2. Open F-Droid and search for "Dasher"
3. Tap **Install**

**[Open in F-Droid](https://f-droid.org/)**

## Permissions

Dasher may request the following permissions:

- **Storage**: To save training texts and user settings
- **Full Network Access**: To download additional language files (optional)

## Input Methods Supported

The Android version of Dasher supports multiple input methods:

- **Touch**: Navigate by dragging your finger across the screen
- **Tilt**: Steer by tilting your device (requires calibration)
- **Button**: Navigate using physical buttons or an external switch device

## First Run

1. Open Dasher from your app drawer
2. Grant any requested permissions
3. Select your preferred alphabet/language from **Settings → Alphabet**
4. Choose your input method from **Settings → Input Device**
5. Complete the tutorial if available

## Using Dasher as an Input Method

To use Dasher to type in other apps:

1. Go to **Android Settings → System → Languages & input → Advanced → Keyboard input methods**
2. Enable **Dasher**
3. When typing in any app, tap the keyboard icon and select **Dasher**

## Troubleshooting

**Problem:** App won't install

**Solution:**
- Ensure you have Android 5.0 (Lollipop) or higher
- Clear Play Store cache: Settings → Apps → Play Store → Storage → Clear cache
- If using F-Droid, ensure "Unknown sources" is enabled in your security settings

**Problem:** Touch input is unresponsive

**Solution:**
- Check your device's touch sensitivity settings
- Try a different input method (tilt or button)
- Recalibrate touch in Dasher settings

**Problem:** Can't select Dasher as keyboard

**Solution:**
- Go to Android Settings → Language & input
- Enable Dasher in the keyboard list
- When typing, long-press the spacebar to switch keyboards

## Uninstalling

To remove Dasher from your device:

1. Go to **Settings → Apps**
2. Find and tap **Dasher**
3. Tap **Uninstall**

Your training data and settings will be removed. If you want to keep them, back up `/sdcard/Android/data/org.alternativeinterface.dasher/` before uninstalling.

## Need Help?

- [Main Installation Guide](/) - Other platforms
- [FAQ](/faq/) - Common questions
- [Matrix Chat](https://matrix.to/#/#dasher:matrix.org) - Get help from the community
- [GitHub Issues](https://github.com/dasher-project/dasher/issues) - Report bugs
