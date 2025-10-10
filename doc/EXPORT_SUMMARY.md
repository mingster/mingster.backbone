# Export Summary - mingster.backbone

## Overview

All components, utilities, hooks, and types are now properly exported and available for use across projects.

## Export Configuration

### Package.json Exports

The `package.json` now includes granular exports for all new components:

```json
{
  "exports": {
    ".": "./src/index.ts",
    // DataTable components
    "./datatable": "./src/components/dataTable.tsx",
    "./datatable-checkbox": "./src/components/dataTable-checkbox.tsx",
    "./datatable-draggable": "./src/components/datatable-draggable.tsx",
    "./datatable-column-header": "./src/components/dataTable-column-header.tsx",
    "./datatable-view-options": "./src/components/dataTable-view-options.tsx",
    "./datatable-pagination": "./src/components/dataTable-pagination.tsx",
    // NEW: Utility components
    "./cliploader": "./src/components/cliploader.tsx",
    "./not-mount-skeleton": "./src/components/not-mount-skeleton.tsx",
    "./scheduled": "./src/components/scheduled.tsx",
    "./sidebar-toggle": "./src/components/sidebar-toggle.tsx",
    "./theme-toggler": "./src/components/theme-toggler.tsx",
    "./toaster": "./src/components/toaster.tsx",
    "./tw-bankcode-combobox": "./src/components/tw-bankcode-combobox.tsx",
    // Types
    "./types/bank3": "./src/types/bank3.ts",
    // ... UI components, hooks, utils, lib, i18n, providers
  }
}
```

### Main Entry Point (src/index.ts)

All components are exported from the main entry point:

```typescript
// ============================================================================
// Utility Components
// ============================================================================
export { Loader } from "./components/cliploader";
export { NotMountSkeleton } from "./components/not-mount-skeleton";
export { default as Scheduled } from "./components/scheduled";
export { SidebarToggle } from "./components/sidebar-toggle";
export { default as ThemeToggler } from "./components/theme-toggler";
export { toaster, toastSuccess, toastError, toastInfo } from "./components/toaster";
export { TwBankCodeCombobox } from "./components/tw-bankcode-combobox";

// ============================================================================
// Types
// ============================================================================
export type { TwBankCode } from "./types/bank3";
export { TwBankCodes } from "./types/bank3";
```

## Import Methods

### Method 1: Main Entry Point (Recommended)

Import everything from the main package:

```tsx
import {
  // Utility Components
  Loader,
  NotMountSkeleton,
  Scheduled,
  SidebarToggle,
  ThemeToggler,
  toaster,
  toastSuccess,
  toastError,
  toastInfo,
  TwBankCodeCombobox,
  
  // Types
  TwBankCode,
  TwBankCodes,
  
  // Plus all other components...
  DataTable,
  Button,
  useTheme,
  cn,
  logger
} from "mingster.backbone";
```

### Method 2: Direct Module Imports

Import directly from specific modules for better tree-shaking:

```tsx
// Utility Components
import { Loader } from "mingster.backbone/cliploader";
import { NotMountSkeleton } from "mingster.backbone/not-mount-skeleton";
import { Scheduled } from "mingster.backbone/scheduled";
import { SidebarToggle } from "mingster.backbone/sidebar-toggle";
import { ThemeToggler } from "mingster.backbone/theme-toggler";
import { toaster, toastSuccess, toastError } from "mingster.backbone/toaster";
import { TwBankCodeCombobox } from "mingster.backbone/tw-bankcode-combobox";

// Types
import { TwBankCode, TwBankCodes } from "mingster.backbone/types/bank3";

// Other components
import { Button } from "mingster.backbone/ui/button";
import { useTheme } from "mingster.backbone/hooks/use-theme";
```

## Component Details

### 1. Loader

Loading spinner component using `react-spinners`.

```tsx
import { Loader } from "mingster.backbone";

<Loader />          // Blue spinner
<Loader error />    // Red spinner
```

**Dependencies**: `react-spinners`

