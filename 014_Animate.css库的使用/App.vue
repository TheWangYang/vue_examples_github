    <template>
  <div id="root">
    <Test4></Test4>
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
    
  </div>
</template>


    <script>
    import Test from './components/Test.vue'
    import Test2 from './components/Test2.vue'
    import Test3 from './components/Test3.vue'
    import Test4 from './components/Test4.vue'
export default {
  name: "App",
  components: {
    Test,
    Test2,
    Test3,
    Test4
  },

  //装载数据
  data() {
    return {};
  },
  methods: {},
};
</script>

    <style>
body {
  background: #fff;
}
</style>