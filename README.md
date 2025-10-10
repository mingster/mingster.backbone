# mingster.backbone

**Plug & play components for Next.js/React web apps.**

A comprehensive library of reusable React components, utilities, hooks, and providers built for Next.js 15, React 19, shadcn/ui, and Tailwind CSS v4 projects.

## 📊 What's Inside

- **100+ UI Components** - Complete shadcn/ui component library
- **DataTable Suite** - Advanced tables with sorting, filtering, pagination, drag-and-drop
- **20+ Utility Components** - Analytics, modals, markdown, currency, loaders, toasts
- **13 Custom Hooks** - Theme, mobile detection, geo-IP, cart, and more
- **15+ Utility Modules** - DateTime, geo-IP, image processing, GUID generation, encryption
- **Libraries** - Analytics, logging, business hours, reCAPTCHA
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

Or install from npm:

```bash
bun add mingster.backbone
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

#### Markdown Support

```bash
bun add react-markdown@^10.1.0 remark-gfm@^4.0.1
bun add rehype-highlight@^7.0.2 @uiw/react-md-editor@^4.0.8
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

### 1. Analytics Components

Google Analytics integration components for tracking user interactions.

#### Components

- **`PageViewTracker`** - Automatic page view tracking
- **`TrackedButton`** - Button with click tracking
- **`TrackedForm`** - Form with submission tracking
- **`GATest`** - Google Tag Manager test component
- **`AnalyticsExample`** - Complete analytics usage examples
- **`RokuAnalyticsDashboard`** - Analytics dashboard component

#### Usage

.env

``` ts
# google analytics
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
GTM_API_SECRET=
```

```tsx
import { PageViewTracker, TrackedButton, analytics } from "mingster.backbone";

// In your layout
<PageViewTracker />

// Track button clicks
<TrackedButton eventName="cta_click" eventParams={{ section: "hero" }}>
  Get Started
</TrackedButton>

// Manual tracking
analytics.trackCustomEvent("purchase_completed", { orderId: "123" });
```

---

### 2. DataTable Components

Advanced data table components built on `@tanstack/react-table` with sorting, filtering, pagination, and drag-and-drop support.

#### DataTable Components

- **`DataTable`** - Main datatable with sorting, filtering, and pagination
- **`DataTableCheckbox`** - Datatable with row selection via checkboxes
- **`DataTableDraggable`** - Draggable datatable with reordering (`@dnd-kit`)
- **`DataTableColumnHeader`** - Column header with sorting controls
- **`DataTableViewOptions`** - Dropdown for column visibility
- **`DataTablePagination`** - Pagination controls

---

### 3. Utility Components

Reusable utility components for common UI patterns.

- **`CollapseMenuButton`** - Collapsible menu button with animation
- **`Currency`** - Currency display component
- **`DisplayMarkDown`** - Markdown renderer with syntax highlighting
- **`MarkDownEditor`** - Markdown WYSIWYG editor
- **`HeadingWithBadge`** - Heading component with optional badge
- **`IOSVersionCheck`** - iOS version compatibility check
- **`Loader`** - Loading spinner component (uses `react-spinners`)
- **`NotMountSkeleton`** - Skeleton loading state for unmounted components  
- **`Scheduled`** - Conditionally render children after a specific timestamp
- **`SidebarToggle`** - Toggle button for collapsible sidebars
- **`ThemeToggler`** - Theme switcher toggle (light/dark mode)
- **`toaster`** - Toast notification component (uses `sonner`)
- **`toastSuccess`, `toastError`, `toastInfo`** - Toast helper functions
- **`TwBankCodeCombobox`** - Taiwan bank code selector combobox

#### Modals

- **`AlertModal`** - Generic alert/confirmation modal
- **`ConfirmModal`** - Confirmation dialog with custom labels

#### Usage

