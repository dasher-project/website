---
title: User Manual - Dasher Documentation
description: Complete user manual for Dasher
layout: ../../../../../layouts/DocsLayout.astro
---

# Dasher User Manual

This manual provides comprehensive instructions for using Dasher effectively.

## Table of Contents

- [Basic Operation](#basic-operation)
- [The Interface](#the-interface)
- [Entering Text](#entering-text)
- [Advanced Features](#advanced-features)
- [Customization](#customization)

## Basic Operation

Dasher presents letters in a zooming interface. To enter text:

1. **Start at the center** - The Dasher display shows a box containing letters or symbols
2. **Steer toward your target** - Move your pointer toward the letter you want
3. **Keep steering** - As you approach, the letter expands and more options appear
4. **Continue smoothly** - Keep moving toward each successive letter

<div class="key-concept">
  <h2>The Golden Rule</h2>
  <p>
    <strong>Keep moving smoothly toward your target.</strong> Don't stop and start - continuous
    motion is faster and more accurate.
  </p>
</div>

## The Interface

### Main Components

- **Entry Box** - Where your text appears as you type
- **Dasher Display** - The zooming interface where you select letters
- **Speed Control** - Adjusts how fast the zooming occurs
- **Alphabet Selector** - Choose different languages or character sets

### The Navigation Box

The main display shows letters in boxes. The size of each box represents the probability
of that letter appearing next based on:

- What you've already typed
- The language model in use
- Frequency of letter combinations

## Entering Text

### Getting Started

1. Launch Dasher
2. Position your pointer in the center of the display
3. Move toward the first letter of your intended word
4. Continue steering toward each subsequent letter
5. Use the red box (if visible) to delete characters

### Tips for Efficient Entry

- **Plan ahead** - Look at the next few letters while steering
- **Stay relaxed** - Smooth, continuous motion is better than precise corrections
- **Use prediction** - Let the language model help by steering toward likely letters
- **Practice** - Speed improves significantly with practice

### Speed Control

Adjust the speed slider to match your comfort level:

- **Beginner** - Start slow to get used to the interface
- **Intermediate** - Gradually increase as you improve
- **Advanced** - Higher speeds for experienced users

## Advanced Features

### Training Dasher

Dasher learns from training text to improve predictions. To train Dasher with your own writing style:

1. Go to **Options → Training**
2. Select a training text file or provide your own
3. The larger the training text, the better the predictions

### Multiple Languages

Dasher supports over 60 languages:

1. Go to **Options → Alphabet**
2. Select your desired language
3. The interface updates immediately

### Custom Alphabets

You can create custom alphabets for specialized needs:

1. Create an alphabet XML file (see [Creating Custom Alphabets](/docs/languages/creating-alphabets/))
2. Place it in your alphabets directory
3. Select it from **Options → Alphabet**

## Customization

### Appearance Options

- **Colors** - Customize color schemes for better visibility
- **Font Size** - Adjust for readability
- **Box Orientation** - Horizontal or vertical layouts

### Input Options

Different input methods can be configured:

- **Mouse** - Sensitivity and acceleration
- **Touchscreen** - Calibration and sensitivity
- **Eye-tracking** - Dwell time and accuracy settings
- **Switch access** - Scanning speed and switch configuration

### Saving Settings

Your settings are automatically saved. To reset to defaults:

1. Go to **Options → Reset to Defaults**
2. Confirm the reset

## Troubleshooting

### Common Issues

**Problem**: Dasher seems to predict the wrong letters

**Solution**: Ensure you've selected the correct alphabet and language. Try adding more training text relevant to your writing style.

**Problem**: Interface moves too fast/slow

**Solution**: Adjust the speed slider in the main window until comfortable.

**Problem**: Can't find special characters

**Solution**: Different alphabets have different character sets. Check **Options → Alphabet** to see available characters.

### Getting Help

- Visit the [Community](/about/#community) page for support
- Check the [Documentation](/docs/) for more guides
- Report issues on [GitHub](https://github.com/dasher-project)

<div class="cta-box">
  <h2>Ready to Try?</h2>
  <p>
    Now that you understand the basics, try Dasher yourself. Download and install to get started.
  </p>
  <a href="/docs/getting-started/install/" class="btn-primary">Download Dasher</a>
</div>
