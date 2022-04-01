module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      width: {
        133: "8.313rem",
        163: "10.188rem",
        70: "4.375rem",
      },
      maxWidth: {
        327: "20.384rem",
      },
      colors: {
        primary: "#DB3B3F",
        secondary: "#3A3A3A",
        specialdishbg: "#FFF7F7",
        specialinctext: "#181818",
        bordercolor: "#EAEAEA",
        discounteditemgreen: "#018B0F",
        discounteditemred: "#FF7171",
        seemore: "#a95cae",
        navbar: "#DB3B3F",
        footer: "#FFF5F5",
        footerColor: "rgba(223, 58, 62, 0.94)",
        searchbar: "#E0E0E0",
        searchbartext: "#7B7B7B",
        addtolist: "#E64A4E",
        moneygreen: "#018B0F",
      },
      backgroundColor: {
        specialdishpricebg: "rgba(1, 139, 15, 0.8)",
      },
    },
  },
  plugins: [],
};
