//模块化编程
const countOptions = {
    namespaced: true,//写上namespace之后，在vue组件中调用mapState属性时，就可以使用下方store中的name:value中的name值进行定位。
    state: {
        sum: 0,
        school: "xjtu",
        subject: "ai",
    },

    actions: {

        // increment: function (context, value) {
        //     console.log("increment actions 调用了...")
        //     //调用store.commit
        //     context.commit('commitIncrement', value)
        // },
        // decrement: function (context, value) {
        //     console.log("decrement actions 调用了...")
        //     context.commit("commitDecrement", value)
        // },

        incrementOdd(context, value) {
            console.log(context)
            console.log("incrementOdd actionos 调用了...")
            if (context.state.sum % 2) {
                context.commit('commitIncrementOdd', value)
            }
        },
        incrementWait(context, value) {
            console.log('incrementWait actions 调用了...')
            //加入定时器逻辑
            setTimeout(() => {
                context.commit('commitIncrementWait', value)
            }, 500)
        }
    },

    mutations: {
        commitIncrement: function (state, value) {
            console.log("commitIncrement mutations调用了...")
            state.sum += value
        },
        commitDecrement: function (state, value) {
            console.log("commitDecrement mutations 调用了...")
            state.sum -= value
        },
        commitIncrementOdd(state, value) {
            console.log("commitIncrementOdd mutations 调用了...")
            state.sum += value
        },
        commitIncrementWait(state, value) {
            console.log('commitIncrementWait mutations 调用了...')
            state.sum += value
        },
    },

    getters: {
        //用于处理sum放大十倍之后的逻辑
        bigSum(state) {
            return state.sum * 10
        }

    }
}

export default countOptions