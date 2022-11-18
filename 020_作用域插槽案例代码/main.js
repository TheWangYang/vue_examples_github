//引入Vue
import { createApp } from 'vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

//创建Vue实例对象
const app = createApp(App)

//引入vue-resource插件
// import vueResource from 'vue-resource'

//在挂载之前使用插件
// app.use(vueResource)//vue3目前无法完成对vue-resource的挂载

//完成最后的挂载
app.mount('#app')