### 2. NotMountSkeleton

Skeleton loading placeholder for client components.

```tsx
import { NotMountSkeleton } from "mingster.backbone";

if (!mounted) return <NotMountSkeleton />;
```

**Dependencies**: Uses internal `Skeleton` UI component

### 3. Scheduled

Conditionally renders children after a specific timestamp.

```tsx
import { Scheduled } from "mingster.backbone";

<Scheduled timestamp={Date.now() + 5000}>
  <div>This appears after 5 seconds</div>
</Scheduled>
```

### 4. SidebarToggle

Toggle button for collapsible sidebars with chevron icons.

```tsx
import { SidebarToggle } from "mingster.backbone";

<SidebarToggle 
  isOpen={sidebarOpen} 
  setIsOpen={() => setSidebarOpen(!sidebarOpen)} 
/>
```

**Dependencies**: `@tabler/icons-react`

### 5. ThemeToggler

Theme switcher toggle (light/dark mode) with smooth animations.

```tsx
import { ThemeToggler } from "mingster.backbone";

<ThemeToggler />
```

**Dependencies**: `next-themes`, `@tabler/icons-react`, `useColorMode` hook

### 6. toaster (Toast Notifications)

Toast notification system using `sonner`.

```tsx
import { toaster, toastSuccess, toastError, toastInfo } from "mingster.backbone";

// In your layout
<toaster />

// In your components
toastSuccess({ description: "Operation successful!" });
toastError({ description: "Something went wrong" });
toastInfo({ 
  title: "Info", 
  description: "Important message",
  duration: 5000 
});
```

**Note**: Component renamed from `Toaster` to `toaster` (lowercase) for consistency.

**Dependencies**: `sonner`, `@tabler/icons-react`

### 7. TwBankCodeCombobox

Taiwan bank code selector with searchable combobox.

```tsx
import { TwBankCodeCombobox, TwBankCodes } from "mingster.backbone";

<TwBankCodeCombobox
  disabled={false}
  defaultValue="004"
  onValueChange={(value) => console.log(value)}
/>
```

**Dependencies**: Uses `Command`, `Popover` UI components, i18n translation keys

### 8. Types: TwBankCode

Complete Taiwan bank code data with types.

```tsx
import { TwBankCode, TwBankCodes } from "mingster.backbone";

type TwBankCode = {
  Value: string;  // Bank code (e.g., "004")
  Key: string;    // Bank name in Chinese
  Short: string;  // Short name
};

// Use the data
const banks: TwBankCode[] = TwBankCodes;
```

## Dependencies Added

### Peer Dependencies
- `react-spinners: ^0.15.0`

### Already Required
- `sonner` - for toast notifications
- `@tabler/icons-react` - for icons
- `next-themes` - for theme switching
- All shadcn/ui components and utilities

## Migration from Local Components

See `COMPONENT_MIGRATION.md` for detailed migration instructions from local project components to the shared package.

## Testing

After migrating to these components:

1. **Build Test**
   ```bash
   bun run build
   ```

2. **Type Check**
   ```bash
   tsc --noEmit
   ```

3. **Runtime Test**
   - Test all pages with loading states
   - Test theme switching
   - Test toast notifications
   - Test bank code selector

## Documentation

- **README.md** - Full package documentation
- **USAGE_GUIDE.md** - Detailed usage examples
- **COMPONENT_MIGRATION.md** - Migration guide from local components
- **CHANGELOG.md** - Version history

## Benefits

✅ **Single Source of Truth** - All utility components in one place  
✅ **Type Safety** - Full TypeScript support  
✅ **Consistent Behavior** - Same implementation across projects  
✅ **Easy Updates** - Update once, apply everywhere  
✅ **Better Testing** - Test shared components once  
✅ **Reduced Duplication** - No more copy-paste between projects  

## Support

For issues or questions:
1. Check the USAGE_GUIDE.md for examples
2. Review COMPONENT_MIGRATION.md for migration help
3. Check TypeScript errors first
4. Verify all peer dependencies are installed

