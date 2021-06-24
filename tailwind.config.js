module.exports = {
  // mode: "jit",
  purge: {
    content: ["./**/*.html", "./src/**/*.md", "./_site/**/*.aspx"],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      newt: "var(--color-newt)",
      leafy: "var(--color-leafy)",
      peach: "var(--color-peach)",
      "dark-purple": "var(--color-dark-purple)",
      "sky-blue": "var(--color-sky-blue)",
      white: "var(--color-white)",
      transparent: "transparent",
    },
    fontFamily: {
      headers: ["filson-pro", "serif"],
      copy: ["open-sans", "serif"],
      sans: ["open-sans", "serif"],
    },
    extend: {
      gridTemplateColumns: {
        header: "1fr 1fr",
      },
      gridTemplateRows: {
        header: "6rem auto",
      },
      minHeight: {
        card: "19.875rem",
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
