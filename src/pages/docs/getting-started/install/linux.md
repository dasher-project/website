---
title: Linux Installation - Dasher Documentation
description: Install Dasher on Linux via package manager, Flatpak or AppImage, or build from source
layout: ../../../../layouts/DocsLayout.astro
sidebarOrder: 6
---

# Linux Installation

Dasher is included in most Linux distribution repositories and can also be built from source.

Dasher v6 for Linux is published as a Flatpak bundle and an AppImage on GitHub. See [Flatpak (Dasher v6)](#flatpak-dasher-v6) for how to install it and how to keep it up to date.

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

## Flatpak (Dasher v6)

Dasher v6 for Linux (the GTK version) is published as a Flatpak bundle: a single `.flatpak` file attached to each [Dasher-GTK release on GitHub](https://github.com/dasher-project/Dasher-GTK/releases/latest). Dasher is not on Flathub, so `flatpak install flathub ...` and software centers will not find it. You download the file and install it yourself, as described below.

The v6 Linux version is still in development. See the [feature status matrix](/status/) for what works today.

> **Important:** Dasher installed this way does not update itself. `flatpak update` and software centers such as GNOME Software skip it, and it does not tell you when a new version is out. See [Update the Flatpak](#update-the-flatpak).

### Before You Start

- **Flatpak must be installed.** Many distributions include it. If typing `flatpak --version` in a terminal gives an error, follow the [Flatpak setup guide](https://flatpak.org/setup/) for your distribution first.
- **Check that the Flatpak does what you need.** Offline voices and cloud speech services work in the Flatpak, but system speech through `speech-dispatcher` and Keyboard mode do not. If you need either of those, use the [AppImage](#appimage-alternative) instead. See [Flatpak Limitations](#flatpak-limitations).
- **Pick the file for your computer.** Run `flatpak --default-arch` in a terminal. If it prints `x86_64` (most PCs and laptops), you need `Dasher-x86_64.flatpak`. If it prints `aarch64` (64-bit ARM devices, such as a Raspberry Pi running a 64-bit system), you need `Dasher-aarch64.flatpak`. Anything else, such as `arm` or `i386`, means a 32-bit system, and there is no Dasher Flatpak for those. Use this command and not `uname -m`, which can print `aarch64` on a 32-bit Raspberry Pi OS.

The commands below use the `x86_64` file name and assume your browser saves downloads in `~/Downloads`. Change the file name or the path if yours is different.

### Check for an Earlier Install

If Dasher might already be installed as a Flatpak on this computer, check before you install it again:

```bash
flatpak info org.alternativeinterface.dasher
```

- An error that ends in `not installed` means there is no earlier install. Go on to [Install the Flatpak](#install-the-flatpak).
- `Installation: user` means Dasher is installed for your account only, which is what this page uses. Go to [Update the Flatpak](#update-the-flatpak).
- `Installation: system` means Dasher is installed system-wide, for everyone who uses this computer. The commands on this page use `--user`, so they would add a second copy for your account and leave the system-wide one in place.

To avoid two copies, remove the system-wide one first. Flatpak may ask for an administrator password. Your settings are kept:

```bash
flatpak uninstall --system org.alternativeinterface.dasher
```

Then follow [Install the Flatpak](#install-the-flatpak). If you would rather keep Dasher system-wide, for example because several people use it on this computer, leave it installed and type `--system` in place of `--user` in the commands on this page. Flatpak may then ask for an administrator password.

### Install the Flatpak

1. Download the bundle from the [latest release](https://github.com/dasher-project/Dasher-GTK/releases/latest) (under **Assets**), or use a direct link: [Dasher-x86_64.flatpak](https://github.com/dasher-project/Dasher-GTK/releases/latest/download/Dasher-x86_64.flatpak) or [Dasher-aarch64.flatpak](https://github.com/dasher-project/Dasher-GTK/releases/latest/download/Dasher-aarch64.flatpak).

2. Add the Flathub repository for your user account. The bundle contains Dasher only. The GNOME runtime it needs (a set of shared libraries) comes from Flathub. This command is safe to repeat and prints nothing when it works:

   ```bash
   flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
   ```

3. Install the bundle:

   ```bash
   flatpak install --user ~/Downloads/Dasher-x86_64.flatpak
   ```

What to expect:

- If the runtime is not on your computer yet, Flatpak says `Required runtime for org.alternativeinterface.dasher ... found in remote flathub` and asks `Do you want to install it?`. Answer `y`. This is a one-off download of several hundred MB (the GNOME 51 runtime at the time of writing).
- Flatpak then lists what it is about to install and asks you to confirm. Answer `y` again.
- You are not asked for an administrator password, because `--user` installs Dasher for your account only.

If the install stops with `requires the runtime org.gnome.Platform ... which was not found`, Flathub is not set up for your user account. Run the command in step 2, then repeat step 3.

The [Dasher-GTK README](https://github.com/dasher-project/Dasher-GTK#install) installs the GNOME runtime by name first (`flatpak install flathub org.gnome.Platform//` and the version number), then the bundle with `--user` as here. That works too, also when the runtime ends up installed system-wide. Step 2 above lets Flatpak choose the runtime version that matches the bundle, and makes it easier to [clean up old runtimes](#clean-up-old-runtimes) later.

### Run Dasher

Start **Dasher** from your application menu. If it is not in the menu straight after installing, log out and back in.

You can also start it from a terminal:

```bash
flatpak run org.alternativeinterface.dasher
```

### Update the Flatpak

The bundle is a file you installed by hand, so Flatpak has nowhere to fetch updates from:

- `flatpak update` does not update Dasher, and neither do software centers such as GNOME Software.
- The Flatpak version of Dasher does not show a notice when a newer release is published.

Check for new versions yourself from time to time. To see which version you have:

```bash
flatpak info org.alternativeinterface.dasher
```

Compare the `Version` line with the [latest release](https://github.com/dasher-project/Dasher-GTK/releases/latest). The `Installation` line should say `user`. If it says `system`, read [Check for an Earlier Install](#check-for-an-earlier-install) before you update.

To update:

1. Delete the old `Dasher-x86_64.flatpak` from your `Downloads` folder, so that the new download is not saved under a different name such as `Dasher-x86_64(1).flatpak`.
2. Download the new bundle from the [latest release](https://github.com/dasher-project/Dasher-GTK/releases/latest).
3. Install it over the old version with the same command as before:

   ```bash
   flatpak install --user ~/Downloads/Dasher-x86_64.flatpak
   ```

What to expect:

- Flatpak replaces the old version and keeps your data. Your settings live in `~/.var/app/org.alternativeinterface.dasher/`. Your list of pronunciation exceptions and any downloaded voices live in `~/.rust-tts-wrapper/` in your home folder. Updating does not touch either folder.
- You do not have to close Dasher first. The new version is used the next time you start it.
- If the new release was built for a newer GNOME runtime, Flatpak offers to download it, as in the first install. The old runtime is left behind: see [Clean Up Old Runtimes](#clean-up-old-runtimes).
- `This version of org.alternativeinterface.dasher is already installed` means the file you installed is the release you already have.

### Clean Up Old Runtimes

Each Dasher release is built for one version of the GNOME runtime. When a release moves to a newer one (early releases used GNOME 48, later ones GNOME 50, and 6.0.3 uses GNOME 51), installing it brings in the new runtime but leaves the old one on your computer. Once Flathub stops supporting the old runtime, `flatpak update` prints messages like this:

```text
Info: runtime org.gnome.Platform branch 48 is end-of-life, with reason:
   The GNOME 48 runtime is no longer supported as of March 24, 2026. Please ask your application developer to migrate to a supported platform.
```

If the runtime was installed by name, as older install instructions did, the first line starts with `Info: (pinned) runtime` instead. It means the same thing.

Either way, this is a notice about the leftover runtime, not an error in Dasher. If you are still using an old Dasher release, [update Dasher](#update-the-flatpak) first. Then remove the runtimes that no installed app needs:

```bash
flatpak uninstall --unused
```

Flatpak lists what it would remove and asks before doing anything. The list covers all your Flatpak apps, not only Dasher, and it covers both your own account and anything installed system-wide. If a leftover runtime is installed system-wide, Flatpak may ask for an administrator password. `Nothing unused to uninstall` means there is nothing left over.

If the old runtime is still installed afterwards, either another app still needs it or it is pinned. Flatpak pins a runtime that was installed by name (for example with `flatpak install flathub org.gnome.Platform//48`) and does not remove it automatically: `flatpak uninstall --unused` reports that it is `pinned and won't be removed`. This is the runtime that the `Info: (pinned) runtime` message is about. To remove it yourself, first check which runtime each of your apps uses:

```bash
flatpak list --app --columns=application,runtime
```

If no app in the list uses the old runtime (in this example, no line ends in `/48`), remove it by name. Replace `48` with the version you want to remove:

```bash
flatpak uninstall org.gnome.Platform//48
```

If Flatpak answers with `applications using the runtime` and asks `Really remove?`, an app still needs it: answer `n`.

Flatpak also keeps a placeholder remote for a bundle install. It is disabled and has no address, and it is removed when you uninstall Dasher. It is normally called `dasher-origin`. If an earlier install attempt did not finish (for example, it stopped because the runtime was not found), that attempt can leave its own `dasher-origin` behind, and the install that worked then uses `dasher1-origin`, `dasher2-origin` and so on. `flatpak remotes --show-disabled` lists them all.

Spare placeholders are harmless, and you can leave them alone. If you want to remove one, first find out which placeholder Dasher uses. It is on the `Origin` line of:

```bash
flatpak info org.alternativeinterface.dasher
```

Do not remove the one named there. To remove a different one, put its name in place of `NAME`:

```bash
flatpak remote-delete --user NAME
```

Flatpak refuses to delete a remote that an installed app still uses, with a message that starts `Can't remove remote`. If you see that, leave the remote where it is. Do not add `--force`.

### Uninstall the Flatpak

```bash
flatpak uninstall --user org.alternativeinterface.dasher
```

This removes Dasher but keeps your settings, so they are still there if you install it again. To delete your settings as well:

```bash
flatpak uninstall --user --delete-data org.alternativeinterface.dasher
```

Flatpak asks `Delete data for org.alternativeinterface.dasher?` before it removes `~/.var/app/org.alternativeinterface.dasher/`.

If Flatpak answers `No installed refs found` although Dasher is on your computer, it was installed system-wide: type `--system` in place of `--user`.

Neither command removes `~/.rust-tts-wrapper/`, a hidden folder in your home folder. Dasher keeps your list of pronunciation exceptions there (`pronunciations.txt`), and any downloaded voices (in the `sherpaonnx` folder inside it). The AppImage uses the same folder, so keep it if you still use the AppImage. To delete it:

```bash
rm -r ~/.rust-tts-wrapper
```

`No such file or directory` means there was nothing to delete.

Afterwards, `flatpak uninstall --unused` removes the GNOME runtime if no other app needs it.

### Flatpak Limitations

The Flatpak runs Dasher in a sandbox, which cuts it off from parts of your computer. In the current release (6.0.3) that means:

- **No system speech.** Speech through `speech-dispatcher` is not included in the Flatpak. Offline voices and cloud speech services do work: set them up under **Preferences → Speech**. Downloading a voice and using a cloud service both need an internet connection. The 6.0.2 Flatpak had no network access, so speech could not be set up in it at all. If you have 6.0.2 or older, [update](#update-the-flatpak).
- **Keyboard mode is not available.** Keyboard mode types what you write in Dasher into other applications. In the Flatpak, choosing **Keyboard** in the layout menu on the toolbar (the button that shows where the text pane is, such as **Right side**) shows `Keyboard mode isn't available in this build`.

If you need system speech or Keyboard mode, use the [AppImage](#appimage-alternative), or [build Dasher-GTK from source](https://github.com/dasher-project/Dasher-GTK#build).

### AppImage Alternative

Each release also includes an AppImage (`Dasher-x86_64.AppImage` or `Dasher-aarch64.AppImage`): one self-contained file that needs neither Flatpak nor a runtime download. Download it from the [latest release](https://github.com/dasher-project/Dasher-GTK/releases/latest), then:

```bash
chmod +x ~/Downloads/Dasher-x86_64.AppImage
~/Downloads/Dasher-x86_64.AppImage
```

The AppImage is not sandboxed, so the [Flatpak limitations](#flatpak-limitations) do not apply to it:

- **Speech:** under **Preferences → Speech** you can download offline voices or set up a cloud speech service. Downloading a voice and using a cloud service both need an internet connection. The AppImage can also use system speech if `speech-dispatcher` is installed on your computer (see [Installing Speech Dispatcher](#installing-speech-dispatcher)).
- **Keyboard mode:** it needs the `ydotool` program on your computer. If `ydotool` is not set up, choosing **Keyboard** in the layout menu shows the commands that install it.

The AppImage does not update itself either. To update, download the newer file and use it in place of the old one. Unlike the Flatpak, it checks for a newer release when you start it (at most once a week) and shows a notice with a link when there is one. You can turn this off under **Preferences → Privacy**.

If something in this section does not work for you, see [Need Help?](#need-help) at the bottom of this page.

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
- Try the [Flatpak version](#flatpak-dasher-v6)

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
flatpak uninstall --user org.alternativeinterface.dasher
```

See [Uninstall the Flatpak](#uninstall-the-flatpak) for how to remove your settings, your speech data and the runtime as well.

## User Configuration

Dasher stores user files in:

```
~/.dasher/           # User settings
├── config           # Main configuration
└── training/        # User training texts
```

Backup this folder to preserve your settings.

The v6 Flatpak keeps its settings in `~/.var/app/org.alternativeinterface.dasher/` instead. Its list of pronunciation exceptions and any downloaded voices are in `~/.rust-tts-wrapper/` in your home folder, which the AppImage also uses.

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
- [Dasher-GTK Issues](https://github.com/dasher-project/Dasher-GTK/issues) - Report problems with the v6 Flatpak or AppImage
