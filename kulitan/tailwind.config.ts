import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				miniPhone: "400px",
				tablet: "640px",
				laptop: "1024px",
				desktop: "1280px",
			},
			colors: {
				dark: "#001C30",
				disabled: "#949BA1",
				white: "#FFFFFF",
				blue: "#4391DA",
				light: "#F8FAFC",
				success: "#609876",
				danger: "#9F3030",
				warning: "#FFD700",
				primary: {
					10: "#575655",
					50: "#F9F8F8",
					100: "#EAE5E5",
					200: "#DACACA",
					300: "#C29494",
					400: "#B25252",
					500: "#882A2A",
					700: "#611616",
					900: "#500B0B",
				},
				secondary: {
					50: "#F8F6F5",
					100: "#E8E0DD",
					200: "#D9C5BC",
					300: "#BFA89E",
					400: "#A69083",
					500: "#857064",
				},
				card: "rgb(57,72,103,100%)",
			},
			fontFamily: {
				noland:["noland"],
				kafeine:["kafeine"],
				kulitan: ["kulitan"],
				coolvetica:["coolvetica"],
				blackout2am:["blackout2am"],
				blackoutmid:["blackoutmid"],
				blackoutsun:["blackoutsun"],
				ls1:["ls1"],
				ls2:["ls2"],
				ls3:["ls3"],
				ls4:["ls4"],
				ls5:["ls5"],
				ls6:["ls6"],
				ls7:["ls7"],
				ls8:["ls8"],
				blackouttwoam:["blackouttwoam"],
				mono: ["Space Mono", "monospace"],
			},
			backgroundImage: {
				"gradient-radial": "bg-white",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-container":
				"linear-gradient(180deg, #DDF2FD 0%, #DDF2FD 100%)",
				"kulitan-pattern": "url('./shared/images/transcribe-bg.png')",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				font: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
			},
		},
	},
	plugins: [],
};
export default config;
