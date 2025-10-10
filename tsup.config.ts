import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	treeshake: true,
	minify: false,
	skipNodeModulesBundle: true,
	external: [
		"react",
		"react-dom",
		"next",
		"@radix-ui/*",
		"@tanstack/react-table",
		"@dnd-kit/*",
		"i18next",
		"react-i18next",
		"next-themes",
		"lucide-react",
		"@tabler/icons-react",
		"tailwindcss",
		"zod",
		"react-hook-form",
		"sonner",
		"react-spinners",
		"next-client-cookies",
	],
	esbuildOptions(options) {
		options.mainFields = ["module", "main"];
		options.conditions = ["import", "require"];
		// Ignore dynamic imports that can't be resolved (locale files)
		options.logOverride = options.logOverride || {};
		options.logOverride["dynamic-import"] = "silent";
	},
	// Bundle everything except externals
	bundle: true,
	onSuccess: 'echo "Build complete!"',
});

