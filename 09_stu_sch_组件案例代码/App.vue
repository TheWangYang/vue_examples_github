<template>
  <h2>{{ msg }}</h2>
  <School />
  <Student ref="student" />
</template>

  <script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "你好啊！",
    };
  },
  methods: {
    // demo(name){
    //   console.log("App得到的学生姓名为：",name)
    // }
    getStudentName(name) {
      console.log("得到学生姓名为：", name);
    },
  },
  mounted() {
    // console.log(this)
    //得到了Student组件的实例对象
    // console.log(this.$refs)
    // const stu = this.$refs.student
    // this.$on("addData", this.getStudentName);
  },
};
</script>

  <style>
</style>