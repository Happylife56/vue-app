module.exports = {
  /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     */
  // 基本路径
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/static/app/clerk/',
  // 输出文件目录
  outputDir: '../docker/dist/static/app/clerk',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  productionSourceMap: false,
  // css相关配置
  css: {
    loaderOptions: {
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: '@import "~@/styles/common.scss";'
      }
      // postcss: {
      //   // options here will be passed to postcss-loader
      //   plugins: [require('postcss-px2rem')({
      //     remUnit: 75
      //   })]
      // }
    }
  },
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    port: 8088,
    https: false,
    hotOnly: false,
    // 设置代理
    proxy: {
      // proxy table example
      '/shops': {
        target: 'https://shop.deeptel.com.cn',
        changeOrigin: true,
        pathRewrite: {
          // 如果接口本身没有/api需要通过pathRewrite来重写了地址
          //   '^api': ''
        }
      }
    }
    // before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
