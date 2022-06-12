// vue.config.js
module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                @import "@/assets/scss/_style.scss";
                `
            },
        }
    },

    pages: {
        index: {
            // entry for the page
            entry: 'src/main.ts',
            title: 'Portfolio | Loc Le',
        },
    }
}
