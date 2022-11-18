<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  //通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next){
    //...
  },

  //通过路由规则离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    // ...
  }
};
</script>

<style>
</style>