<template>
  <h2>{{ msg }}</h2>
  <School/>
  <Student/>
</template>

  <script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components:{
    Student,
    School
  },
  data() {
    return {
      msg: "你好啊！",
    };
  }
};
</script>

  <style>
</style>