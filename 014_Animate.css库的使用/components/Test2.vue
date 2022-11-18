<template>
  <div>
    <button @click="change">显示或隐藏</button>

    <transition name="demo" appear>
         <h1 v-show="isShow">你好！</h1>
    </transition>
   
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Test",
    data(){
        return {
            isShow:true
        }
    },
    methods:{
        change(){
            console.log("Test2中控制显示或隐藏调用成功...")
            this.isShow = !this.isShow
        }
    }
}
</script>

<style scoped>

h1{
    background-color: skyblue;
}


/*使用Vue中自带的动画写法1*/
/* .hello-enter-active{
    
} */

/* .hello-leave-active{

} */


/*使用Vue中自带的动画写法2*/
/*进入的起点, 离开的终点*/
.demo-enter, .demo-leave-to{
    transform: translateX(-100%);
}

/*进入的终点, 离开的起点*/
.demo-enter-to, .demo-leave{
    transform: translateX(0);
}


/*将切换效果设置到xxx-enter-active和xxx-leave-active中*/
.demo-enter-actrive, .demo-leave-active{
    transition: 0.5s linear;
}



</style>