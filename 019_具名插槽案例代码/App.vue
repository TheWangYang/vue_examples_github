    <template>
  <div id="root">
    <div class="container">
      <Category title="美食">
        <template v-slot:center>
          <img src="xxxx" />
        </template>

        <template v-slot:footer>
          <a href="xxxxx">这个是test链接</a>
        </template>
      </Category>

      <Category title="游戏">
        <template v-slot:center>
          <ul v-for="(game, index) in games" :key="index">
            <li>{{ game }}</li>
          </ul>
        </template>

        <template v-slot:footer>
          <div class="gameFoot">
            <a href="xxxx">跳转地址1</a>
            <a href="xxxx">跳转地址2</a>
          </div>
        </template>
      </Category>
      <Category title="电影">
        <ul v-for="(film, index) in films" :key="index">
          <li>{{ film }}</li>
        </ul>
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
  data() {
    return {
      foods: ["火锅", "鱼豆腐", "甜不辣", "冰激淋"],
      films: ["test1", "test2", "test3", "test4"],
      games: ["game1", "game2", "game3", "game4"],
    };
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


.gameFoot{
  display: flex;
  justify-content: space-around;
}
</style>

