---
title: "How Dasher Works: Probability - Dasher"
description: "Learn how Dasher works - probability and size"
layout: ../../../../layouts/DocsLayout.astro
---

# How Dasher Works: Probability and Size

<div class="page-nav">
  <a href="/docs/concepts/how-dasher-works/">Page 1</a>
  <span class="current">Page 2</span>
  <a href="/docs/concepts/how-dasher-works/page-3/">Page 3</a>
</div>

<p class="previous-summary">
  <em>In the previous page, we described writing as zooming in on an alphabetical library. This is exactly how Dasher works, except for one crucial point...</em>
</p>

<div class="key-concept-coral">
  <h2>The Crucial Difference</h2>
  <p>
    We alter the <strong>SIZE</strong> of the shelf space devoted to each book in proportion to
    <strong>the probability</strong> of the corresponding text.
  </p>
</div>

## Making Probable Text Easier to Find

For example, not very many books start with an "x", so we devote less space to "x..." books,
and more to the more plausible books, thus making it easier to find books that contain probable text.

<div class="diagram-container">
  <div class="diagram-grid">
    <div class="diagram">
      <strong>(i)</strong>
      <img src="/videos/areas.gif" alt="Dasher area map showing available text space" width="384" height="384" loading="lazy" />
      <p>All possibilities visible as regions</p>
    </div>
    <div class="diagram">
      <strong>(ii)</strong>
      <img src="/videos/areas2.gif" alt="Dasher area map zoomed into likely regions" width="384" height="384" loading="lazy" />
      <p>Likely continuations occupy more space</p>
    </div>
    <div class="diagram">
      <strong>(iii)</strong>
      <img src="/videos/object-from-site.gif" alt="Dasher showing object/objective branch with larger likely targets" width="507" height="447" loading="lazy" />
      <p>Fine-grained steering among probable words</p>
    </div>
  </div>
</div>

## Adaptive Learning

Dasher can be trained on examples of any writing style, and it learns all the time,
picking up your personal turns of phrase. This means the more you use Dasher, the better
it gets at predicting what you want to write.

## Language Models

The probability model that determines the size of each letter can be:

- **Static** - based on general text corpora
- **Adaptive** - learning from your personal writing style
- **Domain-specific** - trained on specialized vocabulary

<div class="example-box">
  <h2>Example: Writing "the quick brown fox"</h2>
  <p>
    In English, after writing "th", the letter "e" is much more probable than "x".
    Therefore in Dasher, the box for "e" will be much larger than the box for "x",
    making it easier to steer toward.
  </p>
</div>

<div class="cta-section">
  <h2>See It In Action</h2>
  <p>
    The best way to understand Dasher is to see it in action.
  </p>
  <p class="next-page-link">
    <a href="/docs/concepts/how-dasher-works/page-3/" class="btn-primary">Continue to Page 3: Demonstrations →</a>
  </p>
</div>
