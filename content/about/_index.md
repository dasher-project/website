---
title: "About"
description: "Dasher is an information-efficient text-entry interface, driven by natural continuous pointing gestures. Dasher is a competitive text-entry system wherever a full-size keyboard cannot be used."
featured_image: 'demo.gif'
---
Dasher
======

Dasher is an information-efficient text-entry interface, driven by natural continuous pointing gestures. Dasher is a competitive text-entry system wherever a full-size keyboard cannot be used - for example,

*   when operating a computer one-handed, by joystick, touchscreen, trackball, or mouse;
*   when operating a computer with zero hands (i.e., by head-mouse or by eyetracker);
*   on a palmtop computer;
*   on a wearable computer.

The eyetracking version of Dasher allows an experienced user to write text as fast as normal handwriting - 29 words per minute; using a mouse, experienced users can write at 39 words per minute.

Dasher can be used to write efficiently in [any language](Languages.html).

Dasher is fast and fun to learn. (If you don't believe us, [see what users round the world say](users.html).)

Dasher is **free software**.


[![hit escape to halt animation](http://www.inference.phy.cam.ac.uk/dasher/images/newdasher.gif)](http://www.inference.phy.cam.ac.uk/dasher/images/largedasher.gif)

_Dasher is like an arcade game: `Attack of the killer alphabets', perhaps._  
[Financial Times, 5th February 2002](/is/press/ft0202.gif).

How does it work? 
======

Dasher is a zooming interface. You point where you want to go, and the display zooms in wherever you point. The world into which you are zooming is painted with letters, so that any point you zoom in on corresponds to a piece of text. The more you zoom in, the longer the piece of text you have written. You choose what you write by choosing where to zoom.

In the example to the right, the user is writing "Hello,\_how\_are_you?".

To make the interface efficient, we use the predictions of a language model to determine how much of the world is devoted to each piece of text. Probable pieces of text are given more space, so they are quick and easy to select. Improbable pieces of text (for example, text with spelling mistakes) are given less space, so they are harder to write. The language model learns all the time: if you use a novel word once, it is easier to write next time.

A big advantage of Dasher over other predictive text-entry interfaces that offer word-completions to the user is that it is **mode-free**: the user does not need to switch from a writing mode to an "accept-model-predictions" mode.

Another advantage is that it is easy to train the model on any writing style: simply load up an example file, then write away!