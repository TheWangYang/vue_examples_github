//引入Vue
import { createApp } from 'vue'

//引入store对象
// import store from './store/index'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

//引入vueRouter插件
// import vueRouter from 'vue-router'

//引入配置好的路由器
import router from './router/index.js'

//创建Vue实例对象
const app = createApp(App)

//引入Vuex插件
// import Vuex from 'vuex'

//在挂载之前使用Vuex插件
// app.use(Vuex)

//使用store对象
// app.use(store)

//使用路由器
app.use(router)

//使用vue-router插件
// app.use(vueRouter)


//完成最后的挂载
app.mount('#app')






