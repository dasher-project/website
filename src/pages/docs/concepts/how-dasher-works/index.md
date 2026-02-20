---
title: "How Dasher Works: The Library Concept - Dasher"
description: "Learn how Dasher works - the library concept"
layout: ../../../../layouts/DocsLayout.astro
---

# How Dasher Works: The Library Concept

<div class="page-nav">
  <span class="current">Page 1</span>
  <a href="/docs/concepts/how-dasher-works/page-2/">Page 2</a>
  <a href="/docs/concepts/how-dasher-works/page-3/">Page 3</a>
</div>

## Imagine a Library Containing All Possible Books

Imagine **a library containing all possible books**, ordered alphabetically on a single shelf.
Books in which the first letter is "a" are at the left hand side. Books in which the first letter is "z"
are at the right.

In picture (i) below, the shelf is shown vertically with "left" (a) at the top and "right" (z) at the bottom.
The first book in the "a" section reads "aaaaaaaaaaaa..."; somewhere to its right are books that start
"all good things must come to an end..."; a tiny bit further to the right are books that start
"all good things must come to an enema...".

<div class="diagram-container">
  <div class="diagram">
    <strong>(i)</strong>
    <p>The entire library a-z</p>
  </div>
</div>

## Finding Your Book

When someone writes a piece of text, their choice of the text string can be viewed as a choice of a book
from this library of all books - the book that contains exactly the chosen text.

How do they choose that book? Let's imagine they want to write "all good things..."

First, they walk into the "a" section of the library. There, they are confronted by books starting
"aa", "ab", "ac.... az" [Picture (ii)].

<div class="diagram-container">
  <div class="diagram">
    <strong>(ii)</strong>
    <p>Looking more closely at the "al" section</p>
  </div>
</div>

Looking more closely at the "al" section, they can find books starting "ala", "alb"... "alz" [Picture (iii)].

<div class="diagram-container">
  <div class="diagram">
    <strong>(iii)</strong>
    <p>The "ala" through "alz" subsection</p>
  </div>
</div>

By looking ever more closely at the shelf, the writer can find the book containing the text he wishes to write.
Thus writing can be described as **zooming in on an alphabetical library, steering as you go**.

<div class="key-concept">
  <h2>The Key Concept</h2>
  <p>
    This is exactly how Dasher works, except for one crucial point...
  </p>
  <p class="next-page-link">
    <a href="/docs/concepts/how-dasher-works/page-2/" class="btn-primary">Continue to Page 2 →</a>
  </p>
</div>
