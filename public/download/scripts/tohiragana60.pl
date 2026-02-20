#!/usr/bin/perl -w

# Converts a UTF8 Hiragana input file 
#    to use only 60 Hiragana characters, plus diacritical marks.
#
#    eg
#                 Ga
#
#       is replaced by
#
#                 Ka "
#
#  The output file is also UTF8
#
#                        Fri 12/9/03 (c) Chris Ball and David MacKay
#
# This Free Software is licensed for distribution under the GNU
# General Public License. See:
#                                http://www.gnu.org/copyleft/gpl.html

use strict;
use Unicode::Normalize;

if (scalar @ARGV != 2) {
    print "Usage: perl $0 <inputfile> <outputfile>\n"; exit;
}

my ($inputfilename, $outputfilename) = @ARGV;

open(INPUTFILE, "<$inputfilename") or die $!;
open(OUTPUTFILE, ">$outputfilename") or die $1;

local $/;
my $inputfile = <INPUTFILE>;


#  my $NFD_string  = NFD($string);  # Normalization Form D
#  my $NFC_string  = NFC($string);  # Normalization Form C
  my $NFKD_string = NFKD($inputfile); # Normalization Form KD
#  my $NFKC_string = NFKC($string); # Normalization Form KC

print OUTPUTFILE $NFKD_string;


