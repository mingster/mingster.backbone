# mingster.backbone

**Plug & play components for React web apps.**

A comprehensive library of reusable React components, utilities, hooks, and providers built for [mingster.com](https://mingster.com) and [riben.life](https://riben.life) projects. Based on Next.js 15, React 19, shadcn/ui, and Tailwind CSS.

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

Ensure these peer dependencies are installed in your project:

```bash
bun add react-spinners sonner react-hook-form @tanstack/react-table
```

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

Complete i18n setup with `i18next` and `react-i18next`.

#### Exports

- **`useTranslation`** - Translation hook
- **`useTranslationWithFallback`** - Translation with fallback
- **`i18nConfig`** - i18n configuration object
- **`i18n`** - i18next instance
- **`fallbackLng`, `languages`, `defaultNS`** - Settings

#### Example: Using i18n

```tsx
import { useTranslation } from "mingster.backbone";

function MyComponent() {
  const { t } = useTranslation("common");
  
  return <h1>{t("welcome")}</h1>;
}
```

---

### 7. Providers

React context providers for global state.

#### I18n Provider

- **`I18nProvider`** - Wraps app with i18n context
- **`useI18n`** - Hook to access i18n context

#### Theme Provider

- **`ThemeProvider`** - Next.js theme provider (next-themes)
- Automatic dark/light mode

#### Example: Using Providers

```tsx
import { ThemeProvider, I18nProvider } from "mingster.backbone";

function App({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ThemeProvider>
  );
}
```

---

## 📁 Package Structure

```text
mingster.backbone/
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── index.ts              # Main entry point with all exports
    ├── components/           # DataTable and UI components
    │   ├── dataTable*.tsx
    │   └── ui/              # shadcn/ui components
    ├── hooks/               # Custom React hooks
    ├── utils/               # Utility functions
    ├── lib/                 # Additional libraries
    ├── i18n/                # i18n configuration
    └── providers/           # React context providers
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

This is a **source package** that gets compiled by the consuming project's build system (Next.js/TypeScript).

### Scripts

```bash
bun run build         # Build with tsup
bun run dev           # Watch mode with tsc
```

### Build System

The package uses:

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
  useTheme,
  useMobile,
  useTranslation,
  formatDateTime,
  cn,
  logger,
} from "mingster.backbone";

function AdminDashboard({ data }) {
  const { t } = useTranslation("admin");
  const { theme } = useTheme();
  const isMobile = useMobile();

  return (
    <div className={cn("p-4", isMobile && "p-2")}>
      <h1>{t("dashboard")}</h1>
      
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
          <h2>Add New Item</h2>
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

## 🔗 Related Projects

- [mingster.com](https://mingster.com) - E-commerce platform
- [riben.life](https://riben.life) - Japanese language learning platform
