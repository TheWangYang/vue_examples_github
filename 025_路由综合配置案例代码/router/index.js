//引入vue-router插件
import { createRouter, createWebHashHistory } from 'vue-router'   // 使用插件可以不加这个

//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import MessageDetail from '../pages/MessageDetail.vue'


//配置路径：key:value的对应关系
const routes = [
    {
        path: '/about',
        name: "about",
        component: About,
        meta: {
            title:"关于"
        }
    },
    {
        name: "home",
        path: '/home',
        component: Home,
        meta: {
            title: "主页"
        },
        children: [
            {
                name: "message",
                path: "message",
                component: Message,
                meta: {//设置需要权限校验属性
                    isAuth: true,
                    title: "消息列表"
                },
                children: [
                    {
                        name: "detail",
                        path: "detail",
                        component: MessageDetail,
                        meta: {
                            isAuth: true,
                            title: "消息详情"
                        }
                        //设置props属性接受传来的值，第一种一般的props写法
                        // props: {
                        //     id: 1,
                        //     title: '测试',
                        //     content: '内容'
                        // }

                        // //第二种props写法
                        // props: true//表示该路由组件接受到的params参数以props的形式传递给该组件，在该组件中使用props属性接受即可

                        // props($route) {
                        //     return {
                        //         id: $route.params.id,
                        //         title: $route.params.title,
                        //         content: $route.params.content
                        //     }
                        // }
                    }
                ]
            },
            {
                name: "news",
                path: "news",
                component: News,
                meta: {//设置需要权限校验属性
                    isAuth: true,
                    title:"新闻列表"
                }
            }
        ]
    },
]

//创建路由器对象
const router = createRouter({
    history: createWebHashHistory('/'),  // 编写后台就这么写
    routes,
})


//在暴露出去之前添加一个路由守卫，全局前置路由守卫
router.beforeEach((to, from, next) => {
    console.log("前置路由守卫被调用...", to, from)
    //实现网页title随着组件切换改变，需要在上述的每个路由中添加路由元数据meta中进行添加

    //增加判断逻辑
    if (to.meta.isAuth) {//判断是否需要权限校验
        alert("对不起，您当前无权限！")
    } else {
        next()
    }

    //调用next函数，表示处理过上述逻辑之后，继续往下走
    // next()
})


//后置路由守卫设置，其中只有to，from两个参数
router.afterEach((to, from) => {
    console.log('后置路由守卫...', to, from)
    
    document.title = to.meta.title || '端云一体的缺陷检测系统'//切换组件之后，对组件展示的title进行修改
})



export default router
