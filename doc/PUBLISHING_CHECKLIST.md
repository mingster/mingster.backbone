# Pre-Publishing Checklist for mingster.backbone

## ✅ Package is Ready to Publish

### What's Been Done

- [x] Package configuration (`package.json`) set up for npm publishing
- [x] Build system configured with `tsup`
- [x] TypeScript compilation successful  
- [x] All dependencies properly categorized (peer vs dev)
- [x] Package exports configured
- [x] Source maps generated
- [x] Type definitions (`.d.ts`) generated
- [x] Documentation created (README, BUILD, PUBLISH, CHANGELOG)
- [x] `.npmignore` configured
- [x] Build test passed (304 KB ESM, 324 KB CJS)

### Package Stats

```text
Total Size: ~2.2 MB (includes source, dist, and maps)
Built Output:
  - ESM: dist/index.js (304 KB + 592 KB map)
  - CJS: dist/index.cjs (324 KB + 594 KB map)
  - Types: dist/index.d.ts (69 KB)
```

## 📋 Pre-Publish Steps

### 1. Verify Package Name Availability

```bash
npm search mingster.backbone
```

If the name is taken, you'll need to either:

- Use a scoped package: `@mingster/backbone` or `@yourusername/backbone`
- Choose a different name

To use a scoped package, update `package.json`:

```json
{
  "name": "@mingster/backbone"
}
```

### 2. Login to npm

```bash
npm login
```

Enter your npm username, password, and email.

### 3. Test the Package Locally (Recommended)

Create a test tarball:

```bash
npm pack
```

This creates `mingster.backbone-1.0.0.tgz`. Install it in a test project:

```bash
cd /path/to/test-project
npm install /path/to/mingster.backbone-1.0.0.tgz
```

### 4. Final Build and Type Check

```bash
bun run typecheck
bun run lint
bun run build
```

### 5. Review What Will Be Published

```bash
npm pack --dry-run
```

This shows exactly what files will be included in the package.

## 🚀 Publishing Commands

### Option A: Publish Version 1.0.0

If you're ready to publish as 1.0.0:

```bash
npm publish --access public
```

### Option B: Publish as Beta First

To test in production without affecting stable users:

```bash
# Update version to beta
npm version 1.0.0-beta.0

# Publish with beta tag
npm publish --tag beta --access public

# Users install with: npm install mingster.backbone@beta
```

### Option C: Start with a Lower Version

If you want to start with 0.x.x (pre-1.0):

```bash
# Update package.json version to 0.1.0
npm version 0.1.0

# Publish
npm publish --access public
```

## ✅ Post-Publishing Steps

After successful publish:

### 1. Verify on npm

```bash
npm view mingster.backbone
```

### 2. Test Installation

```bash
# In a clean directory
npm install mingster.backbone
```

### 3. Create Git Tag

```bash
git add .
git commit -m "chore: publish v1.0.0"
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

### 4. Create GitHub Release

- Go to your repository on GitHub
- Click "Releases" → "Create a new release"
- Select tag `v1.0.0`
- Add release notes from `CHANGELOG.md`
- Publish release

### 5. Update Consuming Projects

Update `mingster.com/web` and `mingster.com/web`:

```bash
cd /Users/mtsai/projects/mingster.com/web

# Remove local package reference from package.json
# Change from: "mingster.backbone": "workspace:*"
# To: "mingster.backbone": "^1.0.0"

bun install
```

## 🔄 Future Updates

For subsequent releases:

```bash
# Bug fix: 1.0.0 → 1.0.1
npm version patch
npm publish

# New feature: 1.0.0 → 1.1.0
npm version minor  
npm publish

# Breaking change: 1.0.0 → 2.0.0
npm version major
npm publish
```

## ⚠️ Important Notes

### i18n Caveat

The package includes i18n infrastructure but with **empty placeholder locale files**.

Users must:

1. Set up their own locale JSON files
2. Configure i18n in their project
3. See `src/i18n/locales/README.md` for details

### Peer Dependencies

Users will need to install peer dependencies. They'll see warnings like:

```text
npm WARN mingster.backbone@1.0.0 requires a peer of react@^19.2.0
```

This is normal and expected.

## 📞 Support

After publishing, monitor:

- npm package page: <https://www.npmjs.com/package/mingster.backbone>
- GitHub issues
- Download stats

## 🎉 Ready to Publish

Run this command when you're ready:

```bash
npm publish --access public
```

Good luck! 🚀
