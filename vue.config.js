module.exports = {
  lintOnSave: false,
  publicPath: (() => {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'http://szivembenafrika.org/'
      case 'staging':
        return 'http://david.kisari.net/'
      case 'development':
        return 'http://localhost:8080'
    }
  })(),
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  pluginOptions: {
    i18n: {
      locale: 'hu',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false,
    },
  },
}
