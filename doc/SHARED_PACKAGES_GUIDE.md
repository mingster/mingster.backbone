# Shared Packages Guide

This guide explains the shared packages structure for the riben.life and mingster.com projects.

## Overview

Shared packages allow code reuse across multiple projects without duplication. Components, utilities, and other code that's common between projects can be maintained in one place.

## Current Shared Packages

### mingster.backbone

Location: `/Users/mtsai/projects/packages/mingster.backbone/`

A collection of reusable DataTable components built on top of `@tanstack/react-table`.

**Components:**

- `DataTable` - Main datatable with sorting, filtering, and pagination
- `DataTableCheckbox` - DataTable with row selection
- `DataTableDraggable` - Draggable datatable with DnD functionality
- `DataTableColumnHeader` - Column header with sorting
- `DataTableViewOptions` - Column visibility controls
- `DataTablePagination` - Pagination controls

**Usage:**

```typescript
import { DataTable, DataTableCheckbox } from "mingster.backbone";
```

See [mingster.backbone/README.md](./mingster.backbone/README.md) for detailed documentation.
See [mingster.backbone/MIGRATION.md](./mingster.backbone/MIGRATION.md) for migration details.

## Projects Using Shared Packages

1. **riben.life/web** - `/Users/mtsai/projects/riben.life/web/`
2. **mingster.com/web** - `/Users/mtsai/projects/mingster.com/web/`

## How It Works

### TypeScript Path Mapping

Each project's `tsconfig.json` includes path mappings to the shared packages:

**riben.life/web/tsconfig.json:**

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "mingster.backbone": ["../../packages/mingster.backbone/src"]
    }
  }
}
```

**mingster.com/web/tsconfig.json:**

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "mingster.backbone": ["../../../packages/mingster.backbone/src"]
    }
  }
}
```

### Source-Based Sharing

The shared packages are source-based, meaning:

- No build step required for the shared package
- Each consuming project compiles the shared code as part of its own build
- Type checking works seamlessly across package boundaries
- Hot reload works when developing

## Creating a New Shared Package

1. **Create the package directory:**

   ```bash
   mkdir -p /Users/mtsai/projects/packages/my-package/src
   cd /Users/mtsai/projects/packages/my-package
   ```

2. **Create package.json:**

   ```json
   {
     "name": "@shared/my-package",
     "version": "1.0.0",
     "private": true,
     "main": "./src/index.ts",
     "types": "./src/index.ts",
     "peerDependencies": {
       // Add peer dependencies here
     }
   }
   ```

3. **Create tsconfig.json:**

   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "jsx": "react-jsx",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src"],
     "exclude": ["node_modules"]
   }
   ```

4. **Create src/index.ts:**

   ```typescript
   export { MyComponent } from "./MyComponent";
   ```

5. **Update consuming projects:**

   Add to each project's `tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "paths": {
         "@shared/my-package": ["../../packages/my-package/src"]
       }
     }
   }
   ```

6. **Create documentation:**
   - `README.md` - Package documentation
   - `MIGRATION.md` - Migration guide (if applicable)

## Best Practices

### 1. Keep Packages Focused

Each shared package should have a single, clear purpose. Don't create catch-all packages.

### 2. Document Dependencies

Clearly document all peer dependencies and requirements in the package README.

### 3. Maintain Backward Compatibility

When making changes to shared packages:

- Avoid breaking changes when possible
- Document breaking changes clearly
- Consider deprecation warnings before removing features

### 4. Test in All Consuming Projects

Before committing changes to a shared package, test in all projects that use it.

### 5. Version Control

While the packages are private and not published to npm:

- Use semantic versioning in package.json
- Document changes in a CHANGELOG.md
- Consider git tags for major releases

### 6. Avoid Circular Dependencies

Shared packages should not depend on the consuming projects. Keep dependencies flowing in one direction:

```
Consuming Project → Shared Package → External Dependencies
```

### 7. Type Safety

Export proper TypeScript types from shared packages:

```typescript
export type { MyComponentProps } from "./MyComponent";
```

## Migration Strategy

When moving existing code to shared packages:

1. **Identify common code** - Look for duplicated components or utilities
2. **Create the shared package** - Set up the package structure
3. **Copy the code** - Copy from one project to the shared package
4. **Update imports** - Update all consuming projects
5. **Test thoroughly** - Verify everything works in all projects
6. **Remove duplicates** - Delete old files from consuming projects
7. **Document** - Create README and migration guide

## Troubleshooting

### TypeScript Can't Find Shared Package

- Check path mapping in `tsconfig.json`
- Verify relative paths are correct
- Restart TypeScript server

### Import Errors at Runtime

- Ensure all dependencies are installed in consuming project
- Check that exports are correct in `src/index.ts`

### Build Errors

- Verify shared package `tsconfig.json` is valid
- Check that all imports in shared package are resolvable
- Ensure consuming project's build config includes shared package paths

## Future Considerations

Consider creating shared packages for:

- Common UI components (buttons, forms, modals)
- Utility functions
- Type definitions
- API clients
- Authentication helpers
- i18n utilities

## Resources

- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [Next.js Module Path Aliases](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases)
- [Monorepo Best Practices](https://monorepo.tools/)
