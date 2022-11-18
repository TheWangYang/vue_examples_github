<template>
  <div class="row">
    <!--展示用户列表与否取决于api返回的数组长度-->
    <div
      v-show="userInfo.users.length"
      class="card"
      v-for="user in userInfo.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!--展示欢迎词-->
    <div v-show="userInfo.isFirst">
      <h1>Welcome to the Search GitHub!</h1>
    </div>

    <!--展示加载中-->
    <div v-show="userInfo.isLoading">
      <h1>Welcome to the Search GitHub!</h1>
    </div>
    <!--展示错误信息-->
    <div v-show="userInfo.errMsg">
      <h1>{{ userInfo.errMsg }}</h1>
    </div>
  </div>
</template>

<script>
//引入pubsub-js组件
import pubsub from "pubsub-js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  data() {
    return {
      deep:true,
      userInfo: {
        //增加几个额外的状态信息
        isFirst: true, //是否为首次请求api
        isLoading: false, //是否在加载中
        errMsg: "", //请求错误时返回的错误信息
        users: [],
      }
    };
  },
  //设置挂载的时候，订阅消息
  mounted() {
    //获得接收消息的pubId，便于在该组件销毁之前取消订阅消息
    this.pubId = pubsub.subscribe("getListData", (msgName, statusObj) => {
      console.log("List组件收到了用户更新的数据为：", statusObj);
      this.userInfo = {...this.userInfo, ...this.statusObj};
    });
  },
  //
  beforeUnmount() {
    pubsub.unsubscribe(this.pubId);
    console.log("取消了List组件的消息订阅...");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.3333%;
  padding: 0.78rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>