module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#52A415",
				secondary: "#EE4266",
				success: "#0081A0",
			},
			boxShadow: {
				card: "0 5px 30px 0 rgba(0, 0, 0, 0.05)",
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
