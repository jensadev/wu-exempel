module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/assets/");
    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};
