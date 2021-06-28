module.exports = {
  // mode: "jit",
  purge: {
    content: ["./**/*.html", "./src/**/*.md", "./**/*.aspx"],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      newt: "var(--color-newt-green)",
      "hunter-green": "var(--color-hunter-green)",
      orange: "var(--color-orange-soda)",
      ebony: "var(--color-ebony)",
      blue: "var(--color-blue)",
      "gray-purple": "var(--color-gray-purple)",
      "barely-blue": "var(--color-barely-blue)",
      "dark-gray": "var(--color-dark-gray)",
      white: "var(--color-white)",
      transparent: "transparent",
    },
    fontFamily: {
      headers: ["Source Sans Pro", "sans-serif"],
      copy: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        header: "1fr 1fr",
      },
      gridTemplateRows: {
        header: "6rem auto",
        card: "4.5rem 1fr",
      },
      minHeight: {
        card: "19.875rem",
      },
      height: {
        "90p": "90%",
      },
      maxWidth: {
        800: "50rem",
      },
      transitionProperty: {
        top: "top",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        bigger: "120%",
      },
    },
    animation: {
      moveup: "moveUp 0.25s ease-in-out",
      movedown: "moveDown 0.25s ease-in-out",
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
      backgroundSize: ["hover", "focus"],
      position: ["group-hover"],
      fill: ["group-hover"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
