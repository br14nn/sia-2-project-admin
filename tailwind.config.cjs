/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-blue": "#084784",
				"theme-blue-darker": "#063C71",
				"theme-light-blue": "#4E7FAE",
				"theme-dark-blue": "#012E5A",
				"theme-red": "#DB092B",
				"theme-yellow": "#F1EA18",
				"theme-gray": "#6F6F6F",
				gainsboro: "#D9D9D9",
			},
			gap: {
				"1%": "1%",
				"2%": "2%",
			},
			height: {
				"95%": "95%",
				"90%": "90%",
				"1920px": "1920px",
				"1080px": "1080px",
				"950px": "950px",
				"800px": "800px",
				"650px": "650px",
				"500px": "500px",
			},
			margin: {
				"3px": "3px",
			},
			screens: {
				desktop: "1366px",
				tablet: "1024px",
			},
			width: {
				"95%": "95%",
				"70%": "70%",
				"50%": "50%",
				"49.5%": "49.5%",
				"49%": "49%",
				"40%": "40%",
				"30%": "30%",
				"28%": "28%",
				"25%": "25%",
				"24%": "24%",
				"23.5%": "23.5%",
				"20%": "20%",
				"18%": "18%",
				"16%": "16%",
				"15%": "15%",
				"10%": "10%",
				"9%": "9%",
				"8%": "8%",
				"7%": "7%",
				"75rem": "75rem",
				"32rem": "32rem",
				"1500px": "1500px",
				"1400px": "1400px",
				"1080px": "1080px",
				"1000px": "1000px",
			},
		},
	},
	plugins: [],
};
