<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentNameToApp">点击将学生姓名传给App.vue组件</button>
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
    sendStudentNameToApp(){
      console.log("sendStudentDataToApp被调用了...")
      this.$emit("addData",this.name)//调用App.vue组件中定义的函数
    }
  }
};
</script>

<style>
</style>