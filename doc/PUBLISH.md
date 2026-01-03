# Publishing Guide - mingster.backbone

## Pre-Publish Checklist

Before publishing to npm, ensure:

- [ ] All tests pass
- [ ] Version number is updated in `package.json`
- [ ] CHANGELOG.md is updated
- [ ] README.md is up to date
- [ ] All peer dependencies are correct
- [ ] Build succeeds without errors
- [ ] TypeScript types are generated correctly

## Publishing Steps

### 1. Login to npm (First Time Only)

```bash
npm login
```

### 2. Update Version

Choose the appropriate version bump:

```bash
# Patch release (bug fixes): 1.0.0 -> 1.0.1
npm version patch

# Minor release (new features): 1.0.0 -> 1.1.0
npm version minor

# Major release (breaking changes): 1.0.0 -> 2.0.0
npm version major
```

### 3. Build the Package

```bash
bun run build
```

This will:

- Run linter
- Run type checker
- Build the package to `dist/`

### 4. Test the Build

```bash
# Check what files will be published
npm pack --dry-run

# Or create a tarball to inspect
npm pack
tar -xzf mingster.backbone-*.tgz
cd package
# Inspect the contents
```

### 5. Publish to npm

For public package:

```bash
npm publish --access public
```

For scoped private package:

```bash
npm publish
```

### 6. Verify Publication

```bash
# Check on npm
npm view mingster.backbone

# Install in a test project
npm install mingster.backbone
```

### 7. Create Git Tag

```bash
git add .
git commit -m "Release v1.0.0"
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

## Version Strategy

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

## Unpublishing (Emergency Only)

```bash
# Unpublish a specific version (within 72 hours)
npm unpublish mingster.backbone@1.0.0

# Deprecate instead (preferred)
npm deprecate mingster.backbone@1.0.0 "Use version 1.0.1 instead"
```

## Beta/Alpha Releases

For pre-release versions:

```bash
# Create a beta version
npm version prerelease --preid=beta
# Results in: 1.0.0-beta.0

# Publish with beta tag
npm publish --tag beta

# Install beta version
npm install mingster.backbone@beta
```

## Troubleshooting

### "Package name already exists"

If `mingster.backbone` is taken, you need to either:

1. Use a scoped package: `@mingster/backbone`
2. Choose a different name

Update `package.json`:

```json
{
  "name": "@mingster/backbone"
}
```

### "Build failed"

```bash
# Clean and rebuild
bun run clean
bun install
bun run build
```

### "Type definitions missing"

Check `tsup.config.ts`:

```typescript
{
  dts: true  // Must be true
}
```

### "Peer dependency warnings"

Review and update `peerDependencies` in `package.json` to match your target projects.

## Post-Publish

After successful publish:

1. **Update consuming projects**:

   ```bash
   cd mingster.com/web
   bun update mingster.backbone
   ```

2. **Create GitHub release**:
   - Go to GitHub repository
   - Create release from tag
   - Add release notes from CHANGELOG

3. **Announce**:
   - Update project documentation
   - Notify team members
   - Update any dependent projects

## Continuous Integration

For automated publishing with GitHub Actions, create `.github/workflows/publish.yml`:

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: JS-DevTools/npm-publish@v1
        with:
          token: ${{ secrets.NPM_TOKEN }}
          access: public
```

## Package Maintenance

### Regular Updates

```bash
# Check for outdated dependencies
bun outdated

# Update dependencies
bun update

# Test after updates
bun run typecheck
bun run build
```

### Monitoring

- Check npm download stats: <https://npm-stat.com/charts.html?package=mingster.backbone>
- Monitor GitHub issues
- Review security advisories

## Support

For issues or questions about publishing:

- npm docs: <https://docs.npmjs.com/>
- Semantic Versioning: <https://semver.org/>
- tsup docs: <https://tsup.egoist.dev/>
