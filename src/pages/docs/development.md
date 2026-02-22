---
title: Development Guide - Dasher
description: Comprehensive guide for contributing to Dasher development
layout: ../../layouts/DocsLayout.astro
---

# Development Guide

Welcome to the Dasher development guide! This document provides comprehensive information for developers who want to contribute to Dasher or build on top of it.

## About This Site

**dasher.at** is the official website for Dasher as an Alternative and Augmentative Communication (AAC) tool. This site focuses on:

- Information for end users (people who use Dasher for communication)
- Accessibility features and input methods
- Download links for stable releases
- Documentation for users and clinicians

**Note:** This site is **not** the main development portal for Dasher. For development, see the repositories below.

## Main Development Repositories

### Active Development (Not Production-Ready)

These repositories contain the latest development work but are **not yet ready for end users**:

- **[dasher-core](https://github.com/dasher-project/dasher-core)** - Core engine, algorithms, and platform-independent code
- **[dasher-gtk](https://github.com/dasher-project/dasher-gtk)** - GTK-based user interface

⚠️ **Warning:** The v6 code in these repositories is under active development. It may be unstable, incomplete, and unsuitable for daily use. For production use, download [Dasher 5.0](/downloads/).

### Stable Release (v5)

The stable version 5 release is maintained separately:

- **[dasher-project/dasher](https://github.com/dasher-project/dasher)** - Version 5.x releases (stable)

## Getting Started as a Developer

### Prerequisites

- C++ compiler (GCC, Clang, or MSVC)
- CMake build system
- Git for version control
- Platform-specific SDKs (GTK for Linux/macOS, Visual Studio for Windows)

### Building from Source

#### Clone the Repositories

```bash
# Clone core engine
git clone https://github.com/dasher-project/dasher-core.git

# Clone GTK interface
git clone https://github.com/dasher-project/dasher-gtk.git
```

#### Build on Linux

```bash
cd dasher-core
mkdir build && cd build
cmake ..
make -j$(nproc)
sudo make install
```

#### Build on Windows

1. Install Visual Studio with C++ support
2. Install CMake
3. Install GTK for Windows
4. Use CMake to generate Visual Studio project files
5. Build in Visual Studio

#### Build on macOS

```bash
# Install dependencies
brew install gtk+3 cmake pkg-config

# Build
cd dasher-core
mkdir build && cd build
cmake ..
make -j$(sysctl -n hw.ncpu)
```

## Architecture Overview

### Core Components

```
dasher-core/              # Platform-independent engine
├── src/
│   ├── DasherCore/       # Main Dasher algorithm
│   ├── LanguageModelling/ # Language models (PPM, etc.)
│   ├── AlphIO/           # Alphabet file parsing
│   └── Training/         # Training text handling
└── bindings/             # Language bindings (Python, etc.)

dasher-gtk/               # GTK user interface
├── src/
│   ├── Gtk2/            # GTK2-specific code
│   └── DasherControl.h   # Controller connecting UI to core
```

### Key Classes and Interfaces

#### DasherCore

The main engine that coordinates all components:

```cpp
namespace Dasher {
  class CDasherCore {
  public:
    void TapDown(int x, int y);           // Handle pointer down
    void TapUp(int x, int y, bool across); // Handle pointer up
    void NewFrame();                       // Advance one frame
    void SetInfo(CDasherScreen* screen);   // Set output display
  };
}
```

#### CDasherAlphabet

Represents the character set and ordering:

```cpp
class CDasherAlphabet {
  public:
    const std::string& GetText() const;           // Get text for symbol
    int GetNumberSymbols() const;                 // Count symbols
    symbol GetLargestSymbolForDisplay(symbol s);  // Display character
};
```

#### CDasherLanguageModel

Language model interface for predictions:

```cpp
class CDasherLanguageModel {
  public:
    virtual void GetProbs(CLanguageModelContext* context, std::vector<unsigned int>& probs) = 0;
    virtual CDasherNode* GetRoot() = 0;
    virtual CDasherNode* CreateChild(CDasherNode* parent, int symbol) = 0;
};
```

## Platform Interface

To port Dasher to a new platform, you need to implement:

### CDasherScreen

Draws the Dasher display:

```cpp
class CDasherScreen {
  public:
    virtual void DrawRectangle(int x1, int y1, int x2, int y2, int Color) = 0;
    virtual void DrawCircle(int x, int y, int r, int Color) = 0;
    virtual void Polygon(std::vector<std::pair<int,int>>& points, int Color) = 0;
    virtual void SendMarker(int iMarker) = 0;
    virtual void Display() = 0;
};
```

### CDasherInput

Receives pointer input:

```cpp
class CDasherInput {
  public:
    virtual void GetCoordinates(int& x, int& y) = 0;
    virtual void SetOffset(int x, int y) = 0;
};
```

### CDasherTimer

Controls frame timing:

```cpp
class CDasherTimer {
  public:
    virtual void Start(int ms) = 0;
    virtual void Stop() = 0;
    virtual void SetTime(int ms) = 0;
};
```

## Adding New Languages

### 1. Create Alphabet File

Create an XML file defining the alphabet (see [Creating Custom Alphabets](/docs/languages/creating-alphabets/)):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<alphabet name="MyLanguage">
  <group label="Lowercase">
    <char d="a" />
    <char d="b" />
    <!-- more characters... -->
  </group>
  <group label="Uppercase">
    <char d="A" />
    <char d="B" />
    <!-- more characters... -->
  </group>
  <group label="Punctuation">
    <char d=" " />
    <char d="." />
    <char d="," />
  </group>
</alphabet>
```

### 2. Provide Training Text

Collect 300K+ characters of natural text in the target language. The text should be:

- Representative of typical usage
- Properly encoded (UTF-8)
- From public domain or appropriately licensed sources

Good sources include:

- [Project Gutenberg](https://www.gutenberg.org/) (public domain books)
- Wikipedia dumps
- Government documents
- News articles (check copyright)

### 3. Test the Alphabet

1. Place the alphabet file in the alphabets directory
2. Place training text in the training directory
3. Restart Dasher
4. Select your alphabet from Options → Alphabet
5. Test entering text

## Creating Custom Language Models

For advanced use, you can create custom language models:

### PPM Language Model

Dasher's default is a PPM (Prediction by Partial Matching) model. To customize:

1. Understand the PPM algorithm context length and escape methods
2. Modify `CPPMLanguageModel` in `dasher-core`
3. Rebuild and test

### Integration with External Models

You can integrate external language models:

```cpp
class CExternalLanguageModel : public CDasherLanguageModel {
  public:
    // Call your external model here
    void GetProbs(CLanguageModelContext* context, std::vector<unsigned int>& probs) override {
      // Your prediction logic
      auto predictions = external_model->predict(context->GetHistory());
      // Convert to Dasher probabilities
    }
};
```

## App Integration

### Linux (Direct Mode)

Dasher can send text directly to applications using AT-SPI:

```cpp
// Set up direct mode
dasherInterface->SetControlMode(CONTROL_MODE_DIRECT);
```

### Windows (SendInput)

Uses Windows SendInput API:

```cpp
// Configure Windows direct mode
dasherInterface->SetControlMode(CONTROL_MODE_DIRECT);
```

### macOS (Accessibility API)

Uses macOS accessibility features for direct text entry.

## Testing

### Unit Tests

Dasher has unit tests for core components:

```bash
cd dasher-core/build
ctest
```

### Manual Testing Checklist

- [ ] Alphabet displays correctly
- [ ] Characters appear in expected order
- [ ] Training text improves predictions
- [ ] Input device works smoothly
- [ ] Direct mode enters text correctly
- [ ] Performance is acceptable

## Debugging

### Enable Debug Logging

```cpp
// In your code
#ifdef DEBUG
  std::cerr << "Debug info: " << variable << std::endl;
#endif
```

### Common Issues

**Problem:** Dasher crashes on startup

**Solution:** Check that alphabet XML files are well-formed and UTF-8 encoded.

**Problem:** Predictions seem wrong

**Solution:** Verify training text is loaded and matches the alphabet.

**Problem:** Input is laggy

**Solution:** Reduce frame rate or optimize language model context.

## Contributing Code

### Code Style

- Follow existing formatting (use clang-format if available)
- Use descriptive variable names
- Add comments for non-obvious logic
- Update documentation for API changes

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit (`git commit -m "Add my feature"`)
6. Push (`git push origin feature/my-feature`)
7. Create a pull request on GitHub

### Pull Request Guidelines

- Clear description of changes
- Reference any related issues
- Include testing instructions
- Update documentation if needed

## Mailing Lists and Communication

### For Users

- **Matrix Chat:** [#dasher:matrix.org](https://matrix.to/#/#dasher:matrix.org)
- **GitHub Discussions:** [discussions](https://github.com/dasher-project/dasher/discussions)

### For Developers

- **GitHub Issues:** [issues](https://github.com/dasher-project/dasher-core/issues)
- **Pull Requests:** [PRs](https://github.com/dasher-project/dasher-core/pulls)

### Historical Note

The original Dasher Yahoo Group mailing list is no longer active. Please use GitHub for all discussions.

## License

Dasher is licensed under the GNU General Public License (GPL-3.0). By contributing, you agree that your contributions will be licensed under the GPL.

## Resources

### Documentation

- [User Documentation](/docs/)
- [Research Publications](/docs/research/publications/)
- [Alphabet Creation Guide](/docs/languages/creating-alphabets/)

### External Resources

- [Unicode Charts](https://www.unicode.org/charts/) - Character reference
- [Alan Wood's Unicode Fonts](https://www.alanwood.net/unicode/fonts.html) - Font information
- [Project Gutenberg](https://www.gutenberg.org/) - Training text source

## Need Help?

If you need help with development:

1. Check existing [GitHub Issues](https://github.com/dasher-project/dasher-core/issues)
2. Search [Discussions](https://github.com/dasher-project/dasher/discussions)
3. Ask in [Matrix chat](https://matrix.to/#/#dasher:matrix.org)
4. Create a new issue with your question

<div class="cta-box">
  <h2>Ready to contribute?</h2>
  <p>
    Fork <a href="https://github.com/dasher-project/dasher-core">dasher-core</a> or
    <a href="https://github.com/dasher-project/dasher-gtk">dasher-gtk</a> and start contributing!
  </p>
</div>
