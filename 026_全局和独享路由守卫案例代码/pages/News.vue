<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue技术</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  data() {
    return {
      a: false,
      opacity: 1,
    };
  },

  //在组件清空之前销毁定时器
  // beforeUnmount() {
  //   console.log("News组件即将销毁...")
  //   //清除定时器
  //   clearInterval(this.timer)

  // },
  //组件挂载时的逻辑处理
  // mounted(){
  //   console.log("News组件已经挂载...")
  //   this.timer = setInterval(()=>{
  //     this.opacity -= 0.1
  //     if(this.opacity <= 0){
  //       this.opacity = 1
  //     }
  //   }, 16)
  // }

  //使用路由组件独有的生命周期钩子
  //被激活时调用
  activated(){
    console.log("News组件被激活了...")
     this.timer = setInterval(()=>{
      console.log("激活时定时器被调用...")
      this.opacity -= 0.1
      if(this.opacity <= 0){
        this.opacity = 1
      }
    }, 16)
  },
  //未被激活时调用
  deactivated(){
    console.log("News未被激活...")
    clearInterval(this.timer)
  }
};
</script>

<style>
</style>