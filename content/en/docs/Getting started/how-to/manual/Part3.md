---
title: "3. Personalizing Dasher"
---
## 3 Personalizing Dasher

There are three classes of files you can tweak in order to make Dasher work better for you: **alphabet** files, **colour** files, and **training** files.

### 3.1 Personalizing the language model

Dasher’s predictions (in version 3 of Dasher) are based not on a dictionary but on a training text of ordinary text. For example, when you download Dasher version 3, it comes with a file called **training_english GB.txt.** This is 300 kbytes of ordinary english harvested from various documents on the internet.

When you use Dasher, it stores everything you write in another personal file with the same name as the training file. Next time you use Dasher, it reads in the original training file and everything you wrote last time, to help it predict better. Dasher learns all the time. To get the best results from Dasher:

- If possible, provide Dasher with a training text in your own style – a plain text file made from documents you have written before, and containing your own pet phrases, friends’ names, and so forth. Either append this file to the training file, or replace the original training file.

- If you think your personal training file may have become corrupted with rubbish text, edit it using any plain text editor. (Or ask a friend to do this for you.)

- If you use Dasher for many months, the personal training file may become so large that Dasher becomes slow to start up; if so, edit the training file using a plain text editor.

### 3.2 Personalizing the alphabet

Which characters are available to you, and their order, is determined by the alphabet file. For example, you might use **alphabet.english.xml.** Dasher comes with many alternative alphabets. You can edit alphabet files to change which characters are in the alphabet, or their order. When you edit this xml file, it might be a good idea to save the new file with a new name and change the name of the alphabets in the new file, to avoid confusion. Each field in the xml file specifies a symbol by three items: the character that should be displayed **(d=. . . )**; the character that goes into the text when this symbol is selected **(t=. . . )**; and the background colour number of the box for this symbol **(b=. . . )**, of which more below.

### 3.3 Personalizing the colour scheme

You can change the colours of the Dasher world in two ways. The colour file (for example **colour.xml** or **colour.euroasian.xml**) specifies the 200 colours in the palette that Dasher uses. Each line specifies red, green, blue values.

These colours are used to colour multiple objects in dasher. If for example you want to change the colour of the “red line”, change the second colour line of the colour file, which reads **<colour r="255" g="0" b="0"/>.**
You can change which of these colours is used for each symbol’s box by changing the “b” field for that symbol in the alphabet file.
