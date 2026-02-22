---
title: macOS Installation - Dasher Documentation
description: Install Dasher on macOS (DMG installer for Intel and Apple Silicon)
layout: ../../../../layouts/DocsLayout.astro
sidebarOrder: 5
---

# macOS Installation

Dasher is available for macOS as a DMG installer. Version 5.14 is the latest release compatible with recent macOS versions.

## System Requirements

- **macOS 10.9 (Mavericks)** or later
- **macOS 11 (Big Sur)** or later recommended for Apple Silicon
- **50 MB** free disk space

## Supported Macs

- **Intel Macs**: macOS 10.9+
- **Apple Silicon (M1/M2/M3)**: macOS 11.0+

## Downloading

Download the DMG from GitHub Releases:

**[Download Dasher for macOS](https://github.com/dasher-project/dasher/releases)**

Look for `Dasher-x.x.x.dmg` (current: v5.14)

## Installation

### Standard Installation

1. **Open the DMG**
   - Double-click the downloaded `.dmg` file
   - A window opens showing Dasher.app

2. **Install to Applications**
   - Drag **Dasher.app** to the **Applications** folder
   - Wait for copy to complete
   - Eject the DMG

3. **Launch Dasher**
   - Open **Applications** folder
   - Double-click **Dasher**

### "Unidentified Developer" Error

If you see this message:

> "Dasher.app can't be opened because it is from an unidentified developer"

**Solution:**

1. Locate Dasher.app in Finder
2. **Control-click** (right-click) on Dasher.app
3. Select **Open** from the menu
4. Click **Open** in the dialog that appears

You only need to do this once. macOS will remember your choice.

### Alternative: Right from the Terminal

```bash
xattr -cr /Applications/Dasher.app
```

This removes the quarantine attribute that blocks unsigned apps.

## Input Devices on macOS

Dasher for macOS supports several input methods:

### Mouse or Trackpad

- Move cursor to steer through letters
- Click to select and confirm
- Adjustable speed in Preferences

### Touchscreen

If you have a touchscreen MacBook or external display:

- Navigate with finger gestures
- Supports multi-touch

### Head Tracking

Use your Mac's built-in camera:

1. Go to **Dasher → Preferences → Control**
2. Select "Head tracking (camera)"
3. Allow camera access when prompted
4. Follow calibration instructions

### Switch Access

For single-switch or multiple-switch scanning:

1. Connect switches via:
   - USB switch interface
   - Bluetooth switches
   - Keyboard shortcuts

2. Go to **Dasher → Preferences → Control**
3. Select "Button(s) / Switch(es)"
4. Configure switch count and mode

## macOS Switch Control Integration

Dasher works with macOS's built-in Switch Control:

1. Go to **System Settings → Accessibility → Switch Control**
2. Enable Switch Control
3. Add switches (keyboard, mouse button, or adaptive device)
4. Configure scanning style
5. Launch Dasher and select "Switch" as input method

## VoiceOver Integration

Dasher is compatible with VoiceOver:

- VoiceOver reads text as you enter it
- Use VoiceOver gestures for navigation
- Configure audio feedback in Dasher preferences

## Speech Output

Dasher can use macOS's built-in text-to-speech:

### Enabling Speech

1. Go to **Dasher → Preferences → Speech**
2. Check "Enable speech output"
3. Select a system voice
4. Adjust rate and volume

### Adding More Voices

1. Go to **System Settings → Accessibility → Spoken Content**
2. Click "Voices" or "System Voice"
3. Download additional voices as needed

## Troubleshooting

**Problem:** "Damaged" or "can't be opened" error

**Solution:**

```bash
# Remove quarantine attribute
xattr -cr /Applications/Dasher.app

# Then try launching again
open /Applications/Dasher.app
```

**Problem:** Dasher crashes on launch

**Solution:**

- Check macOS version (need 10.9+)
- Download v5.14 for recent macOS
- Try running from Terminal to see error messages:
  ```bash
  /Applications/Dasher.app/Contents/MacOS/Dasher
  ```
- Check crash logs in Console.app

**Problem:** Camera not working for head tracking

**Solution:**

- Grant camera permissions: System Settings → Privacy & Security → Camera
- Ensure no other app is using the camera
- Test camera in Photo Booth first
- Check Dasher → Preferences → Control for calibration

**Problem:** No sound output

**Solution:**

- Check System Settings → Sound (Output not muted)
- In Dasher, check Preferences → Speech
- Test system speech in Terminal:
  ```bash
  say "test"
  ```

**Problem:** Switch Control not working

**Solution:**

- Verify macOS Switch Control is enabled
- Test switches work in System Settings
- Ensure Dasher has accessibility permissions
- Try keyboard switches first (space/enter)

**Problem:** For older macOS (pre-10.5)

**Solution:**

- The v4.11 package requires expat 2.0.1
- Consider upgrading macOS if possible
- Or build from source (see Development Guide)

## Uninstalling

To completely remove Dasher:

1. Quit Dasher if running
2. Drag Dasher.app to Trash
3. Remove preferences:
   ```bash
   rm ~/Library/Preferences/org.alternativeinterface.Dasher.plist
   ```
4. Remove application support (optional):
   ```bash
   rm -rf ~/Library/Application\ Support/Dasher
   ```

## Finding Alphabet Files

Alphabet files are inside Dasher.app:

1. Right-click Dasher.app
2. Select "Show Package Contents"
3. Navigate to: `Contents/Resources/alphabets/`

To add custom alphabets, copy files to this folder.

## Training Texts Location

Training texts are at:

```
Dasher.app/Contents/Resources/training/
```

Add custom training texts here for better predictions.

## Need Help?

- [Main Installation Guide](/) - Other platforms
- [FAQ](/faq/) - Common questions
- [User Manual](/docs/getting-started/how-to/manual/) - Complete usage guide
- [Matrix Chat](https://matrix.to/#/#dasher:matrix.org) - Get help from the community
- [GitHub Issues](https://github.com/dasher-project/dasher/issues) - Report bugs
