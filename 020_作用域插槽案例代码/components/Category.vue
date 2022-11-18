<template>
  <div class="categoty">
    <h3>{{ title }}分类</h3>
    <!--表示将插值标签体内容放到这个位置-->
    <slot name="center" :games="games">这个是测试作用域的插槽</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
    data() {
    return {
      games: ["game1", "game2", "game3", "game4"],
    };
  }

};
</script>

<style>
.categoty {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}
</style>