## 7 I can’t use mouse mode or one-dimensional mode

OK, we have several versions of **button Dasher**, which will be available in Dasher Version 4
from January 2006.

### 7.1 Are time-critical gestures not an option?

Some ways of conveying information make use of the *timing* of gestures. However, some people can’t make gestures at a required instant. For example, spastics find it very difficult to do an action ‘exactly now!’

If time-critical gestures are not an option, go to section 7.2.

If you *can* convey information by *precisely timed* gestures, go to section ??.

### 7.2 ‘Timeless’ choices of Dasher

So, you want to steer Dasher at your own pace. Can you make fairly-accurate continuous gestures, given time? For example, can you position a pointer accurately on a screen, then press a button to indicate that you are ready? Or can you touch a touch-screen fairly accurately?

• If so, try **click mode**. Go to section ??.

• Otherwise try **direct button mode** or **menu button mode**. Go to section 7.4.

### 7.3 ‘Timeless’ continuous Dasher: click mode

In **click mode**, you position the mouse pointer where you want to go, then press a button when you are ready. Dasher then zooms in on the position you chose.
Alternatively, if you have a touch screen, a single touch on the screen initiates a zoom to that position. (This functionality has yet to be implemented.)

### 7.4 ‘Timeless’ choices of Button Dasher

How many different switches, keys, or buttons can you easily operate?

**1** With just one button, the only timeless way to convey information is by the *duration* of your button-presses. Can you make a distinction between short presses and long presses? If so, you can use **menu button-Dasher**. Connect up your short press to the ‘menu’ action, and your long press to the ‘select’ action.

**2** You can use **menu button-Dasher**. Connect one button to the ‘menu’ action, and the other to the ‘select’ action. If one button is easier to press, make that button the ‘menu’ button.

2½ If you can easily press two buttons, and, for special occasions, you are able to press a third 2
button, you can use **menu button-Dasher** or **direct button-Dasher**.

1. Set up **menu button-Dasher** as described above, and use the third button as your escape key – to make Dasher go away, for example. [This feature is not currently provided within Dasher.]
2. In **direct button-Dasher**, each button produces a particular navigation action such as ‘up’, ‘down’, or ‘back’. If you have 21 buttons, map the convenient two to ‘up’ and ‘down’, and the inconvenient button to ‘back’.

**3** You can use **direct button-Dasher** or **menu button-Dasher** as described above.

**4, 5, 6, or 7** With more than three buttons, you have the option to use **direct button-Dasher** with three, four, five, or six ‘forward’ directions. Please try **menu button-Dasher** too, even though it uses only two buttons.

**8 or more** Try **direct button-Dasher** and **menu button-Dasher**. With this many buttons, you also have the option of using a system like T9 – the predictive-text system found on many mobile phones.

To read more about **menu button-Dasher** and **direct button-Dasher** see sections **??** and **??.**

**7.5 Button Dashers that exploit timing**

Two questions: How many different switches, keys, or buttons can you easily operate? And can you make switch-closings and switch-openings with equal timing accuracy?
That is, can you not only press a button at an accurate time, but also release it with similar precision?

Whatever your answers are to these questions, you have three choices: **static one button mode, one button menu mode**, and **dynamic one button mode**. (We’ve got ideas about how to exploit two or more precisely-timed buttons, but we haven’t implemented them yet.)

If you want both presses and releases to convey information, then select the **two events** option. (Not yet implemented.) The default is that only button presses convey information, and the releases are ignored.

#### 7.5.1 Static one button mode

A pointer drifts down the screen. Press the button when the pointer is alongside your intended destination. If you miss the first chance to click, wait for the pointer to come back. If you need to back up (unzoom), press the button when the pointer is at the top or bottom of the display.

This is called ‘static’ mode because, as long as you don’t press the button, Dasher doesn’t move.

This mode has several parameters that you should adjust to get best results. Parameter (name?) controls the rate of drop of the pointer. Parameter (name?) controls the factor by which the display zooms in. Parameter **offset** corrects for your personal tendency to press the button a little early or late. It is measured in milliseconds, and a typical value is 100, which means that you usually press the button 100 ms late.

Another relevant parameter is the (name) parameter, common to several of the button modes, which controls the time taken for each zoom event.

#### 7.5.2 One button menu mode

The display cycles through a sequence of navigation directions. Press the button when the direction you want is highlighted. If you need to back up (unzoom), press the button when the whole display is highlighted.

This mode’s menus should be configured as described in section **??.** This mode has one additional parameter, (name?), which determines the speed of cycling through the options.

When choosing the number of menu options and their relative sizes, bear in mind your clicking ability. If you can click very accurately but only infrequently, then it may be most efficient for you to increase the speed parameter, and have more menu options. Experiment!

#### 7.5.3 Dynamic one button mode
(This mode has not yet been implemented; in 2003, a different dynamic one-button mode, also known as metronome mode, was implemented. We believe the dynamic mode described below will be superior.)

In **dynamic one-button mode**, Dasher moves slowly in one direction while the button is not pressed, then changes direction and zooms more rapidly for a fraction of a second when the button is pressed.

In the simplest version of this mode, a second button is used to halt Dasher and to initiate backing up (unzooms).

In a truly single-button version of this mode, the steady zooming-in of Dasher reverses after a short time, then Dasher pauses and enters a temporary menu mode, offering the options to back up, restart, or stop.

### 7.6 Appendix: Old notes on button-Dasher

The first table summarises the planned versions of button-Dasher and suggests a radio-button menu layout.

![alt text](https://github.com/uukurt/website/tree/master/content/get-started/images/image8.png)

![alt text](https://github.com/uukurt/website/tree/master/content/get-started/images/image9.png)

The 13-option radio-button menu could be included in the current Control menu. All the buttons options are mutually exclusive alternatives to Normal Mouse Mode, One-dimensional Mode, and Eyetracker Mode. Alternatively, we could have a single option, ‘Button mode’ sitting in a four-way radio button: Normal Mouse Mode, One-dimensional Mode, Eyetracker Mode, or Button mode; then a separate 13-choice radio-menu (at the bottom of the Control menu) would be used to specify which of the button modes the user wants. The other options could all go in Advanced, in principle, but it won’t be big enough to hold them all. So I think we need to replace Advanced by, or divide Advanced into, **Miscellaneous, Buttons,** and **Model.** Model is where we put the radio-button to choose between various language models, and the Smoothing slider. Miscellaneous gets Timestamp, the OneDimensionalMode slider, and the Start-on-mouse-position slider. Buttons gets everything in this document. While we do this, I think we should put the “Control Mode” switch into the “Control” menu, under Starting and Stopping.

Here is an alternative orientation for the button menu.

![alt text](https://github.com/uukurt/website/tree/master/content/get-started/images/image10.png)
