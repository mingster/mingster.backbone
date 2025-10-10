# mingster.backbone

**Plug & play components for Next.js/React web apps.**

A comprehensive library of reusable React components, utilities, hooks, and providers built for Next.js 15, React 19, shadcn/ui, and Tailwind CSS v4 projects.

## 📊 What's Inside

- **100+ UI Components** - Complete shadcn/ui component library
- **DataTable Suite** - Advanced tables with sorting, filtering, pagination, drag-and-drop
- **11 Custom Hooks** - Theme, mobile detection, geo-IP, cart, and more
- **Utility Components** - Loader, toast notifications, theme toggler, Taiwan bank selector
- **10+ Utility Modules** - DateTime, image processing, GUID generation, encryption
- **Libraries** - Analytics, logging (Pino), business hours, reCAPTCHA
- **TypeScript** - Fully typed with comprehensive type definitions
- **1400+ Taiwan Bank Codes** - Complete bank data with types

---

## 📦 Installation

This package is designed to be used in a monorepo structure. Add it to your project's dependencies:

```json
{
  "dependencies": {
    "mingster.backbone": "workspace:*"
  }
}
```

### Required Dependencies

This package has peer dependencies that must be installed in your consuming project.

#### Core Dependencies

```bash
bun add react@^19.2.0 react-dom@^19.2.0 next@^15.5.4
```

#### UI & Styling

```bash
bun add tailwindcss@^4.1.14 lucide-react@^0.544.0 @tabler/icons-react@^3.35.0
bun add next-themes@^0.4.6 cmdk@1.1.1 sonner@^2.0.7 vaul@^1.1.2
```

#### Radix UI Components

```bash
bun add @radix-ui/react-accordion@^1.2.12 @radix-ui/react-alert-dialog@^1.1.15
bun add @radix-ui/react-aspect-ratio@^1.1.7 @radix-ui/react-avatar@^1.1.10
bun add @radix-ui/react-checkbox@^1.3.3 @radix-ui/react-collapsible@^1.1.12
bun add @radix-ui/react-dialog@^1.1.15 @radix-ui/react-dropdown-menu@^2.1.16
bun add @radix-ui/react-hover-card@^1.1.15 @radix-ui/react-label@^2.1.7
bun add @radix-ui/react-navigation-menu@^1.2.14 @radix-ui/react-popover@^1.1.15
bun add @radix-ui/react-progress@^1.1.7 @radix-ui/react-radio-group@^1.3.8
bun add @radix-ui/react-scroll-area@^1.2.10 @radix-ui/react-select@^2.2.6
bun add @radix-ui/react-separator@^1.1.7 @radix-ui/react-slider@^1.3.6
bun add @radix-ui/react-slot@^1.2.3 @radix-ui/react-switch@^1.2.6
bun add @radix-ui/react-tabs@^1.1.13 @radix-ui/react-toggle@^1.1.10
bun add @radix-ui/react-toggle-group@^1.1.11 @radix-ui/react-tooltip@^1.2.8
```

#### Forms & Data Tables

```bash
bun add react-hook-form@^7.64.0 @hookform/resolvers@^5.2.2
bun add @tanstack/react-table@^8.21.3 input-otp@^1.4.2
bun add react-day-picker@8.10.1 date-fns@^4.1.0
```

#### Drag & Drop

```bash
bun add @dnd-kit/core@^6.3.1 @dnd-kit/sortable@^10.0.0
bun add @dnd-kit/modifiers@^9.0.0 @dnd-kit/utilities@^3.2.2
```

#### Internationalization

```bash
bun add i18next@^25.5.3 react-i18next@^15.7.4
bun add i18next-browser-languagedetector@^8.2.0
bun add i18next-resources-to-backend@^1.2.1
```

#### Utilities & Misc

```bash
bun add axios@^1.12.2 decimal.js@^10.6.0 crypto-js@^4.2.0
bun add react-spinners@^0.17.0 react-resizable-panels@^3.0.6
bun add react-image-file-resizer@^0.4.8 embla-carousel-react@^8.6.0
bun add recharts@^2.15.4 pino@^9.13.1 pino-pretty@^13.1.1
```

#### Optional (Auth & Analytics)

```bash
bun add @daveyplate/better-auth-ui@^3.2.5 @next/third-parties@^15.5.4
bun add @google-cloud/recaptcha-enterprise@^6.3.0
bun add @wojtekmaj/react-recaptcha-v3@^0.1.4 react-google-recaptcha@^3.1.0
```

> **Note**: You may not need all dependencies. Install only what your application uses. The package will warn about missing peer dependencies when needed.