```tsx
import {
  DataTable,
  Loader,
  DisplayMarkDown,
  MarkDownEditor,
  Currency,
  AlertModal,
  toastSuccess,
} from "mingster.backbone";

// Display markdown
<DisplayMarkDown content={markdownString} />

// Edit markdown
<MarkDownEditor markdown={content} onPChange={setContent} />

// Show currency
<Currency amount={1234.56} currency="USD" />

// Confirmation modal
<AlertModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleDelete}
  loading={isDeleting}
  title="Delete Item?"
  description="This action cannot be undone."
  cancelLabel="Cancel"
  confirmLabel="Delete"
/>
```

---

### 4. UI Components (shadcn/ui)

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

### 5. Hooks

Custom React hooks for common functionality.

#### Available Hooks

- **`useCaptcha`** - Google reCAPTCHA integration
- **`useCart`** - Shopping cart state management
- **`useGeoIP`** - Geolocation based on IP address
- **`useGeoIPManual`** - Manual geo-IP fetching
- **`useGeoIPWithIP`** - Geo-IP with specific IP
- **`useIsHydrated`** - Client-side hydration detection
- **`useLang`** - Current language state
- **`useIsMobile`** - Mobile device detection
- **`useOrigin`** - Get current origin URL
- **`useStore`** - Zustand store integration
- **`useTheme`** - Theme switching (light/dark)
- **`useColorMode`** - Color mode utilities
- **`useLocalStorage`** - Persistent local storage state

#### Example: Using Hooks

```tsx
import { useTheme, useMobile, useGeoIP } from "mingster.backbone";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  const isMobile = useMobile();
  const { data: geoData, isLoading } = useGeoIP();

  if (isLoading) return <div>Loading location...</div>;

  return (
    <div>
      {isMobile ? "Mobile View" : "Desktop View"}
      <p>You're in: {geoData?.city}, {geoData?.country}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

---

### 6. Utilities

Comprehensive utility functions for common tasks.

#### Chinese Utilities (`chinese-utils`)

- Chinese text processing and validation
- Character encoding/decoding
- Pinyin conversion

#### DateTime Utilities (`datetime-utils`)

- `formatDateTime`, `formatDateTimeFull` - Date formatting
- `getNowTimeInTz`, `getDateInTz` - Timezone conversions
- `getUtcNow` - UTC timestamp
- `getUserCurrentTimeFromUtc` - Get user's current time from UTC
- `getOffsetHours`, `getTimezoneOffset` - Timezone offset calculations
- `getNumOfDaysInTheMonth` - Days in month calculation
- `getFirstDayOfWeek`, `addDays`, `addHours` - Date manipulation
- `calculateTrialEndUnixTimestamp` - Trial period calculations
- `toDateTime` - Unix timestamp to Date conversion

#### Geo IP (`geo-ip`)

- `getGeoLocation(ip?)` - IP geolocation lookup
- `getGeoLocationFromRequest(headers)` - Get geo from request
- `getClientIP(headers)` - Extract client IP from headers
- `getClientIPForServerAction()` - Server-side IP detection
- `isGeoError(result)` - Type guard for error results
- `getCountryCode`, `getTimezone`, `getCoordinates` - Data extractors
- `getFormattedLocation` - Format location string
- `isValidIP`, `isPrivateIP`, `isLocalhost` - IP validators
- `isUserInCountry`, `isUserInContinent` - Location checks
- `getDistance` - Calculate distance between coordinates
- `clearGeoCache`, `getGeoCacheStats` - Cache management

#### Edge Utilities (`edge-utils`)

- `transformBigIntToNumbers` - Convert BigInt to Number
- `transformDecimalsToNumbers` - Convert Decimal.js to Number

#### GUID Utilities (`guid-utils`)

- Generate and validate GUIDs/UUIDs
- Shortcode generation

#### Image Utilities (`image-utils`)

> **⚠️ Server-Side Only** - Uses `node:crypto`. Import directly:
> ```ts
> import { uploadToCloudinary, resizeAndCropImage } from "mingster.backbone/utils/image-utils"
> ```

- Image resizing and optimization
- Cloudinary integration
- Base64 encoding/decoding

#### Server Utilities (`server-utils`)

- Server-side only utilities
- Environment checks
- Configuration helpers

#### Example: Utility Functions

```tsx
import {
  formatDateTime,
  getGeoLocation,
  transformBigIntToNumbers,
  cn,
} from "mingster.backbone";

