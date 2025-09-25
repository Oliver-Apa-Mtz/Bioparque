/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#272D2D",
				secundario: "#CEC5A8",
				terciario: "#527752",
				white: "#FFFFFF",
				red: "#9F2942",
				gray: "#C2CBCB",
				grayLight: "#F3F6F3",
				footer: "#1B2020",
				green: "#314B32",
				brown: "#605555",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
	},
	plugins: [],
};
