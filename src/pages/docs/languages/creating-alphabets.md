---
title: Creating Custom Alphabets - Dasher
description: Learn how to create custom alphabet files and training texts for Dasher
layout: ../../../layouts/DocsLayout.astro
---

# Creating Custom Alphabets

If your language is not already supported in Dasher, you can add support by creating
an alphabet file and providing training text. This guide will walk you through the process.

## Overview

Dasher uses two main components to support a language:

1. **Alphabet file** (`alphabet.xml`) - Defines the characters and their order
2. **Training text** - A sample of natural writing (300K or more) to teach Dasher character probabilities

## Step 1: Create the Alphabet File

The alphabet file is an XML file that defines all characters in your language and their
display order in Dasher.

<div class="example-box">
  <h3>Basic Alphabet File Structure</h3>
  <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;alphabet name="MyLanguage"&gt;
  &lt;!-- Define character groups --&gt;
  &lt;group label="Lowercase"&gt;
    &lt;char d="a" /&gt;
    &lt;char d="b" /&gt;
    &lt;!-- more characters... --&gt;
  &lt;/group&gt;

  &lt;group label="Uppercase"&gt;
    &lt;char d="A" /&gt;
    &lt;char d="B" /&gt;
    &lt;!-- more characters... --&gt;
  &lt;/group&gt;

  &lt;group label="Numbers"&gt;
    &lt;char d="0" /&gt;
    &lt;char d="1" /&gt;
    &lt;!-- more characters... --&gt;
  &lt;/group&gt;

  &lt;group label="Punctuation"&gt;
    &lt;char d=" " /&gt;  &lt;!-- space --&gt;
    &lt;char d="." /&gt;
    &lt;char d="," /&gt;
    &lt;!-- more punctuation... --&gt;
  &lt;/group&gt;
&lt;/alphabet&gt;</code></pre>
</div>

### Character Attributes

Characters can have various attributes:

- `d` - The character itself (display)
- `t` - Text output (if different from display)
- `colour` - Color for the character box
- `label` - Display label for character groups

### Combining Characters

For languages with combining characters (like Thai), use special handling:

<div class="info-box">
  <p>
    Dasher can generate complicated multi-part characters by combining Unicode components.
    Define base characters and combining marks separately in the alphabet file.
  </p>
</div>

## Step 2: Prepare Training Text

Training text helps Dasher learn the probability distribution of characters in your language.

### Requirements

- **Size:** At least 300KB of text (more is better)
- **Content:** Natural writing in your target language
- **Format:** Plain text file, UTF-8 encoded
- **Quality:** Representative of typical usage

### Sources for Training Text

<div class="sources">
  <div class="source">
    <h4>Public Domain Books</h4>
    <p>Project Gutenberg, public domain literature, government documents</p>
  </div>

  <div class="source">
    <h4>News Articles</h4>
    <p>News websites (check copyright), press releases</p>
  </div>

  <div class="source">
    <h4>Wikipedia</h4>
    <p>Dump files available for many languages</p>
  </div>

  <div class="source">
    <h4>Corpora</h4>
    <p>Existing language corpora for linguistics research</p>
  </div>
</div>

### Creating Your Own Training Text

For best results, create training text that matches your personal writing style.
Collect emails, documents, or other text you've written in the target language.

## Step 3: Install the Files

<div class="platform-instructions">
  <div class="platform">
    <h4>Windows</h4>
    <ol>
      <li>Place <code>alphabet.xml</code> in: <code>C:\Program Files\Dasher\alphabets\</code></li>
      <li>Place training text in: <code>C:\Program Files\Dasher\training\</code></li>
      <li>Restart Dasher</li>
      <li>Select <strong>Options → Alphabet</strong> and choose your language</li>
    </ol>
  </div>

  <div class="platform">
    <h4>Linux</h4>
    <ol>
      <li>Place <code>alphabet.xml</code> in: <code>/usr/share/dasher/alphabets/</code></li>
      <li>Place training text in: <code>/usr/share/dasher/training/</code></li>
      <li>Or use <code>~/.dasher/</code> for user-specific files</li>
      <li>Restart Dasher</li>
      <li>Select <strong>Options → Alphabet</strong> and choose your language</li>
    </ol>
  </div>

  <div class="platform">
    <h4>macOS</h4>
    <ol>
      <li>Right-click Dasher.app and select "Show Package Contents"</li>
      <li>Navigate to <code>Contents/Resources/</code></li>
      <li>Place files in <code>alphabets/</code> and <code>training/</code> subdirectories</li>
      <li>Restart Dasher</li>
      <li>Select <strong>Options → Alphabet</strong> and choose your language</li>
    </ol>
  </div>
</div>

## Step 4: Test and Refine

### Testing Your Alphabet

1. Start Dasher and select your new alphabet
2. Try writing some sample text
3. Check that all characters appear correctly
4. Verify character order makes sense for your language

### Troubleshooting

<div class="troubleshooting">
  <div class="issue">
    <h4>Characters not appearing</h4>
    <p>Check that your font supports the characters. Install a Unicode font for your language if needed.</p>
  </div>

  <div class="issue">
    <h4>Predictions seem wrong</h4>
    <p>Add more training text, or ensure it's representative of natural writing in your language.</p>
  </div>

  <div class="issue">
    <h4>File not loading</h4>
    <p>Verify the XML is well-formed. Check for encoding issues (should be UTF-8).</p>
  </div>

  <div class="issue">
    <h4>Wrong character order</h4>
    <p>Adjust the order of characters in the alphabet file to match your language's conventions.</p>
  </div>
</div>

## Advanced Topics

### Context-Dependent Characters

Some languages have characters that change form based on context. Dasher can handle
this through special XML attributes and context rules.

### Multiple Input Methods

For languages with multiple input methods (like different keyboard layouts), you can
create multiple alphabet files with different `context` attributes.

### Sharing Your Alphabet

If you create an alphabet for a language not yet supported, please consider contributing
it to the Dasher project!

## Resources and References

<div class="resources">
  <div class="resource">
    <h4>Unicode Resources</h4>
    <p>
      <a href="https://www.unicode.org/" target="_blank" rel="noopener noreferrer">Unicode Consortium</a> -
      Official Unicode charts and standards
    </p>
  </div>

  <div class="resource">
    <h4>Alphabet Examples</h4>
    <p>
      <a href="https://github.com/dasher-project/dasher" target="_blank" rel="noopener noreferrer">Dasher GitHub</a> -
      View existing alphabet files in the repository
    </p>
  </div>

  <div class="resource">
    <h4>Font Information</h4>
    <p>
      <a href="https://www.alanwood.net/unicode/fonts.html" target="_blank" rel="noopener noreferrer">
        Alan Wood's Unicode Fonts
      </a> -
      Information about Unicode fonts for various languages
    </p>
  </div>

  <div class="resource">
    <h4>Training Text Corpora</h4>
    <p>
      <a href="https://www.gutenberg.org/" target="_blank" rel="noopener noreferrer">Project Gutenberg</a> -
      Free public domain books in many languages
    </p>
  </div>
</div>

<div class="cta-box">
  <h2>Need Help?</h2>
  <p>
    If you need help creating an alphabet or want to contribute one you've made,
    please <a href="https://github.com/dasher-project/dasher/discussions" target="_blank" rel="noopener noreferrer">
    contact us on GitHub Discussions</a>.
  </p>
</div>
