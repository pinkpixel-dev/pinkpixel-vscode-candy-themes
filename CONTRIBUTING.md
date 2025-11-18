# 🤝 Contributing to Pink Pixel VSCode Candy Themes

First off, **thank you** for considering contributing to PinkPixel VSCode Candy Themes! 💖 Every contribution, whether it's a bug report, feature suggestion, or code improvement, helps make these themes better for everyone.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Reporting Bugs](#-reporting-bugs)
- [Suggesting Features](#-suggesting-features)
- [Theme Development Guidelines](#-theme-development-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Style Guide](#-style-guide)
- [Community](#-community)

---

## 🌈 Code of Conduct

This project and everyone participating in it is governed by respect, kindness, and inclusivity. We expect all contributors to:

- 💬 Be respectful and considerate in communication
- 🤗 Welcome newcomers and help them get started
- 🎯 Focus on what's best for the community
- 🚫 Avoid harassment, discrimination, or toxic behavior

Let's make this a welcoming space for developers of all skill levels and backgrounds! ✨

---

## 🎯 How Can I Contribute?

There are many ways to contribute to Pink Pixel VSCode Candy Themes:

### 🐛 **Report Bugs**
Found a color that looks off? A UI element that isn't themed? Let us know!

### 💡 **Suggest Features**
Have an idea for a new theme variant or feature? We'd love to hear it!

### 🎨 **Improve Themes**
Spot an inconsistency or have a better color suggestion? Submit a pull request!

### 📸 **Share Screenshots**
Using the themes and want to show them off? Share your setup!

### 📝 **Improve Documentation**
Help make our docs clearer, fix typos, or add examples.

### 🌟 **Spread the Word**
Star the repo, share on social media, tell your friends!

---

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

1. **Check existing issues** - Someone might have already reported it
2. **Try the latest version** - The bug might already be fixed
3. **Test with default VS Code settings** - Ensure it's not caused by another extension

### How to Submit a Good Bug Report

Create an issue with the following information:

**Title:** Clear, descriptive summary (e.g., "Candy Nebula: Status bar text invisible when debugging")

**Description:**
```
**Theme:** [Which theme is affected]
**VS Code Version:** [e.g., 1.85.0]
**Operating System:** [e.g., Windows 11, macOS Ventura, Ubuntu 22.04]

**Description:**
[Describe what's happening]

**Expected Behavior:**
[What should happen instead]

**Steps to Reproduce:**
1. Open VS Code
2. Select [Theme Name]
3. Open [specific file type or UI element]
4. [Additional steps]

**Screenshots:**
[If applicable, add screenshots showing the issue]

**Additional Context:**
[Any other relevant information]
```

---

## 💡 Suggesting Features

We love new ideas! Here's how to suggest features effectively:

### Feature Request Template

**Title:** Brief, descriptive title (e.g., "Add light theme variants")

**Description:**
```
**Feature Type:** [New Theme / Enhancement / Settings / etc.]

**Problem/Use Case:**
[What problem does this solve? What use case does it address?]

**Proposed Solution:**
[Describe your proposed feature]

**Alternatives Considered:**
[Other approaches you've thought about]

**Additional Context:**
[Mockups, examples, references, etc.]
```

### Ideas We're Excited About

- 🌞 Light theme variants
- 🎨 Color customization settings
- 🖼️ Icon theme companion packs
- 🎛️ Saturation/contrast variants
- 🌐 Theme preview website
- 🤖 Theme generator tools

---

## 🎨 Theme Development Guidelines

### Setting Up Your Development Environment

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/pinkpixel-vscode-candy-themes.git
   cd pinkpixel-vscode-candy-themes
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Test themes**
   - Press `F5` to launch Extension Development Host
   - Test all UI elements and file types
   - Check terminal colors in light and dark modes

### Theme File Structure

Each theme file (`themes/*.json`) follows this structure:

```json
{
  "$schema": "vscode://schemas/color-theme",
  "name": "Theme Name",
  "type": "dark",
  "colors": {
    // UI colors (editor, sidebar, etc.)
  },
  "tokenColors": [
    // Syntax highlighting rules
  ]
}
```

### Color Guidelines

#### **Consistency Across Themes**
- **Functions:** Cyan/Blue tones (`#00f0ff` range)
- **Strings:** Green/Lime tones (`#47ff7b` range)
- **Types/Classes:** Yellow/Gold tones (`#fff347` range)
- **Constants/Numbers:** Pink/Red tones (`#ff3b3b` range)
- **Keywords:** Purple/Magenta tones (`#ff4cff` range)
- **Comments:** Muted, italicized

#### **Accessibility Requirements**
- Minimum contrast ratio of 4.5:1 for text
- High contrast variants should exceed 7:1
- Cursor must be highly visible
- Active line highlighting should be subtle but clear

#### **Terminal Colors (ANSI)**
All themes must define:
- 8 base colors (Black, Red, Green, Yellow, Blue, Magenta, Cyan, White)
- 8 bright variants
- Colors should complement the theme's aesthetic

### Testing Checklist

Before submitting changes, test your theme with:

- ✅ Multiple file types (JS, TS, Python, Rust, Go, JSON, Markdown, etc.)
- ✅ All UI states (active/inactive windows, selections, hover states)
- ✅ Terminal (run commands, check color contrast)
- ✅ Debugging mode (status bar changes)
- ✅ Peek views and inline code navigation
- ✅ Chat interfaces (if available)
- ✅ Markdown files (headings, code blocks, lists, emphasis)
- ✅ Search results and highlights
- ✅ Error/warning indicators

---

## 🔀 Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Edit theme JSON files in `themes/` directory
- Test thoroughly using the Extension Development Host
- Update documentation if needed

### 3. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git commit -m "feat: Add Electric Sugarstorm Light variant"
# or
git commit -m "fix: Improve Candy Nebula terminal contrast"
```

**Commit Message Prefixes:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code formatting (not visual styling)
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance tasks

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub with:

**Title:** Clear description of changes

**Description:**
```
**Type of Change:**
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation

**Description:**
[Explain what changes you made and why]

**Testing:**
[Describe how you tested your changes]

**Screenshots:**
[If applicable, show before/after comparisons]

**Related Issues:**
Closes #[issue number]
```

### 5. Code Review

- Maintainers will review your PR
- Address any requested changes
- Once approved, your changes will be merged! 🎉

---

## 📐 Style Guide

### JSON Formatting

- **Indentation:** 2 spaces
- **Quotes:** Double quotes for all strings
- **Trailing Commas:** Not allowed in JSON
- **Hex Colors:** Always 6 digits (e.g., `#ff4ecb`), lowercase
- **Alpha Values:** Use 2-digit hex alpha (e.g., `#ff4ecb88` for 50% opacity)

### Color Naming

Use descriptive hex values without variables. While this can feel repetitive, it ensures themes are self-contained and easy to understand:

```json
"editor.background": "#0b0213",  // ✅ Good
"editor.background": "${deepPurple}",  // ❌ Avoid
```

### Documentation Style

- Use emojis for visual interest and categorization
- Include clear examples
- Write in friendly, conversational tone
- Keep Pink Pixel brand voice (modern, playful, professional)

---

## 🌐 Community

### Connect with Us

- **GitHub Issues:** Best for bugs and feature requests
- **GitHub Discussions:** Great for questions and ideas
- **Email:** admin@pinkpixel.dev for private inquiries

### Recognition

All contributors will be:
- Listed in our contributors section
- Credited in release notes
- Forever appreciated by the community! 💖

---

## 📚 Additional Resources

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [VS Code Extension API](https://code.visualstudio.com/api)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Pink Pixel Brand](https://pinkpixel.dev)

---

## ✨ Final Words

Your contributions help make coding more colorful and enjoyable for developers worldwide. Whether you're fixing a tiny color inconsistency or creating an entirely new theme variant, every contribution matters.

**Thank you for being part of the Pink Pixel community!** 🌈

---

**Made with ❤️ by Pink Pixel**  
*Dream it, Pixel it* ✨
