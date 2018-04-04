---
title: "2. Create a Training text"
weight: -400
---

Making the Training Text
------------------------

The training text should be a plain text file containing text `similar' to what you intend to write. The larger the better. We think that 300K is a good size to aim for. Our preferred **file format** for all corpuses is **UTF-8**, but if you prefer to provide another format, that's OK; when supplying the file please include a description of its contents and name the format; we'll use the linux utility **iconv** to convert, if necessary.

Example training texts that you could use are:

*   Take all the documents you have written, and glue them all together in one big document.
*   Use novels - eg, we used Jane Austen's _Emma_ from [Project Gutenberg](http://promo.net/pg/). The problem with using just one or two novels, however, is that particular words (like Emma or Alice) occur very frequently; so novels are not ideal for a general-purpose training text.
*   Use all the email messages you have written, and glue them all together in one big document..

### Existing corpuses

[There is a corpora mailing list; this website has lots of useful links](http://www.hit.uib.no/corpora/).

### How to make a general-purpose training text

You can make a pretty good corpus simply by concatenating a load of documents in your chosen language. Such a corpus is pretty good, but not ideal, since, for example, if you include all of _Alice in Wonderland_, the word _Alice_ and the phrase _white rabbit_ will occur far more often than normal. The aims of the more complicated procedure described below are

1.  to create a corpus that has all common words represented in a variety of contexts, with no one source document dominating the statistics;
2.  to create a corpus that can be sensibly shrunk to make a smaller corpus (for handheld computers with small memory, for example).

Here's how I made the training text for the English version of Dasher.

1.  Get lots of English documents. Get far more material than you think you need, so that we can select a _well-balanced_ set of sentences in a sensible way, as follows.
2.  Pre-process them all so that there is exactly one sentence per line.  
    I did this using a perl program I wrote, [processbook.p](/mackay/perl/processbook.p) with scripts like this
    
    foreach f ( alice emma )
      processbook.p  /books0/$f > /books/$f
    end
    
3.  **Now**, obtain a listing of the 2000 most frequent words in the language. The idea is, since these words are common, it is important that we should have them represented several times each in the final corpus, in a variety of contexts. We will use these words to select which sentences are included from our over-large corpus.  
    I obtained such a list from the internet and put it in a file called dict. I removed from dict any absurdly common words that prevented the remaining steps from working nicely.
4.  Use another program to select from each pre-processed book the sentences that contain the 2000 required words. Go through the required words in order, so that the resulting corpus is also ordered, with the top of the corpus containing examples of use of the most common words; that way, the corpus can be shrunk by cutting its tail off, and should still be an appropriate corpus for its size.  
    Glue the sentences together into plausible-sized paragraphs, so as to emulate normal writing.  
    I did this step by using the linux utility **glimpse** and my perl program [corpus.p](/mackay/perl/corpus.p)
    
    rm  /data/coll/mackay/books/*~
    glimpseindex -b  -B   -H ~/dasher/  /data/coll/mackay/books/
    corpus.p k=1 f=4 o=corpus4.txt
           
    
    That's how I made [this corpus](/dasher/download/english/corpus4.txt1) (316K), which is used in Dasher 1.6.8.
5.  If you have any non-ASCII characters, you need to convert the file to UTF-8 (or send it to us so we can do it). iconv is a Unix tool that can do this. If your text is in ISO-8859-1 format (ie, Western Europe), run
    
    iconv -f iso-8859-1 -t utf-8 corpus >corpus.utf8
    
    which will produce a UTF-8 version of the corpus in corpus.utf8. Another method for converting to UTF8 using perl is this:
    
    #!/usr/local/bin/perl5.8.4
    use Encode;
    
    local $/;
    open(TEXT, "< infile.txt") or die $!;
    open (UTF8, "> outfile.txt") or die $!;
    my $data = <TEXT>;
    Encode::from_to($data, "iso-8859-1", "utf8"); # the converting line
    binmode UTF8; # the filehandle should be binary for printing UTF8
    print UTF8 $data;
    	    
    
    A useful command for checking what format a file is in is
    
    file filename.txt
    	    
    

If people make good corpuses in other languages and wish to share them, I can put them on [this site](/dasher/download/training).

Two-letter country codes for the ends of training filenames can be found at [(digraphs page)](http://www.theodora.com/country_digraphs.html).