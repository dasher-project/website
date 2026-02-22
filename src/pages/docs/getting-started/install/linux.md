---
title: Linux Installation - Dasher Documentation
description: Install Dasher on Linux via package manager or build from source
layout: ../../../../layouts/DocsLayout.astro
sidebarOrder: 6
---

# Linux Installation

Dasher is included in most Linux distribution repositories and can also be built from source.

## Install from Package Manager

### Debian / Ubuntu

```bash
sudo apt-get update
sudo apt-get install dasher
```

This installs:

- Dasher GTK application
- All alphabet files
- Training texts for common languages
- Desktop integration

### Fedora

```bash
sudo dnf install dasher
```

### Arch Linux

```bash
sudo pacman -S dasher
```

### openSUSE

```bash
sudo zypper install dasher
```

### Gentoo

```bash
sudo emerge app-accessibility/dasher
```

### Flatpak (Universal)

Available on Flathub:

```bash
flatpak install flathub org.alternativeinterface.dasher
flatpak run org.alternativeinterface.dasher
```

## What Gets Installed

The package includes:

- `/usr/bin/dasher` - Main executable
- `/usr/share/dasher/` - Shared data files
- `/usr/share/dasher/alphabets/` - Alphabet definitions
- `/usr/share/dasher/training/` - Training texts
- `/usr/share/doc/dasher/` - Documentation
- Desktop menu entry

## Launching Dasher

From your application menu:

- **Unity/GNOME:** Applications → Universal Access → Dasher
- **KDE:** Applications → Utilities → Dasher

From terminal:

```bash
dasher
```

## Building from Source

Build Dasher from the latest source code if you need:

- The latest features
- A specific version not in your distro
- To contribute development

### Install Build Dependencies

**Debian/Ubuntu:**

```bash
sudo apt-get install \
  build-essential \
  git \
  cmake \
  libgtk2.0-dev \
  libexpat1-dev \
  libgettext-po-dev \
  libglib2.0-dev \
  libpango1.0-dev
```

**Fedora:**

```bash
sudo dnf install \
  gcc-c++ \
  git \
  cmake \
  gtk2-devel \
  expat-devel \
  gettext-devel \
  glib2-devel \
  pango-devel
```

**Arch Linux:**

```bash
sudo pacman -S \
  base-devel \
  git \
  cmake \
  gtk2 \
  expat \
  gettext
```

### Clone and Build

```bash
# Clone the repository
git clone https://github.com/dasher-project/dasher.git
cd dasher

# Create build directory
mkdir build && cd build

# Configure with CMake
cmake .. -DCMAKE_INSTALL_PREFIX=/usr

# Build (uses all CPU cores)
make -j$(nproc)

# Install (requires sudo)
sudo make install
```

### Install to User Directory

To install without sudo:

```bash
cmake .. -DCMAKE_INSTALL_PREFIX=~/.local
make -j$(nproc)
make install
```

Then add `~/.local/bin` to your PATH:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## Input Devices on Linux

Dasher for Linux supports many input methods:

### Mouse

- Move cursor to steer
- Click to select
- Adjust sensitivity in Preferences

### Eye Tracking

Compatible with:

- **Tobii Eye Tracker 4C, 4, 5**
- **Tobii Dynavox** PCEye and I-series
- **MyGaze** assistive trackers

**Setup:**

1. Install eye tracker software from manufacturer
2. Calibrate using their software
3. In Dasher: Settings → Control → Input Device → Eye tracker
4. Select your device from the list

### Joystick / Gamepad

- USB joysticks
- Xbox/PlayStation controllers
- Generic gamepads

**Setup:**

```bash
# Verify joystick is detected
ls /dev/input/js*

# Test with jstest
sudo apt-get install joystick
jstest /dev/input/js0
```

Then in Dasher, select "Joystick" as input device.

### Switch Access

For single or multiple switches:

Connect switches via:

- USB switch interface
- GPIO (Raspberry Pi)
- Keyboard (any key)

In Dasher: Settings → Control → Input Device → Button(s)/Switch(es)

## Speech Output

Dasher uses the Speech Dispatcher on Linux.

### Installing Speech Dispatcher

**Debian/Ubuntu:**

```bash
sudo apt-get install speech-dispatcher
```

**Fedora:**

```bash
sudo dnf install speech-dispatcher
```

**Arch Linux:**

```bash
sudo pacman -S speech-dispatcher
```

### Configuring

1. Test speech dispatcher:

   ```bash
   spd-say "Hello world"
   ```

2. In Dasher: Settings → Speech → Enable speech

3. Select voice and adjust rate

### Installing More Voices

**eSpeak NG (high quality):**

```bash
sudo apt-get install espeak-ng-espeak
```

**Festival (older but comprehensive):**

```bash
sudo apt-get install festival festvox-kallpc16k
```

## Troubleshooting

**Problem:** Package not found in repository

**Solution:**

- Your distribution may not include Dasher
- Build from source instead (see above)
- Try the Flatpak version

**Problem:** Build fails with missing dependencies

**Solution:**

```bash
# Check CMake output for missing packages
# Install missing packages, e.g.:
sudo apt-get install libgtk2.0-dev libexpat1-dev
```

**Problem:** Dasher won't start

**Solution:**

```bash
# Run from terminal to see errors
dasher

# Common issues:
# - Missing libraries: check ldd output
# - Configuration corrupt: rm ~/.dasher/*
```

**Problem:** No speech output

**Solution:**

```bash
# Test speech dispatcher
spd-say "test"

# If not working, install and start:
sudo apt-get install speech-dispatcher
sudo systemctl start speech-dispatcher
```

**Problem:** Eye tracker not detected

**Solution:**

- Ensure tracker software is installed
- Check permissions: `groups $USER` (should have video/input)
- Add to groups if needed:
  ```bash
  sudo usermod -a -G input,video $USER
  ```
- Log out and back in

**Problem:** Joystick not working

**Solution:**

```bash
# Check device exists
ls -l /dev/input/js*

# Test with jstest
sudo apt-get install joystick
jstest --event /dev/input/js0

# Check permissions
sudo chmod 666 /dev/input/js0
```

## Uninstalling

### Package Manager Install

**Debian/Ubuntu:**

```bash
sudo apt-get remove dasher
# To remove config files too:
sudo apt-get purge dasher
```

**Fedora:**

```bash
sudo dnf remove dasher
```

**Arch:**

```bash
sudo pacman -R dasher
```

### From Source

```bash
cd build
sudo make uninstall
```

### Flatpak

```bash
flatpak uninstall org.alternativeinterface.dasher
```

## User Configuration

Dasher stores user files in:

```
~/.dasher/           # User settings
├── config           # Main configuration
└── training/        # User training texts
```

Backup this folder to preserve your settings.

## System-Wide Files

Installed to (for reference, don't modify):

```
/usr/share/dasher/
├── alphabets/       # Alphabet definitions
└── training/        # System training texts
```

## Need Help?

- [Main Installation Guide](/) - Other platforms
- [FAQ](/faq/) - Common questions
- [User Manual](/docs/getting-started/how-to/manual/) - Complete usage guide
- [Matrix Chat](https://matrix.to/#/#dasher:matrix.org) - Get help from the community
- [GitHub Issues](https://github.com/dasher-project/dasher/issues) - Report bugs
