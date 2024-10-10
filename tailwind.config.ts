import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  screens: {
		'sm': '640px',
		'md': '860px', 
		'lg': '1085px',
		'xl': '1280px',
		'2xl': '1536px',
	  },
	  extend: {
		colors: {
		  background: 'var(--background)',
		  foreground: 'var(--foreground)',
		  primary: '#003E39',
		  secondary: '#001F1D',
		  'light-green': '#E5EBEB',
		  gray: '#484A4D',
		  'gray-bg': '#F5F7FA',
		  'gray-secondary': '#787B80',
		  'gray-from': '#F0F0F0',
		  'gray-bg-sheet': '#E6E8EB',
		  text: '#000C0B',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
  export default config;