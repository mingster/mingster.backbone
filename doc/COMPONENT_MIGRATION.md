# Component Migration Guide

This document tracks components that have been moved to the `mingster.backbone` shared package and provides migration instructions.

## Moved Components

The following components have been successfully moved to `mingster.backbone`:

### DataTable Components

- `DataTable`
- `DataTableCheckbox`
- `DataTableDraggable` (with `DragHandle`, `DraggableRow`)
- `DataTableColumnHeader`
- `DataTableViewOptions`
- `DataTablePagination`

### Utility Components (NEW)

- `Loader` - Loading spinner (requires `react-spinners`)
- `NotMountSkeleton` - Skeleton loading state
- `Scheduled` - Conditional rendering based on timestamp
- `SidebarToggle` - Sidebar collapse/expand toggle
- `ThemeToggler` - Theme switcher
- `toaster` (with `toastSuccess`, `toastError`, `toastInfo`) - Toast notifications
- `TwBankCodeCombobox` - Taiwan bank code selector

### Types

- `TwBankCode` type
- `TwBankCodes` data array

## Migration Instructions

### Step 1: Update Import Statements

Replace local imports with shared package imports:

#### Before (riben.life/web or mingster.com/web)

```tsx
import { Loader } from "@/components/loader";
import { NotMountSkeleton } from "@/components/not-mount-skeleton";
import Scheduled from "@/components/scheduled";
import { SidebarToggle } from "@/components/sidebar-toggle";
import ThemeToggler from "@/components/theme-toggler";
import { toaster, toastSuccess, toastError, toastInfo } from "@/components/Toaster";
import { TwBankCodeCombobox } from "@/components/tw-bankcode-combobox";
import { type TwBankCode, TwBankCodes } from "@/types/bank3";
```

#### After

```tsx
import {
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
  TwBankCode,
  TwBankCodes
} from "mingster.backbone";
```

### Step 2: Remove Local Component Files

After updating all imports, you can safely delete the following files from your project:

#### In riben.life/web/src/components/

- `loader.tsx`
- `not-mount-skeleton.tsx`
- `scheduled.tsx`
- `sidebar-toggle.tsx`
- `theme-toggler.tsx`
- `Toaster.tsx`
- `tw-bankcode-combobox.tsx`

#### In riben.life/web/src/types/

- `bank3.ts`

### Step 3: Install react-spinners

The `Loader` component requires `react-spinners`. Ensure it's installed:

```bash
bun add react-spinners
```

## Files Requiring Updates

### riben.life/web

#### Loader Component (77 files)

- All store pages and admin pages that show loading states
- Run global find-replace:

  ```
  Find: from "@/components/loader"
  Replace: from "mingster.backbone"
  
  Find: import { Loader }
  Replace: import { Loader }  (already correct)
  ```

#### NotMountSkeleton (4 files)

- `src/components/language-toggler.tsx`
- `src/components/theme-toggler.tsx`
- `src/components/auth/dropdown-user.tsx`
- `src/app/sysAdmin/users/components/combobox-user.tsx`

#### Scheduled (4 files)

- Order-related pages in storeAdmin

#### ThemeToggler (6 files)

- Navigation components
- Layout files

#### toaster (82 files)

- All components using toast notifications
- Replace imports of `toaster`, `toastSuccess`, `toastError`, `toastInfo`
- **Note**: Component renamed from `Toaster` to `toaster` (lowercase)

#### TwBankCodeCombobox (1 file)

- `src/app/storeAdmin/(dashboard)/[storeId]/(routes)/settings/setting-bank-tab.tsx`

### mingster.com/web

Check for similar files and update accordingly.

## Automated Migration Script

For bulk updates, use this find-replace pattern in your IDE:

### Pattern 1: Loader

```
Find: import \{ Loader \} from "@/components/loader";
Replace: import { Loader } from "mingster.backbone";
```

### Pattern 2: NotMountSkeleton

```
Find: import \{ NotMountSkeleton \} from "@/components/not-mount-skeleton";
Replace: import { NotMountSkeleton } from "mingster.backbone";
```

### Pattern 3: Scheduled

```
Find: import Scheduled from "@/components/scheduled";
Replace: import { Scheduled } from "mingster.backbone";
```

### Pattern 4: SidebarToggle

```
Find: import \{ SidebarToggle \} from "@/components/sidebar-toggle";
Replace: import { SidebarToggle } from "mingster.backbone";
```

### Pattern 5: ThemeToggler

```
Find: import ThemeToggler from "@/components/theme-toggler";
Replace: import { ThemeToggler } from "mingster.backbone";
```

### Pattern 6: toaster

```
Find: import \{ (Toaster|toaster|toastSuccess|toastError|toastInfo)[,\s]*(Toaster|toaster|toastSuccess|toastError|toastInfo)?[,\s]*(Toaster|toaster|toastSuccess|toastError|toastInfo)?[,\s]*(Toaster|toaster|toastSuccess|toastError|toastInfo)? \} from "@/components/Toaster";
Replace: import { $1, $2, $3, $4 } from "mingster.backbone";
```

**Note**: Also replace `Toaster` with `toaster` (lowercase) in component usage

### Pattern 7: TwBankCodeCombobox

```
Find: import \{ TwBankCodeCombobox \} from "@/components/tw-bankcode-combobox";
Replace: import { TwBankCodeCombobox } from "mingster.backbone";
```

### Pattern 8: Bank3 Types

```
Find: import \{ (type )?TwBankCode(s)?(, TwBankCodes)? \} from "@/types/bank3";
Replace: import { TwBankCode, TwBankCodes } from "mingster.backbone";
```

## Verification

After migration:

1. **Build test**: Run `bun run build` in both projects
2. **Type check**: Run `tsc --noEmit` to ensure no type errors
3. **Runtime test**: Test all affected pages/components
4. **Remove old files**: Only after confirming everything works

## Benefits

- ✅ Single source of truth for these components
- ✅ Easier maintenance and bug fixes
- ✅ Consistent behavior across projects
- ✅ Reduced code duplication
- ✅ Easier testing and documentation

## Notes

- The `Loader` component uses `react-spinners` - ensure this dependency is installed in consuming projects
- The `ThemeToggler` component depends on `next-themes` and `useColorMode` hook
- The `TwBankCodeCombobox` uses i18n translations - ensure translation keys are available
- Toast functions require `sonner` to be installed

## Support

If you encounter issues during migration:

1. Check TypeScript errors first
2. Verify all peer dependencies are installed
3. Ensure path mappings in `tsconfig.json` are correct
4. Check the USAGE_GUIDE.md for detailed usage examples
