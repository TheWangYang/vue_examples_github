import { createStore } from 'vuex'
import countOptions from './count'
import personOptions from './person'


//Vue3中创建store对象
const store = createStore({

    //模块化编程使用modules属性
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})

//向外暴露store对象
export default store







