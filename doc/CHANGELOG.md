# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-01-15

### Added

- **Complete Package Reorganization**
  - Comprehensive export system with all components, hooks, utilities, and providers
  - Organized exports by category in main `index.ts` entry point
  - Granular exports in `package.json` for tree-shaking optimization

- **DataTable Components**
  - `DataTable` - Main datatable with sorting, filtering, and pagination
  - `DataTableCheckbox` - Row selection support
  - `DataTableDraggable` - Drag & drop reordering with @dnd-kit
  - `DataTableColumnHeader` - Sortable column headers
  - `DataTableViewOptions` - Column visibility controls
  - `DataTablePagination` - Pagination controls

- **Utility Components** (NEW)
  - `Loader` - Loading spinner using react-spinners
  - `NotMountSkeleton` - Skeleton loading state
  - `Scheduled` - Conditional rendering based on timestamp
  - `SidebarToggle` - Sidebar collapse/expand toggle
  - `ThemeToggler` - Theme switcher (light/dark mode)
  - `toaster` - Toast notification system (sonner)
  - `toastSuccess`, `toastError`, `toastInfo` - Toast helper functions
  - `TwBankCodeCombobox` - Taiwan bank code selector combobox

- **UI Components (shadcn/ui)**
  - Complete set of 50+ accessible UI components based on Radix UI
  - All components styled with Tailwind CSS
  - Includes: Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, Container, Dialog, Drawer, Dropdown Menu, Form, Heading, Hover Card, Icon, IconButton, Input, InputOTP, Label, Loader, Modal, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable Panels, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toggle, Tooltip, and more

- **Custom Hooks**
  - `useCaptcha` - Google reCAPTCHA integration
  - `useCart` - Shopping cart state management
  - `useGeoIP` - IP-based geolocation (with variants)
  - `useIsHydrated` - Client-side hydration detection
  - `useLang` - Language state management
  - `useIsMobile` - Mobile device detection
  - `useOrigin` - Current origin URL
  - `useStore` - Zustand store integration
  - `useTheme` - Theme switching
  - `useColorMode` - Color mode utilities
  - `useLocalStorage` - Persistent local storage

- **Utilities**
  - **Chinese Utils**: Text processing, encoding, Pinyin conversion
  - **DateTime Utils**: Formatting, timezone conversions, calculations
  - **Geo IP Utils**: IP geolocation, country/city detection
  - **GUID Utils**: UUID generation and validation
  - **Image Utils**: Resizing, optimization, format conversion
  - **Server Utils**: Server-side only utilities
  - **General Utils**: Data transformations, random numbers, subscriptions

- **Libraries**
  - **Analytics**: Google Analytics integration
  - **Business Hours**: Timezone-aware scheduling
  - **Logging**: Server (Pino) and client-side logging
  - **Crypto Utils**: Encryption/decryption helpers
  - **Motion**: Framer Motion utilities
  - **reCAPTCHA**: Server-side verification
  - **Taiwan Zip Code**: City/district/zip code data
  - **Scroll Direction**: Scroll direction detection
  - **Class Names (`cn`)**: Tailwind CSS class merging

- **Internationalization (i18n)**
  - Complete i18next setup
  - `useTranslation` hook
  - Configuration and settings exports
  - Browser language detection

- **Providers**
  - `I18nProvider` - i18n context provider
  - `ThemeProvider` - next-themes integration
  - `useI18n` - i18n context hook

- **Types** (NEW)
  - `TwBankCode` - Taiwan bank code type definition
  - `TwBankCodes` - Complete Taiwan bank codes data array (1400+ banks)

- **Documentation**
  - Comprehensive README with usage examples
  - USAGE_GUIDE with detailed examples
  - COMPONENT_MIGRATION guide for migrating from local components
  - EXPORT_SUMMARY documenting all exports and import methods
  - CHANGELOG for version tracking
  - Type definitions for all exports

### Changed

- **Package Structure**
  - Moved all components to `src/components/` subdirectory
  - Organized hooks in `src/hooks/`
  - Utilities in `src/utils/`
  - Libraries in `src/lib/`
  - i18n setup in `src/i18n/`
  - Providers in `src/providers/`

- **Package Configuration**
  - Added comprehensive `exports` field for granular imports (25+ export paths)
  - Declared all dependencies as `peerDependencies`
  - Added `react-spinners` peer dependency for Loader component
  - Updated build scripts
  - Added Biome configuration
  - Added types export path for Taiwan bank codes

- **Import Paths**
  - Converted all internal `@/` imports to relative paths
  - Fixed all path resolution issues within the package
  - Added TypeScript path mapping documentation

### Fixed

- All TypeScript linting errors resolved
- Markdown linting warnings in documentation fixed
- Export naming consistency issues resolved
- Duplicate export conflicts eliminated

### Technical Details

- **Package Name**: `mingster.backbone`
- **Version**: 1.0.0
- **License**: MIT
- **Author**: mingster
- **Homepage**: <https://mingster.com/packages/mingster.backbone>

### Dependencies

- React 19.2.0+
- Next.js 15.5.4+
- Tailwind CSS 4.1.14+
- @tanstack/react-table 8.21.3+
- Multiple @radix-ui packages
- i18next and react-i18next
- And many more peer dependencies (see package.json)

### Breaking Changes

None (initial release)

---

## [Future Releases]

### Planned Features

- Additional UI components as needed
- Enhanced TypeScript types
- More comprehensive examples
- Performance optimizations
- Additional utility functions

**Note**: This is the initial release of the `mingster.backbone` package, consolidating shared components from mingster.com and riben.life projects.

