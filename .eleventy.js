const yaml = require("js-yaml");
const slugify = require("slugify");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

module.exports = function (eleventyConfig) {

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("log", (value) => {
    console.log(value);
  });
  
  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
 //slugify with more character removal
  eleventyConfig.addFilter("slugMore", (str) => {
      return slugify(str, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
      });
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml"
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy({"./src/static/img": "images"});

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("./src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./src/android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("./src/android-chrome-192x192.png");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
