#!/usr/local/bin/perl -w
# converts html to txt with all characters protected
# usage:
# (cd ~/website/dasher/english ; ./html2txt.pl dasherlink1.html > dasherlink1.txt)
# ( cd ~/website/dasher/english ; ./html2txt.pl dasherlink2.html > dasherlink2.txt ) ; make dasherenglish

eval "\$$1=\$2" while @ARGV && $ARGV[0]=~ /^(\w+)=(.*)/ && shift;

while(<>){
    s/\&/\&amp;/g; 
    s/\</\&lt;/g;
    s/\>/\&gt;/g;
    print;
}
