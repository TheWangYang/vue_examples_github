<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
//引入pubsub-js库
import pubsub from "pubsub-js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "xjtu",
      address: "西安",
    };
  },
  mounted() {
    // console.log(this.x)
    //在父组件中给prototype中的x对象设置一个on事件
    // this.$bus.$on("getStudentName",(studentName)=>{
    //     console.log("School组件得到了学生姓名为：",studentName)
    // })

    this.pubId = pubsub.subscribe("demo", function (magName, data) {
      console.log("demo", data);
    });
  },
  beforeUnmount() {
    pubsub.unsubscribe(this.pubId);
  }
};
</script>

<style>
</style>