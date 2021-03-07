module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "html",
        "js",
        "jpg",
        "png",
        "css"
    ]);

    eleventyConfig.addFilter("thumbnail", function(value) {
        return value.replaceAll('.jpg', '_Medium.jpg');
    });

    eleventyConfig.addFilter("escapecss", function(value) {
        return value.replaceAll('\'', '\\\'');
    });
};