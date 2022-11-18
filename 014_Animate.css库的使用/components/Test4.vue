<template>
  <div>
    <button @click="change">显示或隐藏</button>

    <transition-group 
    name="animate__animated animate__   bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    appear>
         <h1 v-show="isShow" key="1">你好！</h1>
         <h1 v-show="isShow" key="2">你好！</h1>
         <h1 v-show="isShow" key="3">你好！</h1>
         <h1 v-show="isShow" key="4">你好！</h1>
    </transition-group>
   
  </div>
</template>

<script>
//引入animate.css样式库
import 'animate.css'
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

</style>