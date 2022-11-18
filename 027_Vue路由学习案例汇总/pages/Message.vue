<template>
  <div>
    <ul v-for="msg in messageList" :key="msg.id">
      <!-- <li><router-link 
      :to="`/home/message/detail?id=${msg.id}&title=${msg.title}&content=${msg.content}`">消息编号：{{msg.id}}，消息标题：{{msg.title}}</router-link>&nbsp;&nbsp;
      </li> -->

      <!--路由传入参数的对象写法-->
      <li>
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: msg.id,
              title: msg.title,
              content: msg.content,
            }
          }"
          >消息编号：{{ msg.id }}，消息标题：{{ msg.title }}</router-link
        >&nbsp;&nbsp;
      </li>

      <button @click="pushShow(msg)">push记录方式跳转</button>
      <button @click="replaceShow(msg)">replace记录方式跳转</button>

      <!--使用params传入参数的方法-一般方法-->
      <!-- <li>
        <router-link
          :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`"
          >消息编号：{{ msg.id }}，消息标题：{{ msg.title }}</router-link
        >&nbsp;&nbsp;
        <button @click="pushShow">push查看</button>
        <button @click="replaceShow">replace查看</button>
      </li> -->

      <!-- 使params传入参数的对象写法 -->
      <!-- <li>
        <router-link
          :to="{
            path: '/home/message/detail',
            params: {
              id: msg.id,
              title: msg.title,
              content: msg.content,
            }
          }"
          >消息编号：{{ msg.id }}，消息标题：{{ msg.title }}</router-link
        >&nbsp;&nbsp;
      </li> -->
    </ul>

    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1", content: "这是消息1。" },
        { id: "002", title: "消息2", content: "这是消息2。" },
        { id: "003", title: "消息3", content: "这是消息3。" },
      ],
    }
  },

  methods: {
    pushShow(msg) {
      console.log("使用push方式实现页面跳转...")
      this.$router.push({
        //使用push的方法实现路由组件的跳转
        path: "/home/message/detail",
        query: {
          id: msg.id,
          title: msg.title,
          content: msg.content,
        }
      });
    },

    replaceShow(msg) {
      console.log("使用replace方式实现页面跳转...")
      this.$router.replace({
        path:'/home/message/detail',
        query:{
           id: msg.id,
          title: msg.title,
          content: msg.content,
        }
      })

    },
  },
};
</script>

<style>
</style>