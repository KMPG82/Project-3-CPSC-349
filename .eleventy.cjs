module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
  });
  eleventyConfig.addPassthroughCopy("./");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
