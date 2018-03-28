---
title: "Linux"
weight: -100
---

Linux
-------

The Contributor’s Guide to Dasher’s Ubuntu Version

1) Fork the project from github.

2) Clone the repo to your machine
<br />$ git clone https://github.com/<your account>/dasher.git
<br />$ cd dasher

3) Add the forked repo as the upstream repo
<br />$ git remote add upstream https://github.com/GNOME/dasher.git

4) Install dependencies
<br />$ packages="g++
<br />            gnome-common
<br />            gnome-doc-utils
<br />            libatspi2.0-dev
<br />            libgtk-3-dev
<br />            libspeechd-dev"
<br />$ sudo apt-get install $packages

5) Execute the commands one after another
<br />$ ./autogen.sh --enable-speech=yes
<br />$ ./configure
<br />$ make
<br />$ sudo make install

6) Run dasher

/usr/local/bin/dasher

7) [Optional] Create desktop shortcuts

cd dasher
./create-linux-desktop-shortcuts.sh


Syncing your fork
Reference: https://help.github.com/articles/syncing-a-fork/
Fetching latest changes:
git fetch upstream
Merge latest changes to your local fork repo's master
git merge upstream/master
Push latest changes to your remote fork repo
git push origin master


Linux source code location
cat Src/README_directory_structure.txt
DasherCore      - The Dasher Engine
Win32               - The MS Windows GUI, coded using the Windows API (not MFC).
Gtk2		  - The Unix GUI, coded using GTK2. Also includes GPE code.
MacOSX	  - The MacOS X GUI, coded using Cocoa.
Qt		  - The QTopia GUI, aimed at QT-based palmtops
Your platform here:
XXX                  - GUI, coded for the XXX platform.

Common          - This code may be used by DasherCore and/or platform specific
		  ports. It contains generally useful code, some by the Dasher
		  team, some by 3rd parties.


Therefore, Ubuntu GUI code is at the following location:
dasher/Src/Gtk2/

The main dasher engine is at the following location:
dasher/Src/DasherCore

