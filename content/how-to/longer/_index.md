---
title: "The longer explanation"
description: "Dasher is an information-efficient text-entry interface, driven by natural continuous pointing gestures. Dasher is a competitive text-entry system wherever a full-size keyboard cannot be used."
weight: -20

---

Imagine **a library containing all possible books**, ordered alphabetically on a single shelf. Books in which the first letter is "a" are at the left hand side. Books in which the first letter is "z" are at the right. In picture (i) below, the shelf is shown vertically with "left" (a) at the top and "right" (z) at the bottom. The first book in the "a" section reads "aaaaaaaaaaaa..."; somewhere to its right are books that start "all good things must come to an end..."; a tiny bit further to the right are books that start "all good things must come to an enema...".


| ![The library of Babel - a-z.](/dasher/images/a-z.gif.50.gif) | ![The library of Babel - aa-az. ](/dasher/images/aa-az.gif.50.gif) | ![The library of Babel - ala-alz.](/dasher/images/ala-alz.gif.50.gif) |
|-----|-------|-------|
| (i) | (iii) | (iii) |

When someone writes a piece of text, their choice of the text string can be viewed as a choice of a book from this library of all books - the book that contains exactly the chosen text. How do they choose that book? Let's imagine they want to write "all good things..."

First, they walk into the "a" section of the library. There, they are confronted by books starting "aa", "ab", "ac,.... "az" \[Picture (ii)\]. Looking more closely at the "al" section, they can find books starting "ala", "alb",... "alz" \[Picture (iii)\].

By looking ever more closely at the shelf, the writer can find the book containing the text he wishes to write. Thus writing can be described as **zooming in on an alphabetical library, steering as you go**.

This is exactly how Dasher works, except for one crucial point ...

## Part two

.... This is exactly how Dasher works, except for one crucial point: _we alter the SIZE of the shelf space devoted to each book in proportion to **the probability** of the corresponding text._ For example, not very many books start with an "x", so we devote less space to "x..." books, and more to the more plausible books, thus making it easier to find books that contain probable text.

Here is the corresponding sequence of pictures of the library in Dasher. (The character "_" denotes the space character.)

![The user-friendly library of Babel - a-z](/dasher/images/a-z.m.gif.50.gif)

![The user-friendly library of Babel - aa-az](/dasher/images/aa-az.m.gif.50.gif)

![The user-friendly library of Babel - ala-alz](/dasher/images/ala-alz.m.gif.50.gif)

(i)

(ii)

(iii)

Dasher can be trained on examples of any writing style, and it learns all the time, picking up your personal turns of phrase.

## Demonstrations

