<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">点击后退</button>
    <button @click="forward">点击前进</button>

    <div>
      <input type="text" 
      placeholder="请输入您想要前进或后退的步骤（正数表示前进x步，负数表示后退x步）" 
      v-model.number="step"/>
       <button @click="go">点击跳转到指定位置</button>
    </div>
   
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Banner",
    data(){
      return{
        step:0
      }
    },
    methods:{
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      //go函数表示直接跳转到指定的页面记录位置
      go(){
        console.log('跳转步数：', this.step)
        this.$router.go(this.step)
      }
    }
}
</script>

<style>
</style>