// Date formatting
const now = new Date();
const formatted = formatDateTime(now); // "2025-01-15 14:30"

// Geo-IP lookup
const location = await getGeoLocation("8.8.8.8");
if (!isGeoError(location)) {
  console.log(location.city, location.country);
}

// BigInt conversion
const data = transformBigIntToNumbers(bigIntData);

// Class names
const classes = cn("text-lg", "font-bold", conditional && "text-red-500");
```

---

### 7. Libraries

Additional functionality and integrations.

#### Analytics (`analytics`)

- Google Analytics integration
- Event tracking helpers
- `trackCustomEvent`, `trackVideoPlay`, `trackError`, etc.

#### Business Hours (`businessHours`)

- Business hours management
- Timezone-aware scheduling
- Open/closed status checking

#### Logging

- **`clientLogger`** - Client-side logging (browser-safe)

#### Motion (`motion`)

- Framer Motion utilities and presets
- Animation helpers

#### reCAPTCHA (`recaptcha-verify`)

.env

```ts 
NEXT_PUBLIC_RECAPTCHA=
GOOGLE_CLOUD_PROJECT_ID=
RECAPTCHA_SECRET_KEY=

//optional
GOOGLE_APPLICATION_CREDENTIALS=
```

> **⚠️ Server-Side Only** - Import directly:
> ```ts
> import { verifyRecaptcha } from "mingster.backbone/lib/recaptcha-verify"
> ```

- Server-side reCAPTCHA verification
- Google Cloud reCAPTCHA Enterprise integration

#### Taiwan Zip Code (`useTwZipCode2`)

- Taiwan city/district/zip code data
- Address validation
- `useTwZipCode2` hook

#### Scroll Direction (`use-scroll-direction`)

- Detect scroll direction (up/down)
- Threshold-based detection
- `useScrollDirection` hook

#### Class Names (`utils`)

- **`cn`** - Merge Tailwind CSS classes with `clsx` and `tailwind-merge`

#### Example: Using Libraries

```tsx
import { clientLogger, cn, analytics } from "mingster.backbone";

// Client-side logging (browser-safe)
clientLogger.info("User clicked button", { userId: "123" });

// Track analytics
analytics.trackCustomEvent("button_click", { page: "home" });

// Server-side logging (in server component/action)
// import logger from "mingster.backbone/lib/logger";
// logger.info("Server action executed", { userId: "123" });
```

---

### 8. Server-Side Code

Some utilities require Node.js APIs and are **NOT exported** in the main package entry point to prevent client-side bundling errors.

#### Server-Only Imports

```typescript
// ✅ Server Components, API Routes, Server Actions
import logger from "mingster.backbone/lib/logger"
import { verifyRecaptcha } from "mingster.backbone/lib/recaptcha-verify"
import { uploadToCloudinary } from "mingster.backbone/utils/image-utils"

