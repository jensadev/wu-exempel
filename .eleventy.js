const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const glob = require('fast-glob');
// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addWatchTarget('./src/assets/');
    eleventyConfig.addWatchTarget('./src/js/');

    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/js/');

    // Filters
    glob.sync(['src/filters/*.js']).forEach((file) => {
        const filters = require(`./${file}`);
        Object.keys(filters).forEach((name) =>
            eleventyConfig.addFilter(name, filters[name])
        );
    });

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


    // 404
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: (err, bs) => {
                bs.addMiddleware('*', (req, res) => {
                    const content_404 = fs.readFileSync('docs/404.html');
                    // Add 404 http status code in request header.
                    res.writeHead(404, {
                        'Content-Type': 'text/html; charset=UTF-8',
                    });
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
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
