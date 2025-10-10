# DataTable Components Migration

This document describes the migration of DataTable components to a shared package structure.

## What Was Done

### 1. Created Shared Package Structure

Created a new shared package at `/Users/mtsai/projects/packages/mingster.backbone/` with the following structure:

```text
packages/mingster.backbone/
├── package.json          # Package configuration with peer dependencies
├── tsconfig.json         # TypeScript configuration
├── README.md             # Package documentation
├── MIGRATION.md          # This file
└── src/
    ├── index.ts          # Main export file
    └── components/       # All component files
        ├── dataTable.tsx                 # Main DataTable component
        ├── dataTable-checkbox.tsx        # DataTable with row selection
        ├── datatable-draggable.tsx       # Draggable DataTable with DnD
        ├── dataTable-column-header.tsx   # Column header with sorting
        ├── dataTable-view-options.tsx    # View options dropdown
        └── dataTable-pagination.tsx      # Pagination controls
```

### 2. Updated Both Projects

#### riben.life/web

- Updated `tsconfig.json` to include shared package path mapping: `mingster.backbone`
- Replaced all imports from `@/components/dataTable*` to `mingster.backbone`
- Deleted old component files from `src/components/`

#### mingster.com/web

- Updated `tsconfig.json` to include shared package path mapping: `mingster.backbone`
- Replaced all imports from `@/components/dataTable*` to `mingster.backbone`
- Deleted old component files from `src/components/`

### 3. Updated Imports

All imports have been updated from the old pattern:

```typescript
import { DataTable } from "@/components/dataTable";
import { DataTableCheckbox } from "@/components/dataTable-checkbox";
import { DataTableColumnHeader } from "@/components/dataTable-column-header";
```

To the new pattern:

```typescript
import { DataTable, DataTableCheckbox, DataTableColumnHeader } from "mingster.backbone";
```

## Benefits

1. **Single Source of Truth**: DataTable components are now maintained in one location
2. **Consistency**: Both projects use the exact same components
3. **Easier Maintenance**: Bug fixes and features only need to be applied once
4. **Type Safety**: TypeScript path mapping ensures type checking works correctly

## Components Available

The shared package exports the following components:

- `DataTable` - Main datatable with sorting, filtering, and pagination
- `DataTableCheckbox` - DataTable with row selection via checkboxes
- `DataTableDraggable` - Draggable datatable with drag-and-drop reordering
- `DragHandle` - Drag handle component for draggable rows
- `DraggableRow` - Draggable row wrapper component
- `DataTableColumnHeader` - Column header with sorting controls
- `DataTableViewOptions` - View options dropdown for column visibility
- `DataTablePagination` - Pagination controls

## Usage Examples

### Basic DataTable

```typescript
import { DataTable } from "mingster.backbone";

<DataTable 
  columns={columns} 
  data={data} 
  searchKey="name"
  noSearch={false}
/>
```

### DataTable with Checkboxes

```typescript
import { DataTableCheckbox } from "mingster.backbone";

<DataTableCheckbox
  columns={columns}
  data={data}
  initiallySelected={{}}
  disabled={false}
  onRowSelectionChange={(selection) => console.log(selection)}
/>
```

### Draggable DataTable

```typescript
import { DataTableDraggable } from "mingster.backbone";

<DataTableDraggable
  columns={columns}
  data={data}
  rowSelectionEnabled={true}
  initialPageSize={10}
/>
```

## Dependencies

The shared package requires the following peer dependencies (already installed in both projects):

- `@tanstack/react-table` ^8.21.3
- `@dnd-kit/core` ^6.3.1 (for draggable table)
- `@dnd-kit/modifiers` ^9.0.0 (for draggable table)
- `@dnd-kit/sortable` ^10.0.0 (for draggable table)
- `@dnd-kit/utilities` ^3.2.2 (for draggable table)
- `@tabler/icons-react` ^3.35.0
- `react` ^19.2.0
- `react-dom` ^19.2.0

The components also expect the consuming project to provide:

- UI components from `@/components/ui/*`
- i18n hooks from `@/app/i18n/client` and `@/providers/i18n-provider`
- Utils from `@/lib/utils`

## Files Updated

### riben.life/web

- `tsconfig.json` - Added shared package path
- 37 component files - Updated imports
- 6 component files - Deleted (moved to shared package)

### mingster.com/web

- `tsconfig.json` - Added shared package path
- 2 component files - Updated imports
- 6 component files - Deleted (moved to shared package)

## Next Steps

1. Test both projects to ensure all DataTable components work correctly
2. Consider moving other shared components to similar shared packages
3. Update project documentation to reflect the new structure
4. Consider adding tests to the shared package

## Troubleshooting

### Import Errors

If you see TypeScript errors about not finding the shared package:

1. Ensure the path mapping in `tsconfig.json` is correct
2. Restart your TypeScript server (in VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server")
3. Check that the relative path is correct for your project location

### Module Resolution Issues

If imports don't resolve:

1. Check that the path in `tsconfig.json` points to the correct location
2. Verify the `src` directory exists in the shared package
3. Ensure all component files are exported in `src/index.ts`

## Maintenance

When making changes to DataTable components:

1. Edit files in `/Users/mtsai/projects/packages/mingster.backbone/src/`
2. Test changes in both riben.life and mingster.com projects
3. Document any breaking changes
4. Update the README.md if adding new components or features
