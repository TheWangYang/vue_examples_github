    <template>
  <div id="root">
    <div class="container">
      <Category title="游戏">
        <template v-slot:center="data">
          <ul v-for="(game, index) in data.games" :key="index">
            <li>{{ game }}</li>
          </ul>
        </template>
      </Category>

      <Category title="游戏">
        <template v-slot:center="data">
          <ol v-for="(game, index) in data.games" :key="index">
            <li>{{ game }}</li>
          </ol>
        </template>
      </Category>

      <Category title="游戏">
        <template v-slot:center="data">
          <H4 v-for="(game, index) in data.games" :key="index">
            <li>{{ game }}</li>
          </H4>
        </template>
      </Category>
    </div>
  </div>
</template>
    <script>
//引入组件
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

.gameFoot {
  display: flex;
  justify-content: space-around;
}
</style>

