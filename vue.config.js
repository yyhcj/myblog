// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,

// })
module.exports=({
  publicPath:'./',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.46.52.202:3000',
        changeOrigin: true,
      },
    },
  }
})