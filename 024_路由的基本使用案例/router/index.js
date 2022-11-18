//引入vue-router插件
import { createRouter, createWebHashHistory } from 'vue-router'   // 使用插件可以不加这个

//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

//配置路径：key:value的对应关系
const routes = [
    { path: '/About', name: "About", component: About },
    { path: '/Home', name: "Home", component: Home },
]

//创建路由器对象
const router = createRouter({
    history: createWebHashHistory('/'),  // 编写后台就这么写
    routes,
})


export default router
