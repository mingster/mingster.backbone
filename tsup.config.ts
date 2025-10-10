import { defineConfig } from "tsup";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives"

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	splitting: true,
	cjsInterop: true,
	skipNodeModulesBundle: true,
	treeshake: false,
	metafile: true,
	esbuildPlugins: [
		preserveDirectivesPlugin({
			directives: ["use client", "use strict"],
			include: /\.(js|ts|jsx|tsx)$/,
			exclude: /node_modules/
		})
	],
	dts: true,
	sourcemap: true,
	clean: true,
	minify: false,
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
		"next-client-cookies",
		"lucide-react",
		"lucide-react/dynamicIconImports",
		"@tabler/icons-react",
		"tailwindcss",
		"zod",
		"react-hook-form",
		"sonner",
		"react-spinners",
		"pino",
		"pino-pretty"
	],
	// Bundle everything except externals
	bundle: true,
});