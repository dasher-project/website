---
title: Dasher v6 Preview Beta for Windows & Apple - Dasher Blog
description: The Dasher v6 preview beta is now available for Windows, iOS, macOS and visionOS. Here's how to get it, and how to send us feedback.
layout: ../../../layouts/BaseLayout.astro
---

<div class="container">
<section class="section">

# Dasher v6 Preview Beta: native apps for Windows &amp; Apple

<div class="blog-post">
<div class="blog-header">
<div class="blog-meta">
<time datetime="2026-06-18">June 18, 2026</time>
<span class="blog-tag">Beta</span>
</div>
</div>

<div class="blog-content">

We're delighted to open up the **Dasher v6 preview beta**. For the first time, the
completely rewritten v6 engine &mdash; one shared [DasherCore](https://github.com/dasher-project)
driving many native frontends &mdash; is in your hands across Windows and the Apple
platforms. A first-class **Linux/GTK** build is on its way too.

This is a _preview beta_. It is real, usable Dasher, but you'll find rough edges.
We want you to break it and tell us &mdash; that's the whole point of opening this up now.

## Get the apps

### Apple &mdash; iOS, macOS &amp; visionOS

The Apple apps (iPhone, iPad, Mac, and Apple Vision Pro) are distributed through
TestFlight:

- **iPhone &amp; iPad (iOS):** [join the iOS TestFlight](https://testflight.apple.com/join/wJfmTtHT)
- **macOS:** [join the macOS TestFlight](https://testflight.apple.com/join/gUwkzEEn)

visionOS is part of the same Apple beta programme &mdash; on Vision Pro, Dasher drives
the pointer from your eyes and from a native **pinch + hand position** gesture, with a
dwell indicator for selection. (See the [feature status matrix](/status/) for the full
breakdown of what each platform supports.)

### Windows

The Windows build is built on [Avalonia](https://avaloniaui.net/) and ships as a
release on GitHub:

- **Windows:** [download the latest release](https://github.com/dasher-project/Dasher-Windows/releases/latest)

### Linux / GTK

Linux isn't far behind. The GTK frontend is actively under development and we expect a
preview build soon &mdash; watch the [Dasher-GTK repository](https://github.com/dasher-project)
for updates.

## What's in this beta

Because every frontend shares a single DasherCore engine, the experience &mdash; the
zooming interface, the PPM prediction, the 600+ alphabets and 300+ languages, the
colour palettes and switch access &mdash; is consistent wherever you run it. Highlights
in this preview:

- **Continuous, click-to-zoom, dwell and switch** input methods
- **Eye-gaze** works wherever the platform exposes a pointer (and natively on visionOS)
- **Game / training mode** with custom text on the Apple apps
- **Control mode** (edit text without leaving Dasher) on Windows
- **Text-to-speech** output on Apple and Windows
- **Privacy-preserving, opt-in analytics** (no text is ever collected &mdash; see
  [RFC 0001](https://github.com/dasher-project/governance/blob/main/rfcs/0001-analytics.md))

## We need your feedback

This is the most important part. A preview beta is only useful if it reaches the people
it's built for, and if you tell us what works and what doesn't.

**For now, the simplest way is to email me directly:**
[willwade@gmail.com](mailto:willwade@gmail.com).

We know that's a blunt instrument, and we're doing something better. We're putting
together a **structured user-testing programme** to gather detailed, methodical
feedback &mdash; the plans for that are being worked through in our
[governance RFCs](https://github.com/dasher-project/governance/tree/main/rfcs),
alongside the first-run onboarding work ([RFC 0004](https://github.com/dasher-project/governance/blob/main/rfcs/0004-onboarding.md)).
Until that lands, please don't hold back &mdash; email with bug reports, feature wishes,
and stories of how you're using Dasher.

A couple of things that are especially helpful:

- **What device and input method are you using?** (mouse, trackpad, eye-tracker, switch,
  hand tracking on Vision Pro&hellip;)
- **What's your use case?** Knowing how Dasher fits into your day helps us prioritise.
- **Where does it fall over?** Crashes, confusing settings, things that worked in v5
  but don't yet in v6 &mdash; all of it.

## What's next

After this preview, our focus is closing the gap to a stable release: finishing the
GTK/Linux build, completing socket input for eye-trackers across platforms, and
polishing first-run onboarding. You can follow exactly where every feature stands on the
[live feature status matrix](/status/), which is our single source of truth.

Thank you for trying Dasher v6. It exists because of [an extraordinary community of
contributors, researchers and users built up over more than twenty-five years](/credits/) &mdash;
and the feedback you send now is how the next twenty-five get started.

&mdash; Will

</div>

<div class="blog-footer">
<a href="/blog/" class="btn-secondary">&larr; Back to Blog</a>
</div>
</div>

</section>
</div>
