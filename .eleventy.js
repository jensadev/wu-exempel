module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addWatchTarget("./src/js/");

    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};
