---
title: Community Dasher Projects - Dasher Blog
description: A round-up of community-built Dasher implementations and experiments, from a React word-level writer to a musical Dasher variant and a clean Java reimplementation.
layout: ../../../layouts/BaseLayout.astro
---

<div class="container">
<section class="section">

# Community Dasher Projects

<div class="blog-post">
<div class="blog-header">
<div class="blog-meta">
<time datetime="2026-06-17">June 17, 2026</time>
<span class="blog-tag">Community</span>
</div>
</div>

<div class="blog-content">

One of the most exciting things about Dasher is how it inspires people to build their own variants, ports, and experiments. Over the years we've seen implementations in languages from C++ to JavaScript, aimed at purposes from assistive technology to live music composition. Here's a round-up of notable community projects we know about &mdash; if you've built something with Dasher, [let us know](https://github.com/dasher-project)!

## Dasher-JS (React) &mdash; Jamie Brew

Jamie Brew, creator of the comedy-predictive-text startup [Botnik](https://botnik.co), has built a [React implementation of Dasher](https://github.com/jbrew/dasher-js) designed for word-level constrained writing. Where classic Dasher zooms through individual characters, Dasher-JS lets you navigate through whole words &mdash; turning the interface into a collaborative writing tool where the language model suggests where your sentence could go next.

Jamie describes the project as emerging from a long-standing interest in predictive text as a "constrained writing game," and credits Claude Code with making the development pace much faster than before.

**Try it:** [Live demo](https://frigital.onrender.com/tools/dasher/) · [Source code](https://github.com/jbrew/dasher-js)

## Jasher &mdash; a musical Dasher &mdash; Jossy Sayir

Jossy Sayir, Associate Teaching Professor at the University of Cambridge and a longtime member of the Dasher research community, created **Jasher** &mdash; a variant of Dasher for composing and generating live music. Instead of navigating through letters and words, you zoom through musical notes and phrases, creating melodies in real time.

Jasher demonstrates how the core Dasher concept &mdash; navigating a probabilistic tree by zooming &mdash; generalises far beyond text entry.

**Try it:** [Jasher demo](https://js851.net/jd/jasher.html) · [More of Jossy's Dasher experiments](https://js851.net/jd/)

## DasherJava &mdash; Jan Schulte

Jan Schulte is re-implementing Dasher in Java as part of his master's thesis, with a focus on clean, modern, well-documented code rather than a straight port of the C++ original. At around 1,300 lines of code, the implementation includes a working PPM language model, dynamic node creation and deletion in the Dasher tree, and a Java Swing GUI.

Jan has also published a [simplified standalone version of the PPM language model](https://github.com/janschu99/SimpleDasherLanguageModel) for testing and comparison, along with [benchmark results](https://github.com/janschu99/SimpleDasherLanguageModel/blob/main/DasherLanguageModels.png) showing how the various Dasher language models compare.

The code is not yet fully public while licensing is sorted out, but a snapshot is available via GitFront, and Jan plans to explore an Android port.

**Code snapshot:** [DasherJava on GitFront](https://gitfront.io/r/janschu99/JR2GxTjT1wJz/DasherJava/) · [Language model comparison](https://github.com/janschu99/SimpleDasherLanguageModel) · [Demo video](https://drive.google.com/file/d/1TVMmuVws-4RJzOtfv0ejaG6c1V9-A2La/view)

## Dasher Mobile (Android) &mdash; Ján Murin

We previously [covered this project](/blog/dasher-mobile-android/) in detail. Ján Murin built a native Android implementation of Dasher as his bachelor's thesis at Masaryk University, with KenLM language model integration and a focus on Slovak language support.

> **Note:** Dasher Mobile is a community project, separate from the official
> [Dasher-Android](https://github.com/dasher-project/Dasher-Android) frontend. Both are built on
> DasherCore but take different architectural approaches.

**Source:** [Dasher-Mobile on GitHub](https://github.com/janmurin2/Dasher-Mobile) · [Download APK](https://github.com/janmurin2/Dasher-Mobile/releases/tag/v1.0)

## Build Your Own

All of these projects demonstrate how the Dasher concept &mdash; zooming through a probabilistic prediction tree &mdash; can be adapted to new platforms, languages, and even entirely different domains like music. If you're interested in building your own, check out:

- [DasherCore on GitHub](https://github.com/dasher-project/DasherCore) &mdash; the shared engine that powers the official v6 frontends
- [Developer handbook](/developers/) &mdash; architecture, build guides, and the C API reference
- [Feature parity matrix](/status/) &mdash; see what each platform supports today

We'd love to hear what you're building. Share your projects on [GitHub Discussions](https://github.com/dasher-project)!

</div>

<div class="blog-footer">
<a href="/blog/" class="btn-secondary">&larr; Back to Blog</a>
</div>
</div>

</section>
</div>
