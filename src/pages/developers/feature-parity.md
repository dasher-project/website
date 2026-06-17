---
title: Feature parity - Dasher Developers
description: How the cross-platform feature matrix works and how to keep it up to date.
layout: ../../layouts/DocsLayout.astro
---

# Feature parity

The [feature status matrix](/status/) is the **behavioural single source of
truth** for Dasher v6: what each platform supports, today. It exists to keep the
frontends from drifting apart.

## Where it lives

- **Source:** [`src/data/feature-status.json`](https://github.com/dasher-project/website/blob/astro-build/src/data/feature-status.json) in this repo.
- **Schema (reference):** [`schema/feature-status.schema.json`](https://github.com/dasher-project/website/blob/astro-build/schema/feature-status.schema.json).
- **Rendered:** the public [/status/](/status/) page (and used by developers to spot gaps).

The JSON is validated on every PR by
[`scripts/validate-feature-status.mjs`](https://github.com/dasher-project/website/blob/astro-build/scripts/validate-feature-status.mjs).
A malformed entry **fails CI**.

## Status values

| Status          | Meaning                                                         |
| :-------------- | :-------------------------------------------------------------- |
| `shipped`       | Implemented and released                                        |
| `beta`          | Available but in beta / behind a flag                           |
| `planned`       | Accepted, on the backlog (link the tracking issue)              |
| `not-supported` | Not available — usually a platform limitation (give a `reason`) |
| `n/a`           | Not applicable on this platform                                 |

## v5 baseline

Each feature carries an optional `v5` object that records its status in the
last stable release (Dasher 5.x). The public [status page](/status/) has a
**toggle** — "Dasher v6" (default) vs "Dasher v5 baseline" — so anyone can
compare what changed between generations at a glance.

The v5 data is grounded in the legacy
[dasher-project/dasher](https://github.com/dasher-project/dasher) repository
and the 5.0 beta release notes. Android is omitted because there is no v6
Android frontend yet (the legacy Android project lives separately at
[acl33/AndroidDasher](https://github.com/acl33/AndroidDasher)).

## How to update it

When your frontend PR changes a capability that users see on other platforms:

1. Open the **same PR** (or a follow-up PR) against this `website` repo.
2. Edit `src/data/feature-status.json` — find the feature, update the platform entry:
   ```json
   "platforms": {
     "apple": { "status": "shipped", "version": "1.2" },
     "windows": { "status": "planned", "issue": "dasher-project/Dasher-Windows#42" },
     "gtk": { "status": "not-supported", "reason": "No hardware API" },
     "web": { "status": "planned" }
   }
   ```
3. If the capability is new, add a feature under the right `category`, with an `id` (kebab-case), `title`, `dasher_core_dep`, and a status per platform.
4. Update `meta.last_updated`.
5. Run `npm run validate:status` locally (it runs automatically in CI).

Cross-repo follow-up PRs are normal and expected — they give a second person a
chance to sanity-check the parity claim.

## The PR-template checkbox

Every frontend repo's PR template asks:

> ☑ This changes a capability that users see on other platforms → I have opened/updated `website/src/data/feature-status.json` (PR: #...)

This is the mechanism that keeps the matrix alive rather than letting it rot.
