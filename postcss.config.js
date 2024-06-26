module.exports = {
  plugins: [
    require("postcss-import"),
    require(`tailwindcss`)(`./tailwind.config.js`),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require(`autoprefixer`)({ grid: true }),
    ...(process.env.NODE_ENV === "production"
      ? [
          require(`cssnano`)({
            preset: "default",
          }),
        ]
      : []),
  ],
};
