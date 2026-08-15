---
title: Windows Installation - Dasher Documentation
description: Install Dasher on Windows (XP through Windows 11)
layout: ../../../../layouts/DocsLayout.astro
sidebarOrder: 4
---

# Windows Installation

Dasher runs on all modern versions of Windows, from Windows XP through Windows 11.

## System Requirements

- **Windows XP** or later (Windows 7, 8, 10, and 11 supported)
- **50 MB** free disk space
- **256 MB RAM** minimum (512 MB recommended)

## Downloading

Download the latest stable release from GitHub Releases:

**[Download Dasher for Windows](https://github.com/dasher-project/dasher/releases)**

Select the Windows installer (usually named `Dasher-x.x.x.exe` or similar).

## Installation

1. **Run the installer**
   - Double-click the downloaded `.exe` file
   - If Windows SmartScreen appears, click "More info" then "Run anyway"

2. **Choose installation options**
   - Select installation directory (default: `C:\Program Files\Dasher`)
   - Choose who can use Dasher (all users or just you)
   - Select start menu folder

3. **Complete the installation**
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

4. **Launch Dasher**
   - Dasher should launch automatically
   - Or find it in **Start Menu → Dasher**

## Installing for Portable Use

To run Dasher without installing:

1. Download the ZIP version from [GitHub Releases](https://github.com/dasher-project/dasher/releases)
2. Extract to a USB drive or folder
3. Run `Dasher.exe` from that location
4. No administrator privileges required

## Input Devices on Windows

Dasher for Windows supports many input methods:

### Mouse (Most Common)

- Move the mouse to steer through the text
- Click to select and confirm
- Adjustable sensitivity in settings

### Eye-Tracking

Compatible with:

- **Tobii Eye Tracker** (4C, 5, Eye Tracker 4)
- **Tobii Dynavox** I-series and PCEye series
- **MyGaze** assistive eye trackers
- **Alea Intelligaze** eye trackers

**Setup:**

1. Install your eye tracker software first
2. Calibrate using the tracker's software
3. In Dasher, go to **Settings → Control → Input Device**
4. Select your eye tracker from the list
5. Adjust dwell time in settings

### Head-Tracking

Use a webcam to track head movements:

1. Go to **Settings → Control → Input Device**
2. Select "Head tracking (webcam)"
3. Allow camera access when prompted
4. Follow the calibration wizard

### Joystick/Gamepad

- USB joysticks
- Xbox controllers
- PlayStation controllers (with adapter)
- Generic gamepads

**Setup:**

1. Connect your controller
2. In Dasher, go to **Settings → Control → Input Device**
3. Select "Joystick"
4. Calibrate axes

### Switch Access

For single-switch or multiple-switch scanning:

1. Connect switches via:
   - USB switch interface
   - Serial port
   - Keyboard (spacebar, enter)
   - Mouse buttons

2. Go to **Settings → Control → Input Device**
3. Select "Button(s) / Switch(es)"
4. Configure number of switches and scan mode

## Speech Output

Dasher can speak entered text using Windows Speech API.

### Enabling Speech

1. Ensure Windows Speech API is installed:
   - **Windows 10/11:** Usually installed by default
   - **Windows 7/8:** May need [Microsoft Speech SDK 5.1](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms723627(v=vs.85))

2. In Dasher, go to **Settings → Speech**
3. Check "Enable speech"
4. Select voice from dropdown
5. Adjust rate and volume

### Installing Additional Voices

Windows 10/11:

1. Go to **Settings → Time & Language → Speech**
2. Under "Manage voices", click "Add voices"
3. Download language packs as needed

## Troubleshooting

**Problem:** "Windows protected your PC" warning

**Solution:**

- Click "More info"
- Click "Run anyway"
- This is Windows SmartScreen for unsigned software

**Problem:** Dasher won't start

**Solution:**

- Ensure you're using Windows XP or later
- Run as administrator: Right-click → Run as administrator
- Check Windows Event Viewer for crash logs
- Try the portable version instead

**Problem:** Speech output not working

**Solution:**

- Install [Microsoft Speech SDK 5.1](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms723627(v=vs.85)) if on Windows 7 or earlier
- Check Windows is not muted
- Test in Control Panel → Speech Recognition
- Try a different voice in Dasher settings

**Problem:** Eye tracker not detected

**Solution:**

- Ensure eye tracker software is installed and working
- Test tracker in manufacturer's software
- Try running Dasher as administrator
- Check for Windows updates
- Try a different USB port

**Problem:** Installation fails

**Solution:**

- Ensure you have admin rights
- Disable antivirus temporarily
- Run installer from a local folder (not network drive)
- Download installer again (may be corrupted)

## Uninstalling

To remove Dasher from Windows:

1. Go to **Control Panel → Programs and Features**
2. Find "Dasher" in the list
3. Click **Uninstall**
4. Choose whether to keep user settings and training files

## Advanced: Command Line Options

Dasher supports several command-line options:

```
Dasher.exe --options-file=path/to/file  # Load custom settings
Dasher.exe --alphabet=english            # Start with specific alphabet
Dasher.exe --fullscreen                  # Start in fullscreen mode
```

## Need Help?

- [Main Installation Guide](/) - Other platforms
- [FAQ](/faq/) - Common questions
- [User Manual](/docs/getting-started/how-to/manual/) - Complete usage guide
- [Matrix Chat](https://matrix.to/#/#dasher:matrix.org) - Get help from the community
- [GitHub Issues](https://github.com/dasher-project/dasher/issues) - Report bugs
