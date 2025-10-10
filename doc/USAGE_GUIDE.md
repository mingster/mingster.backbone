# mingster.backbone - Usage Guide

Quick reference guide for importing and using components from the mingster.backbone package.

## Import Patterns

### Option 1: Import from Main Entry Point (Recommended)

Import everything from the main entry point for simplicity:

```tsx
import {
  // DataTables
  DataTable,
  DataTableCheckbox,
  DataTableDraggable,
  
  // UI Components
  Button,
  Dialog,
  Card,
  Input,
  
  // Hooks
  useTheme,
  useMobile,
  useTranslation,
  
  // Utilities
  cn,
  formatDateTime,
  logger,
  
  // Providers
  ThemeProvider,
  I18nProvider
} from "mingster.backbone";
```

### Option 2: Direct Module Imports

Import directly from specific modules for better tree-shaking:

```tsx
// UI Components
import { Button } from "mingster.backbone/ui/button";
import { Dialog } from "mingster.backbone/ui/dialog";

// Hooks
import { useTheme } from "mingster.backbone/hooks/use-theme";
import { useMobile } from "mingster.backbone/hooks/use-mobile";

// Utils
import { formatDateTime } from "mingster.backbone/utils/datetime-utils";
import { cn } from "mingster.backbone/lib/utils";

// i18n
import { useTranslation } from "mingster.backbone/i18n/client";

// Providers
import { ThemeProvider } from "mingster.backbone/providers/theme-provider";
```

---

## Common Usage Examples

### 1. Setting Up Providers

Wrap your app with the necessary providers:

```tsx
// app/layout.tsx
import { ThemeProvider, I18nProvider } from "mingster.backbone";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Building a Data Table

```tsx
// app/admin/users/page.tsx
import { DataTable } from "mingster.backbone";
import { columns } from "./columns";

