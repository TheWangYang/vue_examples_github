/**
 * 该文件是整个项目的入口文件
 * **/

//引入Vue
import { createApp } from 'vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

// import Vue from "vue"

//引入prototype
// Vue.prototype.x = {a:1, b:2}

//将新创建的vc实例对象赋值给Vue.prototype
// const Demo = Vue.extend({})
// const demo = new Demo()
// Vue.prototype.x = demo


//引入插件
// import plugins from "./plugins"

//使用插件
// Vue.use(plugins)


//创建Vue实例对象
createApp(App).mount('#app')


// new Vue({
//     el: "#app",
//     render: h => h(App),
//     beforeCreate() {
//         Vue.prototype.$bus = this
//     }

// })
