/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const primary = "#FF5253";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      dark: {
        DEFAULT: "#363636",
        300: "#3636364d",
      },
      gray: {
        300: "#EBEBEB",
        400: "#F9F9FA",
        500: "#A7A7A7",
        600: "#727272",
        700: "#BFC4C9",
      },
      green: "#EBF9F1",
      transparent: colors.transparent,
      orange: "#F9640A",
      gold: "#FFBC1F",
      error: "#F42C4F",
      negative: "#FEEBEA",
      positive: "#00CA71",
    },
    backgroundImage: () => ({
      mainGradient:
        "linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)",
      sliderGradient:
        "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 17.19%, rgba(255, 255, 255, 0.00) 83.33%, #FFF 100%)",
      bookBg: "url('/src/assets/icons/book-bg.svg')",
      none: "unset",
    }),

    boxShadow: {
      DEFAULT:
        "0px 1px 5px 0px rgba(191, 196, 201, 0.24), 0px 3px 4px 0px rgba(191, 196, 201, 0.18), 0px 2px 4px 0px rgba(191, 196, 201, 0.20)",
      btnHover: "0px 2px 5px 0px rgba(54, 54, 54, 0.10)",
      btnPressed:
        "0px 1px 10px 0px rgba(249, 89, 8, 0.20), 0px 3px 4px 0px rgba(222, 125, 11, 0.20)",
      avatarPlaceholder:
        "0px 1px 5px 0px rgba(191, 196, 201, 0.24), 0px 3px 4px 0px rgba(191, 196, 201, 0.18), 0px 2px 4px 0px rgba(191, 196, 201, 0.20)",
      header:
        "-4px 4px 4px 0px rgba(54, 54, 54, 0.05), 4px 4px 4px 0px rgba(54, 54, 54, 0.05)",
    },

    letterSpacing: {
      small: "0.1px",
    },

    extend: {
      aspectRatio: {
        bookImg: "445 / 593",
      },
      screens: {
        xsm: "425px",
      },
      spacing: {
        0.1: "0.1px",
      },
      fontSize: {
        "2lg": "1.38rem",
      },
      borderRadius: {
        image: "0.5rem",
        layout: "0.8rem",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fade: "fade .5s ease-in-out",
        scaleIn: "scaleIn .35s ease-in-out",
      },
      transition: {
        all: "all .3s ease-in-out",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: primary,
          color: "#fff",
          borderRadius: "0.65rem",
          transition: "background-color .3s ease-in-out",
          "&:hover": {
            backgroundColor: "#ff0009",
          },
        },

        ".text-link": {
          textUnderlineOffset: 4,
          color: "rgba(255, 255, 255, .9)",
          transition: "text-decoration-color .3s ease-in-out",
          textDecorationLine: "underline",
          textDecorationColor: "rgba(255, 255, 255, 0.2)",
          "&:hover": {
            textDecorationColor: "rgba(255, 255, 255, 0.9)",
          },
        },

        ".air-block": {
          borderRadius: theme("borderRadius.layout"),
          backgroundColor: theme("colors.gray.950"),
          color: theme("colors.white"),
          boxShadow: theme("boxShadow.lg"),
        },
      });
      addUtilities({
        ".text-shadow": {
          textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
        },

        ".outline-border-none": {
          outline: "none",
          border: "none",
        },

        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },

        ".image-like-bg": {
          objectPosition: "center",
          objectFit: "cover",
          pointerEvents: "none",
        },
      });
    }),
  ],
};
