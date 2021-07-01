---
date: 2020-06-15
title: "Developer Update June"
linkTitle: "Developer Update June"
description: "This is the first in a series of developer updates that will be published a few times a month to keep those interested informed of Dasher progress."
author: Adam Spickard
---

Hello Dasher Fanatics!

This is the first in a series of developer updates that will be published a
few times a month to keep those interested informed of Dasher progress.
I will mostly attempt to keep the information targeted and concise.

## Repository Restructure nearly Complete

A special shout out to Jim Hawkins, who has implemented the pure Javascript
version of Dasher that all of this work is now based upon. In order to keep
the pure JS version clean, Jim took the time to abstract out platform specific
components of the application. The new structure consists of:

- [Pure Javascript Dasher Implementation](https://github.com/dasher-project/redash)
- [Captive Web View for Mobile Keyboards](https://github.com/dasher-project/dasher-captivewebview)
- [Alternative Switch Controls](https://github.com/dasher-project/alternative-switch-controls-for-dasher)
- [Desktop Containers and Packages](https://github.com/dasher-project/dasher-electron)

## Repository Rename(s) Incoming!

In order to comply with trademark issues, we will be changing the name of the
https://github.com/dasher-project/redash repository to
https://github.com/dasher-project/dasher-web
In addition, we will be renaming the "master" branch to "main". If your project
depends on this repository and you are worried about the timing of this change,
please let us know sooner rather than later via the contact information below.

## Mozolm Proof of Concept

The Mozolm integration proof of concept has been completed and marks a big
move forward in allowing for more complex language models to be utilized in
a variety of scenarios.

## NLNet Milestone Series 1 Complete

Developers completed work on the first series of features suppored by NLNet.
This has included migrating documentation to the Github Wiki, drafting a
user experience survey, and creating a Dasher desktop proof of concept.
If you are a user or trainer of Dasher, please help us make it better by taking
the appropriate survey linked below!

- [Wiki](https://github.com/dasher-project/redash/wiki/Onboarding-for-Dasher-Development)
- [Survey](https://docs.google.com/forms/d/18cHTNHX-WL1ZLn18KlLMip4EtnAHOeiPcS8mNYuYQDs/)
- [Trainer Survey](https://docs.google.com/forms/d/18cHTNHX-WL1ZLn18KlLMip4EtnAHOeiPcS8mNYuYQDs/)
- [Desktop proof of concept](https://github.com/dasher-project/dasher-electron)

Thanks for reading!

Interested in supporting us? We'd love to find a way for you to contribute!
If there is anything I missed, feel free to message me directly and I can amend
this newsletter or include it in the next one.
Adam Spickard (adam@technoke.com)