#### TypeScript Configuration

Configure TypeScript path mapping in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "mingster.backbone": ["../../packages/mingster.backbone/src"]
    }
  }
}
```

---

## 🚀 Features

### 1. DataTable Components

Advanced data table components built on `@tanstack/react-table` with sorting, filtering, pagination, and drag-and-drop support.

#### Components

- **`DataTable`** - Main datatable with sorting, filtering, and pagination
- **`DataTableCheckbox`** - Datatable with row selection via checkboxes
- **`DataTableDraggable`** - Draggable datatable with reordering (`@dnd-kit`)
- **`DataTableColumnHeader`** - Column header with sorting controls
- **`DataTableViewOptions`** - Dropdown for column visibility
- **`DataTablePagination`** - Pagination controls

### 1a. Utility Components

Reusable utility components for common UI patterns.

- **`Loader`** - Loading spinner component (uses `react-spinners`)
- **`NotMountSkeleton`** - Skeleton loading state for unmounted components  
- **`Scheduled`** - Conditionally render children after a specific timestamp
- **`SidebarToggle`** - Toggle button for collapsible sidebars
- **`ThemeToggler`** - Theme switcher toggle (light/dark mode)
- **`toaster`** - Toast notification component (uses `sonner`)
- **`toastSuccess`, `toastError`, `toastInfo`** - Toast helper functions
- **`TwBankCodeCombobox`** - Taiwan bank code selector combobox

#### Usage

```tsx
import { DataTable, Loader, toaster, toastSuccess } from "mingster.backbone";

