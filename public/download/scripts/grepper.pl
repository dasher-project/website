#!/usr/bin/perl 

use strict;
use utf8;
use Unicode::Normalize;

local $/;
my $string = <>;

#my $count =()= $string =~ m/\x{304C}/g;
my $count =()= $string =~ m/\x{304C}/g; print "GA: " . $count, "\n";
$count =()= $string =~ m/\x{304B}\x{3099}/g; print "KaC: ". $count, "\n";
$count =()= $string =~ m/\x{304B}\x{309B}/g; print "KaN: ". $count, "\n";

