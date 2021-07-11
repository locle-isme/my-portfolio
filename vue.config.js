// vue.config.js
module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {

            // by default the `sass` option will apply to both syntaxes
            // because `scss` syntax is also processed by sass-loader underlyingly
            // but when configuring the `prependData` option
            // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
            // in that case, we can target the `scss` syntax separately using the `scss` option
            //                @import "~@/assets/scss/_variables.scss";
            //                 @import "~@/assets/scss/_reset.scss";
            scss: {
                additionalData: `
                @import "@/assets/scss/_style.scss";
                `
            },
        }
    }
}