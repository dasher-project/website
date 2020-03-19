---
title: "4. Languages"
---
## 4 Languages

Dasher works in hundreds of languages.

For each language there is an alphabet file (or possibly more than one alphabet file). On the Dasher website we aim to supply at least one training text for each language. If we don’t have a good training text for your language, please help us by making one and sending it to us.

See the Dasher website for the list of languages supported by Dasher. As of October 2005, all the major languages of the world are well supported, with the exception of Japanese and Chinese, for which Dasher version 3 offers only phonetic support (hiragana and pin-yin). In Dasher version 4, we will provide full support for Japanese and Chinese.

[More issues to discuss here: how combining accents work; fonts. Scripts to convert to composed or decomposed form.]


Fonts for Dasher
----------------

For Dasher to work in any language, your computer must have the right fonts on board.

### Examples

Here's how I got Malayalam working under linux:

1.  I went to Alan Wood's [Fonts](http://www.alanwood.net/unicode/fonts.html) page, which gave lots of links for Malayalam fonts. I selected the [janamalayalam](http://tdil.mit.gov.in/download/janamalayalam.htm) link, downloaded their zip file, unzipped it, and put the resulting TTF file into my ~/.fonts folder. (You should make this directory if it does not exist.)
2.  Then I typed fc-cache and restarted Dasher. Malayalam worked instantly. I didn't need to tell Dasher which font to use, it just found it.

Behdad got Persian (Farsi) working on my computer by installing ttf files from [FarsiWeb](http://farsiweb.info/) (go to Products, it's the first item.) From [corefonts.sourceforge.net/](http://corefonts.sourceforge.net/). on the other hand, you can download major fonts from Microsoft, including Tahoma and Times New Roman. They may not be the most beatiful fonts out there, but they do support lots of languages (whatever is supported by Windows.) To extract the fonts form the .exe files available there, you need a tool called cabextract.

To get Gujurati working, I registered with Sun (using the link for Saraswati from Alan Wood's site) and downloaded their Saraswati TTF file. HOWEVER, Sun's download link hung my browser. To avoid this happening again, I right-clicked on their link, selected Copy Link Location, then used wget to get the file. It was worth the hassle because this font provided all the Indian languages except Oriya and Sinhala. For Sinhala, go here... http://sinhala.linux.lk/ or here [here](http://www.fonts.lk/download/Malithi%20Web.html)

#### Problems and how to fix them

**Q**

_On some linux systems we find that when we switch to Hiragana, most of the characters (pronounced ka ki ku ke ko, sa, chi, su, se, so, ...) are rendered just fine, but the japanese characters whose pronunciation is "a, i , u , e , o , and n" are rendered as LATIN characters "a, i , u , e , o , and n". So it seems some stupid font is asserting that it can provide the character pronounced "a", and is getting higher priority than the existing correct japanese fonts!  
Would love to know how to override this behaviour._

**A**

on such a system, you can figure out what font is being used to render those characters by simply following these steps:  
\- run gucharmap  
\- find the misbehaving character  
\- right click on it, an enlarged view appears. In the box is also written the name of the font used.  
  
When you know which font is behaving bad, you can either remove it, or use some fontconfig configuration to override the setting.

A useful linux utility for looking at fonts is gucharmap.
