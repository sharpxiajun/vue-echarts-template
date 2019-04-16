module.exports = {
  demo: {
    html: {
      title: 'VUE ECHARTS TEMPLATE',
      favicon: './static/favicons/screen.ico'
    },
    env: {
      PROJECT: '"demo"',
      GEN_ROUTER: true,
      title: '"VUE-Echarts-Template"'
    },
    config: {
      port: 9000,
      frontMockUrl: 'http://yapi.demo.qunar.com/mock/69600',
      proxyTable: {
        '/front': {
          target: 'http://yapi.demo.qunar.com/mock/69600',
          changeOrigin: true,
          pathRewrite: {
            '^/front': '/'
          }
        }
      }
    }
  }
}
