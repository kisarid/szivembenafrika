module.exports = {
  lintOnSave: false,
  publicPath: 'http://szivembenafrika.org/',
  // publicPath: 'http://localhost:8080',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
