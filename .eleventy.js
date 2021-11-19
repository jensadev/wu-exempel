module.exports = (eleventyConfig) => {
    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};
