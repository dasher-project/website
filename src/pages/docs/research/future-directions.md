---
title: Future Directions - Dasher Research
description: Research roadmap and future directions for Dasher development
layout: ../../../layouts/DocsLayout.astro
---

# Future Directions

The Dasher project continues to evolve with active research and development. This page outlines current research directions and future plans for the project.

## Current Development: Dasher v6

Dasher v6 represents a complete rewrite of the Dasher codebase with modern software architecture. The main development repositories are:

- **[dasher-core](https://github.com/dasher-project/dasher-core)** - Core engine and algorithms
- **[dasher-gtk](https://github.com/dasher-project/dasher-gtk)** - GTK user interface

> **Note:** Dasher v6 is under active development but is not yet ready for end users. For production use, please download [Dasher 5.0](/downloads/).

### Key Improvements in v6

- Modern, cross-platform codebase
- Improved performance on low-power devices
- Better language model support
- Enhanced accessibility features
- Cleaner architecture for easier maintenance

## Research Directions

### Hybrid Systems

#### Speech-Dasher

**Status:** Research prototype

A hybrid system combining speech recognition with Dasher. Speak naturally into an imperfect speech recognizer, and watch as its inferences are displayed as predictions. Where the recognizer is uncertain, use Dasher to steer into the correct sentence.

This approach is much easier than having to correct errors using voice commands alone. Developed by Keith Vertanen (2003-2007).

#### Translation-Dasher

**Status:** Concept stage

A hybrid automatic-translation-Dasher system for cleaning up machine translations. Uses the output of a translator to define a language model, allowing an expert to quickly correct translation errors within Dasher.

### Advanced Input Methods

#### Breath Control

**Status:** Implemented (v3+)

Dasher can be controlled by breathing using a breath sensor. This provides an additional input option for users with very limited mobility.

#### Button Dasher

**Status:** Implemented (v4+)

For users who can only use a single switch, Dasher offers button/switch modes. The interface scans through options and the user selects by pressing the button.

#### Tilt Sensors

**Status:** Research prototype

Control Dasher using tilt sensors, which could be attached to a headband, wrist, or other body part.

#### Two-Dimensional Dasher (Peano Dasher)

**Status:** Research prototype

Fully two-dimensional variants of Dasher that can use both dimensions as information sources, rather than having one dimension determined by a language model. Named after the Peano curve space-filling algorithm.

### Platform Development

#### Wearable Computers

**Status:** Ongoing research

Dasher has been tested on wearable computers including the Xybernaut platform. The zooming interface is particularly well-suited to small, head-mounted displays.

#### Mobile Platforms

**Status:** Android available, iOS in development

Dasher is available for Android. iOS development is ongoing through community contributions and partnerships with accessibility organizations.

### Language and Accessibility

#### Expanded Language Support

**Status:** Ongoing

Adding support for more languages, particularly underrepresented languages and indigenous languages. The alphabet system makes it straightforward to add new languages.

#### Improved Language Models

**Status:** Ongoing research

Research into better language models including:

- Domain-specific models for specialized vocabulary
- Personalized models that adapt to individual writing styles
- Context-aware models for different applications

#### Self-Tuning Eyetracking

**Status:** Research prototype (Phil Cowans, Piotr Zielinski)

Automatic calibration and tuning of eyetracking systems to work seamlessly with Dasher without requiring manual calibration.

## Community Contributions

Dasher welcomes contributions in all these areas. If you're interested in working on:

- **Core development** - Join us on GitHub: [dasher-core](https://github.com/dasher-project/dasher-core), [dasher-gtk](https://github.com/dasher-project/dasher-gtk)
- **Language support** - Create alphabet files and training texts
- **Accessibility** - Test with different input devices and user groups
- **Research** - Conduct experiments and publish results
- **Documentation** - Improve guides and tutorials

See our [community page](/community/) for more ways to contribute.

## Related Projects

The Dasher project has inspired and is related to several other research projects:

### Basher

A mouse-driven command-line interface; a one-handed, keyboardless alternative to traditional shells like bash, tcsh, or csh.

### Coraler

A Dasher-like hypertext navigation environment for making websites more disabled-friendly.

### Skipper

Full access to Linux and the Internet for people with severe physical disabilities, being integrated with Dasher.

## Academic Collaboration

We collaborate with researchers worldwide. If you're interested in:

- **Using Dasher in research** - We're happy to provide guidance and support
- **Publishing Dasher-related research** - Please cite our [publications](/docs/research/publications/)
- **Joint research projects** - Contact us through [GitHub Discussions](https://github.com/dasher-project/dasher/discussions)

## Funding and Support

The Dasher project has been supported by:

- The Gatsby Charitable Foundation
- The European Commission (AEGIS project)
- The ACE Centre
- Various accessibility organizations worldwide

## Get Involved

The future of Dasher depends on community involvement. Whether you're a:

- **Developer** - Help build v6
- **Researcher** - Contribute new ideas and experiments
- **User** - Test and provide feedback
- **Accessibility specialist** - Help improve usability
- **Translator** - Add language support

...we welcome your contributions!

<div class="cta-box">
  <h2>Ready to contribute?</h2>
  <p>
    Join our <a href="https://matrix.to/#/#dasher:matrix.org">Matrix chat room</a> or check out
    <a href="https://github.com/dasher-project/dasher-core">dasher-core</a> and
    <a href="https://github.com/dasher-project/dasher-gtk">dasher-gtk</a> on GitHub.
  </p>
  <a href="/community/" class="btn-primary">Join the Community</a>
</div>
