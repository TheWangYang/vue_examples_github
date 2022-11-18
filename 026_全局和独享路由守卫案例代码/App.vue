<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
    //引入组件
    // import Home from './components/Home.vue'
    // import About from './components/About.vue'
    import Banner from './components/Banner.vue'

export default {
  name: "App",
  components:{
    Banner
  }
};
</script>


<style scoped>
</style>

