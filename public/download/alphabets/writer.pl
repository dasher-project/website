#!/usr/local/bin/perl5.8.4
# writer.pl writes a unicode file (utf8) in order to test the combining accents
#
#	print "Usage:  writer.pl > test.txt\n";
#
# output is here:
# http://www.inference.phy.cam.ac.uk/dasher/download/alphabets/test.txt
# http://www.inference.phy.cam.ac.uk/dasher/download/alphabets/test.png
# http://www.inference.phy.cam.ac.uk/dasher/download/alphabets/test2.png

use Unicode::Normalize;

binmode(STDOUT, ":utf8");

## print "Write Unicode file containing 4 copies of ecolum (e'co^lu"m) \n" ; 
print " Composed by hand:\n" ; 
print "\x{00e9}\x{0063}\x{00f4}\x{006c}\x{00fc}\x{006d}"  ; 

if(0){
    print "\n Or \n" ;
    @a= ( "00e9" , "0063" , "00f4" , "006c" ) ; 

    foreach $_ ( @a ) {
	print "\x{$_}" ; 
    }
}

print "\n Decomposed by hand:\n" ; 
print "\x{0065}\x{0301}\x{0063}\x{006f}\x{0302}\x{006c}\x{0075}\x{0308}\x{006d}"  ; 
print "\n Done\n" ; 

$inputfile =  "\x{00e9}\x{0063}\x{00f4}\x{006c}\x{00fc}\x{006d}"  ; 
my $NFD_string  = NFD($inputfile);  # Normalization Form D

$inputfile = "\x{0065}\x{0301}\x{0063}\x{006f}\x{0302}\x{006c}\x{0075}\x{0308}\x{006d}"  ; 
my $NFC_string  = NFC($inputfile);     # Normalization Form C

print "\n Decomposed by NFD:\n" ; 
print  $NFD_string;
print "\n ReComposed by NFC:\n" ; 
print  $NFC_string;

print "\n Done\n" ; 

exit(0);

if(0) {
    @b= ( "0065" , "0301" , "0063" , "006f" , "0302", "006c" ) ; 
    foreach $_ ( @b ) {
	print "\x{$_}" ; 
    }
    print "\n Done\n" ; 
}

