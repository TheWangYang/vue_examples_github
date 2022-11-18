//引入axios
import axios from 'axios'
import { nanoid } from 'nanoid'

//配置personOptions选项
const personOptions = {
    namespaced: true,
    state: {
        personList: [//设置的保存person的列表
            { id: "001", name: "wyy" },
        ]
    },

    actions: {
        //设置只能增加姓王的人
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                //提交本次请求
                context.commit('commitAddPerson', value)
                console.log("增加姓王的人成功...")
            } else {
                console.log('该用户不姓王，增加失败...')
            }
        },
        
        //从服务器中获得一个人的姓名
        getPersonFromServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    //创建person对象
                    const person = {
                        id: nanoid(),
                        name:response.data
                    }
                    context.commit('commitAddPerson', person)
                },
                
                error => {
                    console.log('请求失败，错误信息为：', error.message)
                }
            )
        }

    },

    mutations: {
        //增加人员的函数
        commitAddPerson(state, value) {
            console.log("commitAddPerson mutations 调用了...")
            state.personList.unshift(value)
        }

    },
    getters: {
        //获得列表中第一个person的姓名
        getFirstPersonName(state) {
            //返回值name
            return state.personList[0].name
        }

    },

}

export default personOptions