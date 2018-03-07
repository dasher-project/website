#!/usr/bin/perl -w

# Converts a UTF8 Hiragana input file (that may contain diacritical marks)
#    to use 83 Hiragana characters.
#    eg
#                 Ka "
#
#       is replaced by
#
#                 Ga
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


#  my $NFD_string  = NFD($inputfile);  # Normalization Form D
#  my $NFC_string  = NFC($inputfile);  # Normalization Form C
#  my $NFKD_string = NFKD($inputfile); # Normalization Form KD
  my $NFKC_string = NFKC($inputfile); # Normalization Form KC

print OUTPUTFILE $NFKC_string;


