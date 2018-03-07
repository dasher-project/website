#!/usr/bin/perl -w 

# Converts a SHIFT-JIS file to UTF8
#
#                        Fri 12/9/03 (c) Chris Ball and David MacKay
#
# This Free Software is licensed for distribution under the GNU
# General Public License. See:
#                                http://www.gnu.org/copyleft/gpl.html

use strict;
use Unicode::MapUTF8 qw(to_utf8);

local $/;
my $jis = <>;

my $utf8_string   = to_utf8({ -string =>$jis, -charset => 'sjis'});

open (UTF8, ">utf8text");
print UTF8 $utf8_string;
