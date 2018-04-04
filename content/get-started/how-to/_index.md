---
title: "3. How to use"
description: "Download it. Install it. Run it. Full details below"
weight: 800
---

Dasher is a zooming interface. You point where you want to go, and the display zooms in wherever you point. The world into which you are zooming is painted with letters, so that any point you zoom in on corresponds to a piece of text. The more you zoom in, the longer the piece of text you have written. You choose what you write by choosing where to zoom.

![Demo](/demo.gif) In the example, the user is writing "Hello,_how_are_you?".

To make the interface efficient, we use the predictions of a language model to determine how much of the world is devoted to each piece of text. Probable pieces of text are given more space, so they are quick and easy to select. Improbable pieces of text (for example, text with spelling mistakes) are given less space, so they are harder to write. The language model learns all the time: if you use a novel word once, it is easier to write next time.

A big advantage of Dasher over other predictive text-entry interfaces that offer word-completions to the user is that it is mode-free: the user does not need to switch from a writing mode to an "accept-model-predictions" mode.

Another advantage is that it is easy to train the model on any writing style: simply load up an example file, then write away!