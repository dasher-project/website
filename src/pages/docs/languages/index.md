---
title: Languages and Alphabets - Dasher
description: Information about language support and alphabets in Dasher
layout: ../../../layouts/DocsLayout.astro
---

# Languages and Alphabets

<div class="intro-box">
  <p>
    The Dasher concept works with almost any language. Dasher operates in Unicode and supports
    over <strong>sixty alphabets</strong> out of the box.
  </p>
</div>

## Supported Language Families

<div class="language-grid">
  <div class="language-category">
    <h3>European Languages</h3>
    <ul>
      <li>English</li>
      <li>French</li>
      <li>German</li>
      <li>Spanish</li>
      <li>Italian</li>
      <li>Portuguese</li>
      <li>Dutch</li>
      <li>Swedish</li>
      <li>Danish</li>
      <li>Norwegian</li>
      <li>Polish</li>
      <li>Czech</li>
      <li>Hungarian</li>
      <li>Finnish</li>
      <li>Greek</li>
      <li>Russian</li>
    </ul>
  </div>

  <div class="language-category">
    <h3>Asian Languages</h3>
    <ul>
      <li>Japanese (Hiragana)</li>
      <li>Chinese (partial support)</li>
      <li>Thai</li>
      <li>Mongolian</li>
    </ul>
    <p class="note">
      Dasher can generate complicated multi-part characters for languages like Thai by
      combining Unicode components.
    </p>
  </div>

  <div class="language-category">
    <h3>Middle-Eastern Languages</h3>
    <ul>
      <li>Arabic</li>
      <li>Hebrew</li>
      <li>Persian (Farsi)</li>
    </ul>
  </div>

  <div class="language-category">
    <h3>Indian Languages</h3>
    <ul>
      <li>Hindi</li>
      <li>Bengali</li>
      <li>Tamil</li>
      <li>Telugu</li>
      <li>Kannada</li>
      <li>Malayalam</li>
      <li>Gujarati</li>
      <li>Punjabi</li>
      <li>Marathi</li>
      <li>Oriya</li>
      <li>Assamese</li>
      <li>Urdu</li>
      <li>Kashmiri</li>
      <li>Sinhala</li>
    </ul>
  </div>

  <div class="language-category">
    <h3>African Languages</h3>
    <ul>
      <li>Swahili</li>
      <li>Afrikaans</li>
      <li>Zulu</li>
      <li>Xhosa</li>
      <li>Sepedi</li>
      <li>Sesotho</li>
      <li>Setswana</li>
      <li>Setswana</li>
      <li>Tsonga</li>
      <li>Tswana</li>
      <li>Venda</li>
      <li>Ndebele</li>
      <li>Swati</li>
    </ul>
  </div>
</div>

## How to Switch Languages

<div class="instruction-box">
  <ol>
    <li>Open Dasher</li>
    <li>Select <strong>Options → Alphabet</strong></li>
    <li>Choose your desired language from the list</li>
  </ol>
</div>

All available alphabet files are included with Dasher. New alphabets can be added by
creating an appropriate `alphabet.xml` file.

## Training Texts

Dasher learns from example text to provide accurate predictions. Training texts are provided
for about fifty languages including European, Asian, African, and Semitic languages.

<div class="info-box">
  <h3>Why Training Texts Matter</h3>
  <p>
    Training texts teach Dasher the probability distribution of letters and words in your language.
    A well-trained Dasher will:
  </p>
  <ul>
    <li>Predict common words and phrases more accurately</li>
    <li>Offer better suggestions based on context</li>
    <li>Adapt to your personal writing style over time</li>
  </ul>
</div>

### Personalizing Dasher

We encourage you to **personalize Dasher** by supplying a training file written
in your own style. This is especially useful for:

- Specialized vocabulary (technical, medical, legal)
- Regional dialects and slang
- Personal writing patterns

## Special Language Implementations

<div class="special-lang">
  <h3>Japanese Dasher</h3>
  <p>
    Japanese is implemented using Hiragana (60 or 83 character alphabets). Dasher can convert
    Japanese Shift-JIS to UTF8 and ensures Hiragana files are correct for the chosen alphabet.
  </p>
</div>

<div class="special-lang">
  <h3>Chinese Dasher</h3>
  <p>
    Partial support is available in version 3, with complete solutions planned for future versions.
    Chinese implementation uses Pinyin-based selection with character prediction.
  </p>
</div>

<div class="special-lang">
  <h3>Combining Characters</h3>
  <p>
    Dasher supports languages with combining characters (like Thai) by treating each component
    as a separate selectable element, then combining them appropriately in the output.
  </p>
</div>

## Creating Custom Alphabets

If your language is not already supported, you can create a custom alphabet by:

<div class="steps">
  <div class="step">
    <h4>1. Create an alphabet file</h4>
    <p>
      Define your alphabet in an `alphabet.xml` file, specifying all characters
      and their order.
    </p>
  </div>

  <div class="step">
    <h4>2. Provide training text</h4>
    <p>
      Create a text file (300K or more) of natural writing in your language to help
      Dasher learn character probabilities.
    </p>
  </div>

  <div class="step">
    <h4>3. Install the files</h4>
    <p>
      Place the alphabet and training files in the appropriate Dasher directory and
      restart Dasher.
    </p>
  </div>
</div>

<p class="more-info">
  <a href="/docs/languages/creating-alphabets/" class="btn-secondary">Full Guide: Creating Custom Alphabets →</a>
</p>

## Resources

<div class="resources">
  <div class="resource">
    <h3>Creating Alphabets Guide</h3>
    <p>
      <a href="/docs/languages/creating-alphabets/">Full guide</a> to creating custom alphabets
      and training texts for Dasher.
    </p>
  </div>

  <div class="resource">
    <h3>Unicode Reference</h3>
    <p>
      <a href="https://www.unicode.org/" target="_blank" rel="noopener noreferrer">Unicode Consortium</a> -
      Official Unicode charts and standards for all languages.
    </p>
  </div>

  <div class="resource">
    <h3>Unicode Fonts</h3>
    <p>
      <a href="https://www.alanwood.net/unicode/fonts.html" target="_blank" rel="noopener noreferrer">
        Alan Wood's Unicode Fonts
      </a> -
      Information about Unicode fonts for various languages. Dasher requires Unicode fonts
      that support your language.
    </p>
  </div>

  <div class="resource">
    <h3>Existing Alphabets</h3>
    <p>
      <a href="https://github.com/dasher-project" target="_blank" rel="noopener noreferrer">
        Dasher on GitHub
      </a> -
      View and download existing alphabet files from the repository.
    </p>
  </div>

  <div class="resource">
    <h3>Training Text Sources</h3>
    <p>
      <a href="https://www.gutenberg.org/" target="_blank" rel="noopener noreferrer">Project Gutenberg</a> -
      Free public domain books in many languages, useful for creating training texts.
    </p>
  </div>
</div>

<div class="cta-box">
  <h2>Need Help?</h2>
  <p>
    If you need help with a specific language or want to contribute an alphabet file,
    please <a href="https://github.com/dasher-project" target="_blank" rel="noopener noreferrer">
    contact us on GitHub Discussions</a>.
  </p>
</div>
