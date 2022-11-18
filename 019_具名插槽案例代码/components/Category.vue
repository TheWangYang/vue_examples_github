<template>
  <div class="categoty">
    <h3>{{ title }}分类</h3>
    <!--表示将插值标签体内容放到这个位置-->
    <slot name="center">这个是中间位置的插槽</slot>
    <slot name="footer">这个是底部的插槽</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["listData", "title"],
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