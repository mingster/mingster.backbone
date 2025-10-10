# Locale Files

This directory contains placeholder locale files for the build process.

## ⚠️ Important

These are **empty placeholder files** used only to make the package build successfully.

## Usage in Your Project

When using `mingster.backbone` in your project, you need to:

1. **Copy your locale files** to your project's i18n directory
2. **Configure i18n** in your project with your actual translations
3. **Do NOT** rely on these placeholder files - they contain no translations

## Structure

The placeholder structure is:
```text
locales/
├── tw/
│   └── translation.json  (empty: {})
├── en/
│   └── translation.json  (empty: {})
└── jp/
    └── translation.json  (empty: {})
```

## Recommended Setup

In your Next.js project:

```text
your-project/
├── src/
│   ├── app/
│   └── i18n/
│       └── locales/
│           ├── tw/
│           │   ├── common.json
│           │   ├── storeAdmin.json
│           │   └── ...
│           ├── en/
│           │   ├── common.json
│           │   └── ...
│           └── jp/
│               └── ...
```

See the project documentation for complete i18n setup instructions.

