#!/usr/bin/env perl
# convert the one million word welsh corpus to unicode.
# usage:
# in /home/mackay/dasher/incoming/welsh/www.bangor.ac.uk/ar/cb/ceg
# cat *.asc | process.p > training_welsh_GB.txt

print 'Welsh training text for Dasher, processed from the corpus

Cronfa Electroneg o Gymraeg (CEG)
A 1 million word lexical database and frequency count for Welsh
Ellis, N. C., O\'Dochartaigh, C., Hicks, W., Morgan, M., & Laporte, N.  (2001)

    You are welcome to use the materials for any non-commercial
purpose. We have produced these analyses in good faith to the best of
our abilities given the limited resources. As we have described above,
you should be aware that there are some inaccuracies in the
taggings. We bear no responsibility for any damaging consequences that
may result from these.

    We welcome further research to extend or correct these linguistic descriptions.

    Articles based on the use of the database should cite:
            Ellis, N. C., O\'Dochartaigh, C., Hicks, W., Morgan, M., & Laporte, N.  (2001). Cronfa Electroneg o Gymraeg (CEG): A 1 million word lexical database and frequency count for Welsh. [On-line], Available: http://www.bangor.ac.uk/ar/cb/ceg/ceg_eng.html\n\n ' ;

# Convert accents using this rule: 
#( + = circumflex, % = dieresis (two dots), / = acute accent, \ = grave accent)
# s#this#that#g used to avoid clash with "/" accent.
while(<>){              #       These comments are provided for convenience if rewriting the program
 s#A/#\x{00c1}#g;  	#	s#A/U00C1/u00c1#g;   
 s#a/#\x{00e1}#g;  	#	s#a/U00E1/u00e1#g;   
 s#A\\#\x{00c0}#g;  	#	s#A\U00C0/u00c0#g;   
 s#a\\#\x{00e0}#g;  	#	s#a\U00E0/u00e0#g;   
 s#A\+#\x{00c2}#g;  	#	s#A+U00C2/u00c2#g;   
 s#a\+#\x{00e2}#g;  	#	s#a+U00E2/u00e2#g;   
 s#A%#\x{00c4}#g;  	#	s#A%U00C4/u00c4#g;   
 s#a%#\x{00e4}#g;  	#	s#a%U00E4/u00e4#g;   
 s#E/#\x{00c9}#g;  	#	s#E/U00C9/u00c9#g;   
 s#e/#\x{00e9}#g;  	#	s#e/U00E9/u00e9#g;   
 s#E\\#\x{00c8}#g;  	#	s#E\U00C8/u00c8#g;   
 s#e\\#\x{00e8}#g;  	#	s#e\U00E8/u00e8#g;   
 s#E\+#\x{00ca}#g;  	#	s#E+U00CA/u00ca#g;   
 s#e\+#\x{00ea}#g;  	#	s#e+U00EA/u00ea#g;   
 s#E\%#\x{00cb}#g;  	#	s#E%U00CB/u00cb#g;   
 s#e\%#\x{00eb}#g;  	#	s#e%U00EB/u00eb#g;   
 s#I/#\x{00cd}#g;  	#	s#I/U00CD/u00cd#g;   
 s#i/#\x{00ed}#g;  	#	s#i/U00ED/u00ed#g;   
 s#I\\#\x{00cc}#g;  	#	s#I\U00CC/u00cc#g;   
 s#i\\#\x{00ec}#g;  	#	s#i\U00EC/u00ec#g;   
 s#I\+#\x{00ce}#g;  	#	s#I+U00CE/u00ce#g;   
 s#i\+#\x{00ee}#g;  	#	s#i+U00EE/u00ee#g;   
 s#I%#\x{00cf}#g;  	#	s#I%U00CF/u00cf#g;   
 s#i%#\x{00ef}#g;  	#	s#i%U00EF/u00ef#g;   
 s#O/#\x{00d3}#g;  	#	s#O/U00D3/u00d3#g;   
 s#o/#\x{00f3}#g;  	#	s#o/U00F3/u00f3#g;   
 s#O\\#\x{00d2}#g;  	#	s#O\U00D2/u00d2#g;   
 s#o\\#\x{00f2}#g;  	#	s#o\U00F2/u00f2#g;   
 s#O\+#\x{00d4}#g;  	#	s#O+U00D4/u00d4#g;   
 s#o\+#\x{00f4}#g;  	#	s#o+U00F4/u00f4#g;   
 s#O%#\x{00d6}#g;  	#	s#O%U00D6/u00d6#g;   
 s#o%#\x{00f6}#g;  	#	s#o%U00F6/u00f6#g;   
 s#U/#\x{00da}#g;  	#	s#U/U00DA/u00da#g;   
 s#u/#\x{00fa}#g;  	#	s#u/U00FA/u00fa#g;   
 s#U\\#\x{00d9}#g;  	#	s#U\U00D9/u00d9#g;   
 s#u\\#\x{00f9}#g;  	#	s#u\U00F9/u00f9#g;   
 s#U\+#\x{00db}#g;  	#	s#U+U00DB/u00db#g;   
 s#u\+#\x{00fb}#g;  	#	s#u+U00FB/u00fb#g;   
 s#U%#\x{00dc}#g;  	#	s#U%U00DC/u00dc#g;   
 s#u%#\x{00fc}#g;  	#	s#u%U00FC/u00fc#g;   
 s#Y/#\x{00dd}#g;  	#	s#Y/U00DD/u00dd#g;   
 s#y/#\x{00fd}#g;  	#	s#y/U00FD/u00fd#g;   
 s#Y\\#\x{1ef2}#g;  	#	s#Y\U1EF2/u1ef2#g;   
 s#y\\#\x{1ef3}#g;  	#	s#y\U1EF3/u1ef3#g;   
 s#Y\+#\x{0176}#g;  	#	s#Y+U0176/u0176#g;   
 s#y\+#\x{0177}#g;  	#	s#y+U0177/u0177#g;   
 s#Y%#\x{0178}#g;  	#	s#Y%U0178/u0178#g;   
 s#y%#\x{00ff}#g;  	#	s#y%U00FF/u00ff#g;   
 s#W\+#\x{0174}#g;  	#	s#W+U0174/u0174#g;   
 s#w\+#\x{0175}#g;  	#	s#w+U0175/u0175#g;   
 s#(\s)\s+#$1#g;
 #if(/[+%/\\#]/) { print STDERR "Warning: A + = circumflex, % = dieresis (two dots), / = acute accent, \ = grave accent has not been substituted \n";   
	#	}
    print ;  
}
