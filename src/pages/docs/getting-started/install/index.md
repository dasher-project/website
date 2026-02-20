---
title: Installation - Dasher Documentation
description: Download and install Dasher for Windows, macOS, Linux, Android, and iOS
layout: ../../../../layouts/DocsLayout.astro
---

<style>
  .platform-install-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin: var(--space-lg) 0;
  }

  .platform-link {
    flex: 1;
    min-width: 150px;
    padding: var(--space-md);
    background-color: var(--color-canvas-white);
    border: 2px solid var(--color-horizon-mint);
    border-radius: var(--radius-lg);
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition-smooth);
  }

  .platform-link:hover {
    border-color: var(--color-target-coral);
    background-color: var(--color-horizon-mint);
    transform: translateY(-2px);
  }
</style>

# Installation

Download and install Dasher for your platform.

<div class="alert-box" style="background-color: var(--color-focus-yellow); padding: var(--space-lg); border-radius: var(--radius-lg); margin-bottom: var(--space-xl);">
  <h3 style="margin-top: 0;">📌 Quick Download Links</h3>
  <p><strong>Windows:</strong> <a href="https://github.com/dasher-project/dasher/releases" target="_blank" rel="noopener noreferrer">Download from GitHub Releases</a></p>
  <p><strong>macOS:</strong> <a href="https://github.com/dasher-project/dasher/releases" target="_blank" rel="noopener noreferrer">Download v5.14 DMG</a></p>
  <p><strong>Linux:</strong> <code>sudo apt-get install dasher</code> (Debian/Ubuntu) or check your distribution</p>
  <p><strong>Android:</strong> <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">Google Play Store</a></p>
  <p><strong>iOS:</strong> <a href="https://apps.apple.com/app/dasher" target="_blank" rel="noopener noreferrer">App Store</a></p>
</div>

## Platform-Specific Instructions

Choose your platform for detailed installation instructions:

<div class="platform-install-links">
  <a href="windows/" class="platform-link">🪟 Windows</a>
  <a href="macos/" class="platform-link">🍎 macOS</a>
  <a href="linux/" class="platform-link">🐧 Linux</a>
  <a href="android/" class="platform-link">🤖 Android</a>
  <a href="ios/" class="platform-link">📱 iOS</a>
</div>

### Windows

**Download:** <a href="https://github.com/dasher-project/dasher/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a>

Quick steps:
1. Download the installer
2. Run the executable
3. Follow installation prompts
4. Launch from Start menu

**[View full Windows installation guide →](windows/)**

### macOS

**Download:** <a href="https://github.com/dasher-project/dasher/releases" target="_blank" rel="noopener noreferrer">v5.14 DMG</a>

Quick steps:
1. Download the DMG
2. Drag Dasher to Applications
3. Right-click → Open if needed (unidentified developer warning)
4. Launch from Applications

**[View full macOS installation guide →](macos/)**

### Linux

**Install via package manager:**

```bash
# Debian/Ubuntu
sudo apt-get install dasher

# Fedora
sudo dnf install dasher

# Arch Linux
sudo pacman -S dasher
```

**[View full Linux installation guide →](linux/)**

### Android

**Download from:**
- <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">Google Play Store</a>
- <a href="https://f-droid.org/" target="_blank" rel="noopener noreferrer">F-Droid</a>

Supports touch, tilt, and button input methods.

**[View full Android installation guide →](android/)**

### iOS

**Download:** <a href="https://apps.apple.com/app/dasher" target="_blank" rel="noopener noreferrer">App Store</a>

Compatible with iPhone and iPad. Supports touch, Apple Pencil, and switch access.

**[View full iOS installation guide →](ios/)**

## Previous Versions

### Version 4.11

Still available for older platforms:

- **Windows:** 32-bit and 64-bit installers
- **Linux:** Source code (tar.bz2, tar.gz)
- **macOS:** Not recommended for recent macOS versions (use v5 instead)

<a href="https://github.com/dasher-project/dasher/releases" target="_blank" rel="noopener noreferrer">View all releases on GitHub</a>

## Development Versions

### Dasher v6 (In Development)

Dasher v6 is a complete rewrite with modern architecture, currently under active development:

- <strong>dasher-core</strong>: <a href="https://github.com/dasher-project/dasher-core" target="_blank" rel="noopener noreferrer">github.com/dasher-project/dasher-core</a>
- <strong>dasher-gtk</strong>: <a href="https://github.com/dasher-project/dasher-gtk" target="_blank" rel="noopener noreferrer">github.com/dasher-project/dasher-gtk</a>

> ⚠️ **Note:** v6 is not yet ready for end users. Please use v5.0 for production use.

## After Installation

### First Steps

1. Launch Dasher
2. Choose your alphabet/language from **Options → Alphabet**
3. Start steering toward letters to enter text
4. Check out our <a href="/docs/getting-started/how-to/tips/">Quick Start Tips</a>

### Add Training Text

To improve predictions for your language:

1. Download training texts from our <a href="/downloads/">Downloads page</a>
2. Place them in Dasher's training directory:
   - **Windows:** `C:\Program Files\Dasher\training\`
   - **Linux:** `/usr/share/dasher/training/` or `~/.dasher/training/`
   - **macOS:** Right-click Dasher.app → Show Package Contents → Contents/Resources/training/

3. Restart Dasher

### Troubleshooting

**Problem:** Dasher won't start

**Solution:**
- Windows: Ensure you have admin rights
- macOS: Try right-click → Open (see above)
- Linux: Check that required dependencies are installed

**Problem:** Text prediction seems wrong

**Solution:**
- Select the correct alphabet for your language (Options → Alphabet)
- Add training text for better predictions

**Problem:** Can't enter special characters

**Solution:**
- Some alphabets have special characters in separate groups
- Navigate through the zooming interface to find them
- Check that your alphabet file includes the characters you need

## Need Help?

- <a href="/faq/">FAQ</a> - Frequently asked questions
- <a href="/docs/getting-started/how-to/tips/">Quick Start Tips</a> - Tips for new users
- <a href="/docs/getting-started/how-to/manual/">User Manual</a> - Complete usage guide
- <a href="https://matrix.to/#/#dasher:matrix.org" target="_blank" rel="noopener noreferrer">Matrix Chat</a> - Get help from the community
- <a href="https://github.com/dasher-project/dasher/issues" target="_blank" rel="noopener noreferrer">Report Issues</a>