The [image](/dasher/images/object.gif) below shows the state of the Dasher interface while the user is writing the word \`objection'; alternative words that could easily be written at this point include \`objective', \`objects_', and \`object_oriented'.  
![Dasher text entry interface](/dasher/images/object.gif)

If you find Dasher hard to imagine based on these static pictures, please take a look at the movies below. _When you watch someone else steering Dasher, you may find it looks difficult, but be assured: it is actually very easy; it's a lot like driving a car._

You can [try Dasher right now, in your browser](TryJavaDasherNow.html), if your browser is Java-enabled.

When you try Dasher for the first time, please read the [tips for novices](tips.html).

Streaming movies, presentations
-------------------------------

### By the Dasher team

Dasher - information-efficient text entry (19th April 2007)

[Google tech talk (54 minute video)](http://video.google.com/videoplay?docid=5078334075080674416) by David MacKay at Google Inc, Mountain View

### By other people

[Augie, an ALS-sufferer, is featured on this MSNBC article - we see him driving Dasher with his feet.](http://today.msnbc.msn.com/id/26184891/#29955316)

[Google video by Paul Tingey](http://www.youtube.com/watch?v=IK5_QYv3kf0) showing Dasher hooked up to RoboRealm (machine vision software)

"Writing sentences with a red plastic ball"

Movies
------

**Simple movies**

**File size**

[Animated gif of Dasher version 3, should work in any browser](/dasher/images/newdasher.gif)

300K

[Animated gif of Dasher version 3, identical to the above, but higher quality animation](/dasher/images/newdasher.gif)

560K

[Animated gif of Dasher version 1, should work in any browser](http://www.inference.phy.cam.ac.uk/djw30/dasher/dasher.gif)

81K

[Animated gif of Daishoya](/dasher/japanese/anim.gif) (Japanese Dasher version 1).  
    [Further information in Japanese](/dasher/japanese/script.html)

300K

[Flash movie (will play in your browser if flash-enabled) showing Dasher in Persian](http://behdad.org/blog/mces/dasher/dasher.htm)

by [Behdad](http://mces.blogspot.com/2005/07/persian-dasher.html) and the FarsiWeb Project

**Movies for Windows systems**

**File size**

[Streaming video demonstration](/dasher/movies/20020520_demo.asf) (1.5 mins asf) including audio commentary.  
    [The text of the commentary is available](020520text.html).

2.7 M  

[3 minute demonstration of Dasher](/dasher/movies/dasherlotusdemo.zip), with a commentary. The demonstration uses lotus screen cam software (included in the zip file) which runs on windows 95 systems.  
This movie is highly recommended as the commentary explains how Dasher is used.

5 M

    [The text of the commentary is available](/dasher/movies/lotusscript.txt).

4 K

**mpeg Movies**

**File size**

[Dasher with an eye-tracker: enhanced eyetracking mode](/dasher/movies/EyeDasher.4800.mpg) (Aug 2005)

28 M  

[Dasher with an eye-tracker](http://www.inference.phy.cam.ac.uk/djw30/dasher/movies/eye.mpg) (November 2001)

6 M  

\[In this movie, David hits the space bar to start the program going, and after that he uses nothing but eyes; he's using Dasher version 1.6. In Dasher versions 3 and 4, we can start and stop Dasher without cheating in this way.\]

[Dasher running on a Compaq iPAQ](http://www.inference.phy.cam.ac.uk/djw30/dasher/movies/ipaq.mpg)

9 M  

[Dasher with an eye-tracker: enhanced eyetracking mode, demonstrating autocalibration, within ten seconds or so, of a hugely-miscalibrated eyetracker](/dasher/movies/DasherEyetracker.mpg) (September 2004)

17 M  

[Dasher with an eye-tracker: enhanced eyetracking mode, demonstrating use of control mode](/dasher/movies/ControlMode.mpg) (September 2004)

9 M

[Breath Dasher, including control mode demonstration](/dasher/movies/BreathDasher.mpg) (September 2004)

25 M

[Keith Vertanen](http://www.inference.phy.cam.ac.uk/kv227/speechdasher/)'s [Speech-Dasher prototype (mpg)](http://www.inference.phy.cam.ac.uk/kv227/videos/dasher_the_hibernating_skunk.mpg) [(avi)](http://www.inference.phy.cam.ac.uk/kv227/videos/dasher_the_hibernating_skunk.avi)

13 M  

**Large MOV Movies**

**File size**

**Large AVI Movies**

**File size**

[Dasher with an eye-tracker](http://www.inference.phy.cam.ac.uk/djw30/dasher/movies/eye.avi) (November 2001)

54 M  

[AVI of Dasher running on a Compaq iPAQ](http://www.inference.phy.cam.ac.uk/djw30/dasher/movies/pocket.avi)

4 M  

[Very large AVI of Dasher running on a Compaq iPAQ](http://www.inference.phy.cam.ac.uk/djw30/dasher/movies/ipaq.avi)

90 M  

[AVI by Alexandre-Alapetite showing Dasher being used to write rich text into a Wiki](http://alexandre.alapetite.net/prive/temp/20050706-COGAIN-LiveWiki-Dasher-Alexandre-Alapetite.avi)

3M

Daniel Jalkut's movie of Dasher on a Mac [can be found on this blog](http://www.red-sweater.com/blog/345/dasher-alternative-input)

28M

More screenshots with captions can be found [here](MoreScreen.html) and [here](Images.html). For further demonstrations, [movies](http://www.inference.phy.cam.ac.uk/djw30/dasher/movies.html) and [screenshots](http://www.inference.phy.cam.ac.uk/djw30/dasher/screenshots.html) see [**David Ward's Dasher site**](http://www.inference.phy.cam.ac.uk/djw30/dasher/); also [Keith Vertanen's](http://www.inference.phy.cam.ac.uk/kv227/videos/).

Thanks to Steve Hiner, Geoff Stead, and Simon Cozens for help with animations.