module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // implementation: require('sass'),
        // webpackImporter: true,
        // sassOptions: {},
        prependData: `
            @import "@/assets/scss/abstracts/_variables.scss";
            @import "@/assets/scss/base/_typography.scss";
            @import "@/assets/scss/base/_utilities.scss";
            
        `
      }
    }
  },
  devServer: {
    proxy: 'https://www.metaweather.com/'
  }
};