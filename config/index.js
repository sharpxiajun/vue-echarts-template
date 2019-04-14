'use strict'
const path = require('path')
const projectsConfig = require('./projects.conf')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    host: 'localhost',
    port: 9000,
    autoOpenBrowser: 'chrome',
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
    // 扩展项目配置
    ...projectsConfig[process.env.PROJECT].config
  },
  build: {
    index: path.resolve(__dirname, `../${process.env.PROJECT}/index.html`),
    assetsRoot: path.resolve(__dirname, `../${process.env.PROJECT}`),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  },
  env: {
    ...projectsConfig[process.env.PROJECT].env
  },
  html: {
    ...projectsConfig[process.env.PROJECT].html
  }
}
