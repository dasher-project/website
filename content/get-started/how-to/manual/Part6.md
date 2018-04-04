---
title: "6. Continuous gestures"
---

## 6   Continuous gestures

Dasher’s normal mode (**mouse mode**) is driven by a two-dimensional continuous steering ges- ture. Dasher also has a **one-dimensional** mode, for users who can control only one dimension.
Can you make one or two continuous gestures? If you can operate a joystick, mouse, trackpad, or rollerball, then you have a two-dimensional control. If you can point on a touch-screen then that’s perfect too. Can you move your nose around? If you can shake your head, that’s a one-dimensional control; if you can nod, that’s two. A head-mouse can be quite cheap, and it is a convenient way to drive Dasher. (We recommend the **SmartNav3** from NaturalPoint, which costs about $200, and works under microsoft windows only; this device used to be called the NavPoint TrackIR until 2002, when that brand name was trans- ferred to a different device. We also recommend the Origin instruments **Headmouse Extreme**, which costs about $1000; it works as a USB mouse on any computer.) Can you waggle one finger or one foot? These head-mice can be used to track fingers and feet as well as heads. For a detailed comparison of SmartNav3 with Headmouse Extreme, please see
**http://www.inference.phy.cam.ac.uk/dasher/Headmouse.html**.

If you are severely paralysed, the best option may be a gaze tracker. Do you have control
of where your eyes are looking? With a gaze tracker we can write at 25 words per minute. Gaze trackers are quite expensive: we paid $2000 for the QuickGlance from EyeTech Digital Systems, and the Tobii eyetracker costs about $20,000. [We recommend both of these systems. You attach QuickGlance to an existing computer; Quickglance II costs about $4000. Tobii is a complete computer with built-in eyetracking cameras.] Dasher also works with the Eye response
**Erica**, with **LC’s Eyegaze**, and with Metrovision’s gaze-tracker. All three of these systems are complete computers with eye-tracking cameras attached.

If joysticks, mice, rollerballs, and gaze trackers don’t work, there may be a few other ways to convey a continuous one-dimensional signal. Lips and eyebrows should both work, though we don’t know of any manufacturer selling appropriate devices. Breath is a one-dimensional signal too. If you can control your breath, it should be possible to make a breath mouse for you. We made our $22 breath mouse using a USB optical mouse, a belt, and some elastic, and our most experienced user can write at 15 words per minute by breath alone.

### 6.1 Starting and stopping

There are several ways of starting and stopping Dasher. Pressing a button (for example, the left mouse button or the space bar) is one option. But if you can not press any buttons, it’s possible to start and stop using only continuous gestures: in the options menu, select “start on position”; and switch on “control mode”. When control mode is switched on, the Dasher alphabet includes a special Control node (a bit like an Esc key on a keyboard), within which various control functions are available. When you are inside the control node, Dasher moves more slowly than normal, for safety. The control node options include ‘pause’ and ‘stop’. Use ‘pause’ if you are half-way through writing something, and want to pause for a moment. Use ‘stop’ when you have finished. Pause and stop produce the same behaviour, except stop may cause other automatic actions, such as ‘speak on stop’, or ‘copy the text on stop’.

When Dasher is paused or stopped, it can be restarted using any of the starting methods that are enabled. If ‘start on position’ is enabled, then whenever Dasher is stopped a sequence of large targets will be displayed; you restart Dasher by pointing at (or looking at) the first (red) target, then the second (yellow) target. (We use two targets in sequence to make it difficult to start Dasher by accident.)

### 6.2 Recommendations for head-tracking

Many trackers have ‘smoothing’ options, which determine the frequency with which the mouse position is updated; these options are normally used to smooth and damp down the mouse motion. For Dasher, we don’t want such smoothing. We like instant, live, raw and jerky mouse coordinates. If there is a ‘smoothing’ control, turn it right down.

The ‘gain’ (sometimes called the ‘speed’) of the head-tracker is also an important setting to adjust. Some trackers’ gains can be adjusted in software. You can also adjust the gain by changing the geometry of your tracker: if you move the tracked dot from your forehead to the brim of a baseball cap, for example, then you roughly double the gain. Sitting closer to the tracker may also increase the gain. Find a gain setting that is comfortable. I like high gain because it allows me to steer with very small head motions.

## 6.3 Recommendations for gaze-tracking

For good results with gaze trackers, we strongly recommend that the gaze-tracker be made to be as responsive as possible. Many trackers have ‘smoothing’ options, which determine the frequency with which the mouse position is updated and the number of successive gaze images used to estimate the mouse position. These options are normally used to smooth and damp down the mouse motion. For Dasher, we don’t want such smoothing. We like instant, live, raw and jerky mouse coordinates. When you are navigating, your eye moves very quickly to the target you are interested in, and we want Dasher to respond instantly. The ideal settings for Dasher may be very different from the ideal settings for other software. Ask your eyetracker manufacturer to make it easy to change the settings when switching application.

Dasher has several options designed for use with gaze-trackers. We recommend using **eyetracker mode** (under Options/Preferences/Control). In this mode, the dynamics of Dasher are slightly different from standard dynamics, making error-correction easier by gaze.

If your gaze-tracker’s calibration drifts with time, for example when your head moves, then you should select the **Autocalibrate eyetracker** feature. When this feature is switched on, Dasher keeps track of your steering and infers the vertical calibration error, and corrects for it. You can see this correction taking effect by noticing the vertical offset between the mouse position as displayed by Dasher (by the tip of the red line) and the gaze-tracker’s mouse position (shown by the system’s mouse cursor).

To avoid difficulties with the mouse being bounded by the top and bottom of the screen, we recommend choosing a window size for Dasher that is not full-screen in size. Place the Dasher window so that there is a margin above and below the Dasher canvas.

**Technical note:** In Dasher version 4, we will introduce alternative ways for Dasher to receive tracking information from gaze trackers, head trackers, or similar systems. Rather than sending everything through the mouse, we will enable communication of coordinates, and coordinate- uncertainties, through an alternative socket.