// ❌ DO NOT import in client components
// import logger from "mingster.backbone" // This won't work
```

#### Why?

- **`logger`** - Uses `pino` with Node.js streams
- **`verifyRecaptcha`** - Uses `@google-cloud/recaptcha-enterprise` with gRPC
- **`image-utils`** - Uses `node:crypto` for Cloudinary signatures

#### Client-Side Alternatives

- Use **`clientLogger`** for browser logging
- Use **`analytics`** for client-side tracking

---

### 9. Internationalization (i18n)

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

### 10. Providers

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

### 11. Types

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
├── dist/                     # Built output (generated)
│   ├── index.js              # ESM bundle (311 KB)
│   ├── index.cjs             # CommonJS bundle (332 KB)
│   └── index.d.ts            # Type definitions (65 KB)
└── src/
    ├── index.ts              # Main entry point with all exports
    ├── components/           # React components
    │   ├── analytics/            # Analytics components (6)
    │   ├── modals/               # Modal components (2)
    │   ├── cliploader.tsx        # Loader component
    │   ├── collapse-menu-button.tsx
    │   ├── currency.tsx
    │   ├── dataTable*.tsx        # DataTable components (6)
    │   ├── datatable-draggable.tsx
    │   ├── display-mark-down.tsx
    │   ├── editor-component.tsx  # Markdown editor
    │   ├── heading.tsx
    │   ├── ios-version-check.tsx
    │   ├── not-mount-skeleton.tsx
    │   ├── scheduled.tsx
    │   ├── sidebar-toggle.tsx
    │   ├── theme-toggler.tsx
    │   ├── toaster.tsx
    │   ├── tw-bankcode-combobox.tsx
    │   └── ui/                   # shadcn/ui components (100+)
    ├── hooks/                # Custom React hooks (13)
    │   ├── use-geo-ip.tsx        # Geo-IP hooks
    │   └── ...
    ├── utils/                # Utility functions (15+)
    │   ├── datetime-utils.ts     # Date/time utilities
    │   ├── geo-ip.ts             # Geo-IP utilities
    │   ├── edge-utils.ts         # BigInt/Decimal transforms
    │   └── ...
    ├── lib/                  # Additional libraries
    │   ├── analytics.ts          # Google Analytics
    │   ├── businessHours/        # Business hours logic
    │   ├── client-logger.ts      # Client logging
    │   ├── logger.ts             # Server logging (NOT exported)
    │   ├── recaptcha-verify.ts   # reCAPTCHA (NOT exported)
    │   ├── useTwZipCode2/        # Taiwan zip code data
    │   └── ...
    ├── i18n/                 # i18n config (not exported, for reference)
    ├── providers/            # React context providers
    │   └── theme-provider.tsx    # Theme provider
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
  "tailwindcss": "^4.1.14",
  "lucide-react": "^0.544.0"
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

# Publishing (see BUILD.md)
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
  // Analytics
  PageViewTracker,
  TrackedButton,
  analytics,
  
  // Data Tables
  DataTable,
  
  // UI Components
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  
  // Utility Components
  Loader,
  DisplayMarkDown,
  Currency,
  AlertModal,
  
  // Hooks
  useTheme,
  useMobile,
  useGeoIP,
  
  // Utilities
  formatDateTime,
  getGeoLocation,
  transformBigIntToNumbers,
  cn,
  
  // Toast
  toastSuccess,
  toastError,
} from "mingster.backbone";

function AdminDashboard({ data, isLoading }) {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const { data: geoData } = useGeoIP();

  const handleAddItem = async (item) => {
    try {
      await saveItem(item);
      toastSuccess({ description: "Item added successfully!" });
      analytics.trackCustomEvent("item_added", { itemId: item.id });
    } catch (error) {
      toastError({ description: "Failed to add item" });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className={cn("p-4", isMobile && "p-2")}>
      <PageViewTracker />
      
      <h1>Admin Dashboard</h1>
      <p className="text-muted-foreground">
        Last updated: {formatDateTime(new Date())}
      </p>
      {geoData && <p>Location: {geoData.city}, {geoData.country}</p>}
      
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
      />
      
      <Dialog>
        <DialogTrigger asChild>
          <TrackedButton eventName="add_item_click">
            Add Item
          </TrackedButton>
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

## 📦 Repository

[https://github.com/mingster/mingster.backbone](https://github.com/mingster/mingster.backbone)

---
