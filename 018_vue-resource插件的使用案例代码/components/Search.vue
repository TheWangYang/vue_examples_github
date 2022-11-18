<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWords"
      />&nbsp;<button @click="SearchClick">Search</button>
    </div>
  </section>
</template>

<script>
//引入axios
import axios from "axios";
//采用消息订阅的方式在组件之间传送数据
import pubsub from "pubsub-js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      keyWords: "",
    };
  },
  methods: {
    SearchClick() {
      //定义一个状态对象
      let statusObj = {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      };

      //请求前
      pubsub.publish("getListData", statusObj);
      console.log("请求前loading状态...");

      //请求中
      //使用axios发送get请求，并使用，模板字符串解析
      axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
        (response) => {
          //更新数据对象中的属性值
          statusObj.isLoading = false;
          statusObj.errMsg = "";
          statusObj.users = response.data.items;

          //发送消息
          pubsub.publish("getListData", statusObj);
          console.log("请求成功状态...");
        },
        (error) => {
          //更新状态对象
          statusObj.errMsg = error.message;
          statusObj.isLoading = false;

          pubsub.publishs("getListData", statusObj);
          console.log("请求失败状态...");
        }
      );

      // //使用vue-resource插件发送http请求的代码
      // this.$http.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
      //   (response) => {
      //     //更新数据对象中的属性值
      //     statusObj.isLoading = false;
      //     statusObj.errMsg = "";
      //     statusObj.users = response.data.items;

      //     //发送消息
      //     pubsub.publish("getListData", statusObj);
      //     console.log("请求成功状态...");
      //   },
      //   (error) => {
      //     //更新状态对象
      //     statusObj.errMsg = error.message;
      //     statusObj.isLoading = false;

      //     pubsub.publishs("getListData", statusObj);
      //     console.log("请求失败状态...");
      //   }
      // );


      console.log("SearchClick...");
    },
  },
};
</script>

<style>
</style>