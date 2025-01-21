import type { Config } from "tailwindcss";

const globalColors = {
	brand: {
		DEFAULT: "#FFCE74",
		dark: "#7C2D18",
	},
	neutral: {
		50: "#FFF3DC",
		100: "#CFA49B",
		200: "#9B5F4F",
		300: "#7C2D18",
	},
	error: "#F24545",
};
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: globalColors,
			backgroundColor: {
				"brand-primary": globalColors.brand.DEFAULT,
				"brand-primary-hover": globalColors.brand.dark,
				"neutral-primary": globalColors.neutral[50],
			},

			borderColor: {
				"brand-primary": globalColors.brand.dark,
				"neutral-primary": globalColors.neutral[100],
			},

			textColor: {
				"brand-onprimary": globalColors.brand.dark,
				"neutral-primary": globalColors.neutral[300],
				"neutral-secondary": globalColors.neutral[200],
				"neutral-error": globalColors.error,
			},
		},
	},
	plugins: [],
} satisfies Config;
