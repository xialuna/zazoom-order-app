/** @type {import('tailwindcss').Config} */
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

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',   // Add paths where Tailwind classes are used
    './src/components/**/*.{js,ts,jsx,tsx}', // Add paths for components
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
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
        "text-onbrand-primary": globalColors.neutral[50],
        "neutral-primary": globalColors.neutral[300],
        "neutral-secondary": globalColors.neutral[200],
        "neutral-error": globalColors.error,
      },
    },
  },
  plugins: [],
}
