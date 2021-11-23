module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addWatchTarget("./src/js/");

    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/js/");

    // Collections
    eleventyConfig.addCollection('pages', (collectionApi) =>
        collectionApi.getFilteredByGlob('src/pages/*.njk')
    );

    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};
