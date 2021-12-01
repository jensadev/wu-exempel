const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addWatchTarget('./src/assets/');
    eleventyConfig.addWatchTarget('./src/js/');

    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/js/');

    // Collections
    eleventyConfig.addCollection('pages', (collectionApi) => {
        return collectionApi
            .getFilteredByGlob('src/pages/*.njk')
            .sort((a, b) => {
                if (a.data.level && b.data.level) {
                    return a.data.level - b.data.level;
                }
                return a.data.title.localeCompare(b.data.title);
            });
    });

    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: isProduction ? 'docs' : '_site',
        },
    };
};
