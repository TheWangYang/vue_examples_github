
const { defineConfig } = require('@vue/cli-service')

//按需引入element-ui组件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,

  // --------------------配置element-ui组件自动按需引入----------------
  // configureWebpack: {
  //   //配置webpack自动按需引入element-plus，
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()]
  //     }),
  //     Components({
  //       resolvers: [ElementPlusResolver()]
  //     })
  //   ],
  // },

  //------------------------开启代理服务器（方式1）---------------------
  // devServer: {
  //   proxy:"http://localhost:5000"
  // }

  //------------------------配置代理服务器（方式2）-----------------------
  // devServer: {
  //   proxy: {
  //     '/demo': {
  //       target: 'http://localhost:5000',
  //       pathRewrite: {//重写请求路径，将前缀/demo替换为空字符串
  //         '^/demo': ''
  //       },
  //       ws: true,//用于支持webSocket
  //       changeOrigin: true//用于在代理服务器和目标服务器之间决定代理服务器是否说谎，称自己是否和目标服务器端口号一致。
  //     },
  //     //设置的另外一个代理服务器
  //     '/test': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: {//重写请求路径，将前缀/demo替换为空字符串
  //         '^/test': ''
  //       },
  //       ws: true,//用于支持webSocket
  //       changeOrigin: true//用于在代理服务器和目标服务器之间决定代理服务器是否说谎，称自己是否和目标服务器端口号一致。
  //     },


  //   }
  // }

})


