<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
    
      <!--vue2中使用keep-alive-->
      <!--添加keep-alive属性，当前组件被切换之后，不会被销毁-->
      <!-- <keep-alive include="News">
        <router-view></router-view>
      </keep-alive> -->

      <!--Vue3中使用keep-alive-->
      <router-view v-slot="{ Component }">
        <!-- 所有页面缓存 -->
        <keep-alive include="News">
          <component :is="Component" />
        </keep-alive>
      </router-view>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style>
</style>