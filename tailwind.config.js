/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: '200px',
      md: '640px',
      lg: '1024px',
      xlg: '1600px',
    },
    colors: {
      mainText: "#C0C0C0", 
      title: "#D90000", 
      links: "#C21807", 
      hoverLink: "#FF3F34", 
      button: "#FFD700", 
      logo: '#8B0000',
    },
    backgroundColor: {
      mainBackground: "#141414", 
      button: "#660000", 
      hoverButton: "#A52A2A", 
      navBar: "#0A0A0A", 
    },
    borderColor: {
      HomeAfter: "#FF0000", 
      HomeBefor: "#A52A2A", 
      borderbefore: "#000000", 
    },
  
    boxShadow:{
      platform: '0px 2px 0px 6px #8B0000',
      after: '49px 0px 24px -9px #C0C0C0',
      before: '-49px 0px 24px -9px #C0C0C0',
      contact: '0px 0px 40px 0px #C0C0C0',
      none: '0px 0px 0px 0px',
    },
    extend: {
      animation: {
       /*  afterHome: "afterHome 5s ease-in-out infinite 2s alternate forwards",
        textHome: "textHome 3s ease-in-out 1 0s alternate forwards", */
      /*   box: "box 9s ease-in-out 1 2s alternate ",
        box2: "box2 3s ease-in-out 1 2s alternate forwards ", */
      },
      keyframes: {
       /*  afterHome: {
          "0%": { borderRadius: "100px" },
          "25%": {
            borderRadius: "100px",
            boxShadow: "2px 20px 60px 0px #0D0D0D",
          },
          "50%": {
            borderRadius: "100px",
            boxShadow: "2px 20px 65px 5px #0D0D0D",
          },
          "100%": {
            borderRadius: "100px",
            boxShadow: "2px 20px 70px 6px #0D0D0Dx",
          },
        },
        textHome: {
          "0%": { scale: "0" },
          "50%": { scale: "0.5" },
          "100%": { scale: "1.0" },
        }, */
       /*   box: {
          "0%": { width: '100px' },
          "50%": { width: '100px', transform: 'translateY(-300px)' },
          "100%": { width: '500px',height: '300px', transform: 'translateY(-300px)' },
        }, 
        box2: {
          "0%": { width: '100px' },
          "50%": { width: '100px', transform: 'translateY(-300px)' },
          "100%": { width: '500px',height: '300px', transform: 'translateY(-300px)' },
        },  */
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // هنا تم إضافة الخط 'Poppins'
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