export default async function UsersPage() {
  const users = await fetchUsers();
  
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={users}
        searchKey="name"
      />
    </div>
  );
}
```

```tsx
// app/admin/users/columns.tsx
import { DataTableColumnHeader } from "mingster.backbone";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];
```

### 3. Creating a Form with UI Components

```tsx
"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  useTranslation,
} from "mingster.backbone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export function CreateUserDialog() {
  const { t } = useTranslation("admin");
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUser(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("add_user")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
```

### 4. Using Hooks

```tsx
"use client";

import {
  useTheme,
  useMobile,
  useTranslation,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "mingster.backbone";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isMobile = useMobile();
  const { t } = useTranslation("common");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={isMobile ? "sm" : "default"}>
          {t("theme")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### 5. Using Utilities

```tsx
import {
  cn,
  formatDateTime,
  logger,
  transformBigIntToNumbers,
} from "mingster.backbone";

// Combine CSS classes
const buttonClass = cn(
  "px-4 py-2 rounded",
  isPrimary && "bg-blue-500 text-white",
  isDisabled && "opacity-50 cursor-not-allowed"
);

// Format dates
const now = new Date();
const formatted = formatDateTime(now); // "2025-01-15 14:30"

// Server-side logging
logger.info("User action", { userId: "123", action: "login" });

// Transform BigInt/Decimal to numbers for JSON serialization
const data = await db.query();
transformBigIntToNumbers(data);
```

### 6. Internationalization (i18n)

```tsx
"use client";

import { useTranslation, useI18n } from "mingster.backbone";

export function WelcomeMessage() {
  const { t } = useTranslation("common");
  const { currentLanguage, changeLanguage } = useI18n();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("current_lang")}: {currentLanguage}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("zh")}>中文</button>
    </div>
  );
}
```

### 7. Using Geo IP

```tsx
import { useGeoIp } from "mingster.backbone";

export function LocationDetector() {
  const { country, city, loading } = useGeoIp();

  if (loading) return <div>Detecting location...</div>;

  return (
    <div>
      Location: {city}, {country}
    </div>
  );
}
```

### 8. Draggable DataTable

```tsx
import { DataTableDraggable } from "mingster.backbone";
import { useState } from "react";

export function ReorderableList() {
  const [items, setItems] = useState([
    { id: "1", name: "Item 1", order: 1 },
    { id: "2", name: "Item 2", order: 2 },
    { id: "3", name: "Item 3", order: 3 },
  ]);

  const handleReorder = async (newOrder: typeof items) => {
    setItems(newOrder);
    await saveOrder(newOrder);
  };

  return (
    <DataTableDraggable
      columns={columns}
      data={items}
      onReorder={handleReorder}
      rowIdKey="id"
    />
  );
}
```

---

## Component Categories

### DataTable Components

- `DataTable` - Basic table
- `DataTableCheckbox` - With row selection
- `DataTableDraggable` - With drag & drop
- `DataTableColumnHeader` - Sortable headers
- `DataTableViewOptions` - Column visibility
- `DataTablePagination` - Pagination controls

### Layout Components

- `Container` - Max-width container
- `Card` - Content card
- `Separator` - Divider
- `ScrollArea` - Custom scrollbars
- `ResizablePanel` - Resizable panels

### Form Components

- `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`
- `Input`, `Textarea`
- `Select`, `RadioGroup`, `Checkbox`, `Switch`
- `Slider`, `Calendar`
- `Button`, `IconButton`

### Navigation Components

- `NavigationMenu` - Nav menu
- `Breadcrumb` - Breadcrumbs
- `Tabs` - Tabbed interface
- `Pagination` - Page controls
- `Sidebar` - Collapsible sidebar

### Overlay Components

- `Dialog`, `Sheet`, `Drawer` - Modals
- `AlertDialog` - Confirmations
- `Popover`, `Tooltip`, `HoverCard`
- `DropdownMenu`, `Command`

### Feedback Components

- `Alert` - Inline alerts
- `Progress` - Progress bar
- `Loader`, `Skeleton` - Loading states
- `Toaster` - Toast notifications

---

## Utilities Reference

### Class Name Utilities

```tsx
import { cn } from "mingster.backbone";

cn("base-class", condition && "conditional-class");
```

### Date/Time Utilities

```tsx
import {
  formatDateTime,
  formatDateTimeFull,
  getNowTimeInTz,
  getUtcNow,
} from "mingster.backbone";
```

### Data Transform Utilities

```tsx
import {
  transformBigIntToNumbers,
  transformDecimalsToNumbers,
} from "mingster.backbone";
```

### GUID Utilities

```tsx
import { generateGuid, validateGuid } from "mingster.backbone";
```

### Image Utilities

```tsx
import {
  resizeImage,
  convertToBase64,
  optimizeImage,
} from "mingster.backbone";
```

---

## Advanced Usage

### Custom Theme Colors

```tsx
import { ThemeProvider } from "mingster.backbone";

<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  themes={["light", "dark", "custom"]}
>
  {children}
</ThemeProvider>
```

### Server-Side Logging

```tsx
import { logger } from "mingster.backbone";

// In Server Actions or API Routes
export async function createUser(data: UserData) {
  logger.info("Creating user", { email: data.email });
  
  try {
    const user = await db.user.create({ data });
    logger.info("User created successfully", { userId: user.id });
    return { success: true, user };
  } catch (error) {
    logger.error("Failed to create user", { error });
    return { success: false, error };
  }
}
```

### Client-Side Logging

```tsx
import { clientLogger } from "mingster.backbone";

// In Client Components
clientLogger.info("Button clicked", { buttonId: "submit" });
```

---

## TypeScript Support

All components and utilities are fully typed. Import types as needed:

```tsx
import type {
  DataTableDraggableProps,
  ButtonProps,
  DialogProps,
} from "mingster.backbone";
```

---

## Best Practices

1. **Use the main entry point** for most imports unless you need specific tree-shaking
2. **Wrap your app** with `ThemeProvider` and `I18nProvider` at the root
3. **Use `cn()`** for conditional class names with Tailwind
4. **Use `logger`** for server-side logging, `clientLogger` for client-side
5. **Transform BigInt/Decimal** before sending data to the client
6. **Use server components** by default, only use `"use client"` when needed
7. **Leverage hooks** like `useMobile`, `useTheme` for responsive/adaptive UIs

---

## Troubleshooting

### Import Errors

If you see import errors, ensure:
1. `mingster.backbone` path is mapped in `tsconfig.json`
2. All peer dependencies are installed
3. You're using compatible versions (React 19, Next.js 15)

### Type Errors

If types are not resolving:
1. Restart your TypeScript server
2. Run `bun install` to ensure dependencies are up to date
3. Check that `types` field in `package.json` is correct

### Component Not Rendering

1. Check if you need `"use client"` directive
2. Ensure all peer dependencies are installed
3. Verify Tailwind CSS is configured in your project

---

## Getting Help

- GitHub: [https://github.com/mingster/mingster.backbone](https://github.com/mingster/mingster.backbone)
- Documentation: See README.md
- Examples: Check `mingster.com` and `riben.life` projects

---

**Happy coding! 🚀**

