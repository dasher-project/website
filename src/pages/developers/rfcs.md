---
title: RFCs - Dasher Developers
description: When and how to write a Request for Comments before changing cross-platform UX or hardware interaction.
layout: ../../layouts/DocsLayout.astro
---

# RFCs (Requests for Comments)

For substantial changes — especially anything that touches **UX or hardware
interaction across platforms** — write a short design doc and get peer review
**before** building. This is how the frontends stay aligned instead of drifting.

The process is defined in the
[governance repo → Decision making](https://github.com/dasher-project/governance#decision-making),
modelled on [Rust's RFC model](https://github.com/rust-lang/rfcs).

## When you need an RFC

You need one when a change is **substantial** — architectural, product, or
process-level. In practice, for Dasher that means:

- A **new UX or hardware interaction** (e.g. a new way to use an analogue joystick for pacing).
- A change to the **C API surface** that frontends depend on.
- Anything that should look/behave consistently on **multiple platforms**.

If you're unsure, open a minimal RFC first and ask.

## How to write one

1. Discuss the idea on Slack / an issue first.
2. Copy the template: [`governance/rfcs/0000-template.md`](https://github.com/dasher-project/governance/blob/main/rfcs/0000-template.md) → `rfcs/NNNN-short-name.md` (next free number).
3. Fill in: **Summary · Motivation · Detailed design · Drawbacks · Alternatives · Prior art · Unresolved questions**.
4. For UX/hardware interactions, describe the approach on **each** affected platform — the math/flow, the DasherCore callback used, and the UI surface — so maintainers on other platforms can align.
5. Open a PR; discussion happens on the thread. After **7 days**, maintainers + stewards reach consensus.

## Where RFCs live

- **Cross-cutting RFCs** → the [`governance/rfcs/`](https://github.com/dasher-project/governance/tree/main/rfcs) directory.
- **Single-repo RFCs** → open in the most relevant repo (see the governance README).

The live index of all RFCs is in
[`governance/rfcs/README.md`](https://github.com/dasher-project/governance/blob/main/rfcs/README.md).
