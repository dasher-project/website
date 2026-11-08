---
title: NLnet funds Dasher v6 - Dasher Blog
description: The NLnet Foundation is funding Dasher v6 through the NGI0 Commons Fund - turning our volunteer UX research programme into shipped features, with dedicated eye-gaze work and a path out of beta.
layout: ../../../layouts/BaseLayout.astro
---

<div class="container">
<section class="section">

# NLnet funds Dasher v6 &mdash; our UX research becomes reality

<div class="blog-post">
<div class="blog-header">
<div class="blog-meta">
<time datetime="2026-11-08">November 8, 2026</time>
<span class="blog-tag">Funding</span>
</div>
</div>

<div class="blog-content">

We have some really great news: **the NLnet Foundation is funding Dasher v6**
through the [NGI0 Commons Fund](https://nlnet.nl/project/Dasher-v6/). The grant
started in October 2026 and will support a year of focused work across the
whole project &mdash; and, just as importantly, it turns work that has already
been quietly happening into something we can actually ship.

## First, some work we haven't told you about

For a while now we've been running a volunteer **UX research programme** &mdash;
and this is the first time we've written about it publicly. **Eleven UX
volunteers from around the world** have been working through three research
streams, each tackling one of the biggest barriers to using Dasher:

- **Settings.** Dasher has grown to over a hundred parameters, and v5's dense
  settings surface hides its power behind tabs nobody can navigate. The stream
  has been working out what people actually need first &mdash; the groundwork
  for progressive disclosure in
  [RFC 0006](https://github.com/dasher-project/governance/blob/main/rfcs/0006-settings-ia.md),
  where the tier assignments are being validated with real users rather than
  guessed at by developers.
- **Onboarding.** Dasher is, as we say candidly in
  [RFC 0004](https://github.com/dasher-project/governance/blob/main/rfcs/0004-onboarding.md),
  "a problematic interface to understand without training". This stream is
  researching the first-run experience: what a brand-new user sees, what a
  novice needs to learn first, and how we get someone steering and writing in
  minutes rather than giving up in confusion.
- **Learning mode.** Beyond the first run, new users need structured practice
  before continuous-gesture input feels natural. This stream is designing a
  proper **learning mode** to replace the legacy game mode &mdash; graduated
  exercises that teach zoom dynamics, pointer control and word-building step
  by step, with progression that adapts as the user becomes proficient.

These volunteers have brought perspectives from different countries, different
professions and &mdash; crucially &mdash; different relationships to assistive
technology. Their findings feed straight into our
[design guide](https://github.com/dasher-project/dasher-design-guide) and the
governance RFCs. Our thanks to every one of them: this programme exists
because they showed up.

## What the funding makes possible

Until now the research streams have produced findings and recommendations.
The NLnet grant funds the engineering to turn them into Dasher:

- **The UX streams become reality.** Research findings become wireframes, the
  wireframes become a first-run flow and a learning mode (prototyped first in
  the browser, where iteration is fastest), and then ship consistently across
  every platform.
- **Targeted eye-gaze support.** The community has asked &mdash; loudly and
  reasonably &mdash; for eye-gaze to work _really_ well. We have a dedicated
  work stream to evaluate the whole eye-gaze path end to end: pointer
  smoothing, zoom dynamics under continuous gaze, dwell behaviour and latency,
  plus a calibration and profile workflow so your gaze setup survives restarts
  and moves between machines. This builds on the canonical input model in
  [RFC 0010](https://github.com/dasher-project/governance/blob/main/rfcs/0010-input-access-methods.md).
- **Room for your requests too.** Eye-gaze is the headline, but the plan also
  covers switch access profiles, prediction and emoji support, voice output,
  cross-platform parity and documentation &mdash; and we hope to take other
  requests from the community as the work progresses. Tell us what matters to
  you.
- **Out of beta.** All of this converges on the same destination: the v6
  preview betas graduate to proper, stable releases, with a consistent
  versioning scheme, simultaneous tagged releases across platforms, and the
  iOS and Android stability issues fixed and verified.

## A lot to do

We want to be honest: it's a long list, and a year goes quickly. Everything
happens in public &mdash; the task-by-task plan lives in our
[governance repository](https://github.com/dasher-project/governance), designs
are argued through in the
[RFCs](https://github.com/dasher-project/governance/tree/main/rfcs), and
exactly where every feature stands is always visible on the
[feature status matrix](/status/).

You can help right now: [join the beta](https://testflight.apple.com/join/bVSF1KHu)
on iPhone, iPad or Apple Vision Pro (Windows, macOS and Android builds are
[here](https://github.com/dasher-project#readme)), put it through its paces,
and tell us what breaks. And if you have experience of Dasher as a user,
family member or professional &mdash; or you'd like to help with the user
research studies &mdash; we would love to hear from you at
[willwade@gmail.com](mailto:willwade@gmail.com).

## Thank you

This project was funded through the [NGI0 Commons Fund](https://nlnet.nl/commonsfund/),
a fund established by [NLnet](https://nlnet.nl) with financial support from the
European Commission's [Next Generation Internet](https://ngi.eu) programme.
Learn more about the project on the
[NLnet project page](https://nlnet.nl/project/Dasher-v6/).

&mdash; Will

</div>

<div class="blog-footer">
<a href="/blog/" class="btn-secondary">&larr; Back to Blog</a>
</div>
</div>

</section>
</div>
