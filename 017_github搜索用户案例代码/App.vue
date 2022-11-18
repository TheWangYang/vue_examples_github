    <template>
  <div id="root">
    <div class="container">
    <Search/>
    <List/>
    </div>
  </div>
</template>
    <script>

//引入组件
import Search from "../src/components/Search.vue";
import List from "../src/components/List.vue";

export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>


