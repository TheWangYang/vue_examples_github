<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendNameToSchool">点击向School组件传学生姓名</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: "wyy",
      age: 22,
    }
  },
  methods:{
    sendNameToSchool(){
        //在子组件中给prototype中的x对象设置一个emit事件，用来调用School组件传递进去的on事件
        this.$bus.$emit("getStudentName","wyy")
    }
  }

};
</script>

<style>
</style>