function MyPage() {
  return <DataTable columns={columns} data={data} searchKey="name" />;
}
```

---

### 2. UI Components (shadcn/ui)

Complete set of accessible, customizable UI components based on Radix UI primitives and styled with Tailwind CSS.

#### Layout & Structure

- `Container` - Responsive container with max-width
- `Separator` - Visual divider
- `ResizablePanel`, `ResizableHandle` - Resizable panels
- `ScrollArea` - Custom scrollbars

#### Navigation

- `Breadcrumb` - Breadcrumb navigation
- `NavigationMenu` - Accessible navigation menu
- `Pagination` - Page navigation controls
- `Tabs` - Tabbed interfaces
- `Sidebar` - Collapsible sidebar with context

#### Data Display

- `Table` - Semantic table components
- `Card` - Content container
- `Badge` - Status/label badges
- `Avatar` - User avatars with fallback
- `AspectRatio` - Maintain aspect ratios
- `Chart` - Chart components (with recharts)

#### Forms & Inputs

- `Form` - Form context and validation (react-hook-form)
- `Input`, `Textarea` - Text inputs
- `Select`, `RadioGroup`, `Checkbox`, `Switch` - Selection controls
- `Slider` - Range slider
- `Calendar` - Date picker
- `InputOTP` - One-time password input

#### Overlays & Feedback

- `Dialog`, `Sheet`, `Drawer` - Modal overlays
- `AlertDialog` - Confirmation dialogs
- `Popover`, `HoverCard`, `Tooltip` - Contextual overlays
- `DropdownMenu` - Action menus
- `Command` - Command palette
- `Alert` - Inline alerts
- `Progress` - Progress bars
- `Loader`, `Skeleton` - Loading states
- `Toaster` - Toast notifications (sonner)

#### Interactive

- `Button`, `IconButton` - Buttons with variants
- `Toggle`, `ToggleGroup` - Toggle controls
- `Accordion`, `Collapsible` - Expandable content
- `Carousel` - Image/content carousel

#### Example: Using UI Components

```tsx
import { Button, Dialog, DialogTrigger, DialogContent } from "mingster.backbone";

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <h2>Dialog Content</h2>
      </DialogContent>
    </Dialog>
  );
}
```

---

### 3. Hooks

Custom React hooks for common functionality.

#### Available Hooks

- **`useCaptcha`** - Google reCAPTCHA integration
- **`useCart`** - Shopping cart state management
- **`useGeoIp`** - Geolocation based on IP
- **`useHydrated`** - Client-side hydration detection
- **`useLang`** - Current language state
- **`useMobile`** - Mobile device detection
- **`useOrigin`** - Get current origin URL
- **`useStore`** - Zustand store integration
- **`useTheme`** - Theme switching (light/dark)
- **`useColorMode`** - Color mode utilities
- **`useLocalStorage`** - Persistent local storage state

#### Example: Using Hooks

```tsx
import { useTheme, useMobile } from "mingster.backbone";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  const isMobile = useMobile();

  return (
    <div>
      {isMobile ? "Mobile View" : "Desktop View"}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

---

### 4. Utilities

Comprehensive utility functions for common tasks.

#### Chinese Utilities (`chinese-utils`)

- Chinese text processing and validation
- Character encoding/decoding
- Pinyin conversion

#### DateTime Utilities (`datetime-utils`)

- `formatDateTime`, `formatDateTimeFull` - Date formatting
- `getNowTimeInTz`, `getDateInTz` - Timezone conversions
- `getUtcNow` - UTC timestamp
- `getNumOfDaysInTheMonth` - Days in month calculation

#### Edge Utilities (`edge-utils`)

- Edge runtime utilities for Next.js
- Request/response helpers

#### Geo IP (`geo-ip`)

- IP geolocation lookup
- Country/city detection
- MaxMind GeoIP2 integration

#### GUID Utilities (`guid-utils`)

- Generate and validate GUIDs/UUIDs
- Shortcode generation

#### Image Utilities (`image-utils`)

- Image resizing and optimization
- Base64 encoding/decoding
- Format conversion

#### Server Utilities (`server-utils`)

- Server-side only utilities
- Environment checks
- Configuration helpers

#### General Utilities (`utils`)

- `transformDecimalsToNumbers` - Convert Decimal.js to numbers
- `transformBigIntToNumbers` - Convert BigInt to numbers
- `getRandomNum` - Generate random numbers
- `GetSubscriptionLength` - Calculate subscription durations
- `highlight_css` - CSS highlighting utility

#### Example: Utility Functions

```tsx
import { formatDateTime, generateGuid, cn } from "mingster.backbone";

const now = new Date();
const formatted = formatDateTime(now); // "2025-01-15 14:30"
const id = generateGuid();
const classes = cn("text-lg", "font-bold", conditional && "text-red-500");
```

---

### 5. Libraries

Additional functionality and integrations.

#### Analytics (`analytics`)

- Google Analytics integration
- Event tracking helpers

#### Business Hours (`businessHours`)

- Business hours management
- Timezone-aware scheduling

#### Logging

- **`logger`** - Server-side logging (Pino)
- **`clientLogger`** - Client-side logging

#### Crypto Utilities (`crypto-util`)

- Encryption/decryption helpers
- Hashing utilities

#### Motion (`motion`)

- Framer Motion utilities and presets

#### reCAPTCHA (`recaptcha-verify`)

- Server-side reCAPTCHA verification
- `verifyRecaptcha` function

#### Taiwan Zip Code (`useTwZipCode2`)

- Taiwan city/district/zip code data
- Address validation

#### Scroll Direction (`use-scroll-direction`)

- Detect scroll direction (up/down)
- Threshold-based detection

#### Class Names (`utils`)

- **`cn`** - Merge Tailwind CSS classes with `clsx` and `tailwind-merge`

#### Example: Using Libraries

```tsx
import { logger, cn, verifyRecaptcha } from "mingster.backbone";

// Server-side logging
logger.info("User logged in", { userId: "123" });

// Verify reCAPTCHA
const isValid = await verifyRecaptcha(token);
```

---

### 6. Internationalization (i18n)

> **⚠️ Note**: i18n infrastructure is **NOT exported** in the built package due to project-specific locale file dependencies. The `src/i18n/` folder is included for reference, but you'll need to copy and configure it manually in your project with your own locale JSON files.

#### What's Included (For Reference Only)

- `useTranslation` - Translation hook (not exported)
- `i18nConfig` - i18n configuration (not exported)
- `i18n` - i18next instance (not exported)
- `fallbackLng`, `languages`, `defaultNS` - Settings (not exported)

#### Setup in Your Project

1. Copy `src/i18n/` to your project
2. Create your locale files in `src/i18n/locales/{lang}/{namespace}.json`
3. Configure in your app layout

See [`src/i18n/locales/README.md`](./src/i18n/locales/README.md) for detailed setup instructions.

---

### 7. Providers

React context providers for global state.

#### Theme Provider

- **`ThemeProvider`** - Next.js theme provider (next-themes)
- Automatic dark/light mode switching
- System theme detection

#### Example: Using Providers

```tsx
import { ThemeProvider } from "mingster.backbone";

function App({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

> **Note**: `I18nProvider` is not exported. Set up i18n manually in your project following the instructions above.

---

### 8. Types

TypeScript type definitions and data.

#### Taiwan Bank Codes

- **`TwBankCode`** - Type definition for Taiwan bank codes
- **`TwBankCodes`** - Complete array of Taiwan bank data (1400+ entries)

#### Example: Using Types

```tsx
import { type TwBankCode, TwBankCodes } from "mingster.backbone";

// Filter banks
const commercialBanks = TwBankCodes.filter(bank => 
  bank.Short.includes("銀行")
);

// Type-safe bank data
const bank: TwBankCode = {
  Key: "台灣銀行",
  Short: "台銀", 
  Value: "004"
};
```

---

## 📁 Package Structure

```text
mingster.backbone/
├── package.json              # Package configuration & peer dependencies
├── tsconfig.json             # TypeScript configuration
├── tsup.config.ts            # Build configuration
├── README.md                 # This file
├── BUILD.md                  # Build system documentation
├── doc/
│   ├── CHANGELOG.md          # Version history & features
│   ├── COMPONENT_MIGRATION.md # Migration guide for new components
│   ├── EXPORT_SUMMARY.md     # Complete export reference
│   └── PUBLISHING_CHECKLIST.md # Publishing workflow
├── dist/                     # Built output (generated)
│   ├── index.js              # ESM bundle
│   ├── index.cjs             # CommonJS bundle
│   └── index.d.ts            # Type definitions
└── src/
    ├── index.ts              # Main entry point with all exports
    ├── components/           # React components
    │   ├── cliploader.tsx        # Loader component
    │   ├── dataTable*.tsx        # DataTable components
    │   ├── not-mount-skeleton.tsx
    │   ├── scheduled.tsx
    │   ├── sidebar-toggle.tsx
    │   ├── theme-toggler.tsx
    │   ├── toaster.tsx
    │   ├── tw-bankcode-combobox.tsx
    │   └── ui/                   # shadcn/ui components (100+ files)
    ├── hooks/                # Custom React hooks (11 hooks)
    ├── utils/                # Utility functions (10 modules)
    ├── lib/                  # Additional libraries
    │   ├── analytics.ts          # Google Analytics
    │   ├── businessHours/        # Business hours logic
    │   ├── client-logger.ts      # Client logging
    │   ├── logger.ts             # Server logging (Pino)
    │   ├── useTwZipCode2/        # Taiwan zip code data
    │   └── ...
    ├── i18n/                 # i18n config (not exported, for reference)
    │   ├── client.ts
    │   ├── config.ts
    │   ├── settings.ts
    │   └── locales/              # Placeholder locale files
    ├── providers/            # React context providers
    │   └── theme-provider.tsx    # Theme provider (exported)
    └── types/                # TypeScript types
        └── bank3.ts              # Taiwan bank codes
```

---

## 🔧 Dependencies

This package declares all its dependencies as **peer dependencies**, meaning your consuming project must install them. This ensures version consistency and avoids duplication.

### Required Peer Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "next": "^15.5.4",
  "@tanstack/react-table": "^8.21.3",
  "@radix-ui/react-*": "^1.x || ^2.x",
  "tailwindcss": "^4.1.14"
}
```

See `package.json` for the complete list.

---

## 🛠️ Development

This package can be used in two ways:

1. **As a workspace source package** - TypeScript source files are compiled by your Next.js project
2. **As a published npm package** - Pre-built with tsup for distribution

### Available Scripts

```bash
# Code Quality
bun run format        # Format code with Biome
bun run lint          # Check code quality
bun run lint:fix      # Auto-fix linting issues
bun run typecheck     # TypeScript type checking

# Building (for npm publishing)
bun run build         # Build with tsup (ESM + CJS + types)
bun run dev           # Watch mode for development
bun run clean         # Clean build artifacts

# Publishing (see PUBLISHING_CHECKLIST.md)
npm publish --access public
```

### Build System

For npm publishing, the package uses:

- **TypeScript** for type checking
- **tsup** for production builds
- **Biome** for linting and formatting

---

## 📚 Usage Examples

### Complete Example

```tsx
import {
  DataTable,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  Loader,
  toastSuccess,
  toastError,
  useTheme,
  useMobile,
  formatDateTime,
  cn,
} from "mingster.backbone";

function AdminDashboard({ data, isLoading }) {
  const { theme } = useTheme();
  const isMobile = useMobile();

  const handleAddItem = async (item) => {
    try {
      await saveItem(item);
      toastSuccess({ description: "Item added successfully!" });
    } catch (error) {
      toastError({ description: "Failed to add item" });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className={cn("p-4", isMobile && "p-2")}>
      <h1>Admin Dashboard</h1>
      <p className="text-muted-foreground">
        Last updated: {formatDateTime(new Date())}
      </p>
      
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
      />
      
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Item</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add New Item</DialogTitle>
          {/* Your form here */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

---

## 📄 License

MIT

## 👤 Author

mingster - [https://mingster.com](https://mingster.com)

---
