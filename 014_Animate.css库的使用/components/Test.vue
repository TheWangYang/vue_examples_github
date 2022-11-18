<template>
  <div>
    <button @click="change">显示或隐藏</button>

    <!-- <transition name="hello" :appear="true">
         <h1 v-show="isShow">你好！</h1>
    </transition> -->

    <transition-group name="hello" appear>
         <h1 v-show="isShow" key="1">你好！</h1>
         <h1 v-show="isShow" key="2">你好！</h1>
         <h1 v-show="isShow" key="3">你好！</h1>
         <h1 v-show="isShow" key="4">你好！</h1>
    </transition-group>

   
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
            console.log("Test1中控制显示或隐藏调用成功...")
            this.isShow = !this.isShow
        }
    }
}
</script>

<style scoped>

h1{
    background-color: skyblue;
}


/*使用Vue中自带的动画写法*/
.hello-enter-active{
    animation: donghuaDemo 1s;
}

.hello-leave-active{
    animation: donghuaDemo 1s reverse;
}


/* .come{
    animation: donghuaDemo 1s;
} */

/* .go{
    animation: donghuaDemo 1s reverse;
} */


@keyframes donghuaDemo {
    from{
        transform: translateX(-100%);
    }    

    to{
        transform: translateX(0px);
    }
}


</style>