# Build Configuration - mingster.backbone

## Package Type

This is a **TypeScript Source Package** for monorepo workspace use.

## No Build Required ❌

This package **does NOT need to be built** because:

1. ✅ It's consumed by Next.js projects that handle TypeScript compilation
2. ✅ All exports point to source `.ts`/`.tsx` files
3. ✅ The consuming project's build system compiles it
4. ✅ Faster development workflow (no build step needed)

## Package Configuration

### Key Fields

```json
{
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "files": ["src"],
  "exports": {
    ".": "./src/index.ts",
    // All exports point to source files in ./src/
  }
}
```

### Available Scripts

```bash
# Format code with Biome
bun run format

# Lint code
bun run lint

# Lint and auto-fix
bun run lint:fix

# Type check (no output, just validation)
bun run typecheck

# Clean generated files
bun run clean
```

## Usage in Consuming Projects

### In Next.js Projects

The consuming Next.js projects will automatically:

- Compile TypeScript files
- Bundle the components
- Tree-shake unused exports
- Apply their own transpilation settings

### TypeScript Configuration

Ensure your consuming project's `tsconfig.json` includes the package path:

```json
{
  "compilerOptions": {
    "paths": {
      "mingster.backbone": ["../../packages/mingster.backbone/src"]
    }
  }
}
```

## Development Workflow

### 1. Make Changes

```bash
cd packages/mingster.backbone
# Edit files in src/
```

### 2. Format Code

```bash
bun run format
```

### 3. Check Types

```bash
bun run typecheck
```

### 4. Test in Consuming Project

```bash
cd ../../riben.life/web
bun run dev
```

No build step needed! Changes are immediately available.

## Advantages of Source Package

### ✅ Faster Development

- No build step = instant changes
- HMR (Hot Module Replacement) works perfectly
- No need to rebuild after every change

### ✅ Better Debugging

- Source maps point to actual source code
- Stack traces show real file locations
- Easier to step through code

### ✅ Type Safety

- Consuming project uses actual types, not compiled `.d.ts`
- Better IDE autocomplete and IntelliSense
- Immediate type error feedback

### ✅ Simpler Setup

- No build configuration needed
- No dist folder to manage
- Fewer files to track in git

## If You Need a Built Package

If you later decide to publish this to npm (not workspace), you would need to:

1. **Add build tools**:

   ```bash
   bun add -d tsup esbuild-plugin-preserve-directives
   ```

2. **Create `tsup.config.ts`**:

   ```typescript
   import { defineConfig } from "tsup";
   import { esbuildPluginPreserveDirectives } from "esbuild-plugin-preserve-directives";

   export default defineConfig({
     entry: ["src/index.ts"],
     format: ["cjs", "esm"],
     dts: true,
     splitting: false,
     sourcemap: true,
     clean: true,
     external: ["react", "react-dom", "next"],
     esbuildPlugins: [esbuildPluginPreserveDirectives()],
   });
   ```

3. **Update package.json**:

   ```json
   {
     "main": "./dist/index.cjs",
     "module": "./dist/index.js",
     "types": "./dist/index.d.ts",
     "files": ["dist"],
     "scripts": {
       "build": "tsup",
       "prepublishOnly": "bun run build"
     },
     "exports": {
       ".": {
         "types": "./dist/index.d.ts",
         "import": "./dist/index.js",
         "require": "./dist/index.cjs"
       }
     }
   }
   ```

4. **Build before publish**:

   ```bash
   bun run build
   npm publish
   ```

## Current Setup Summary

**Package Type**: TypeScript Source Package (Workspace)  
**Build Required**: ❌ No  
**Entry Point**: `./src/index.ts`  
**Compilation**: Handled by consuming Next.js projects  
**Development**: Edit source, changes are instant  
**Publishing**: Not set up (workspace-only package)  

## Troubleshooting

### "Cannot find module 'mingster.backbone'"

- Check `tsconfig.json` paths configuration
- Ensure package is listed in consuming project's dependencies
- Try restarting TypeScript server

### "Type errors in backbone package"

```bash
cd packages/mingster.backbone
bun run typecheck
```

### "Changes not reflecting"

- Restart Next.js dev server
- Check file imports are correct
- Clear `.next` cache: `rm -rf .next`

## Related Files

- `package.json` - Package configuration
- `tsconfig.json` - TypeScript configuration
- `biome.json` - Linter/formatter configuration
- `README.md` - Package documentation
