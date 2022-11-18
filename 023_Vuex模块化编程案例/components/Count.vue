<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大十倍之后为：{{ bigSum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>

    <h2>Person组件的总人数为：{{ personList.length }}</h2>
    <select v-model.number="curr">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="8">9</option>
      <option value="10">10</option>
    </select>

    <button @click="increment(curr)">+</button>
    <button @click="decrement(curr)">-</button>
    <button @click="incrementOdd(curr)">当前求和为奇数时再加</button>
    <button @click="incrementWait(curr)">等一等再加</button>
  </div>
</template>

<script>
//引入mapState
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data() {
    return {
      curr: 1,
    };
  },
  //计算属性
  computed: {
    ...mapState("countAbout", ["sum", "school", "subject"]), //直接引入a,b对应的module模块
    ...mapState("personAbout", ["personList"]), //直接引入a,b对应的module模块
    //getters方法调用
    ...mapGetters("countAbout", ["bigSum"]),
  },

  methods: {
    //使用mapMutations实现
    ...mapMutations("countAbout", {
      //不需要执行actions逻辑的函数可以直接使用mapMutations进行操作
      increment: "commitIncrement",
      decrement: "commitDecrement",
    }),

    ...mapActions("countAbout", {
      //需要在actions逻辑的函数写到mapActions中即可
      incrementOdd: "incrementOdd",
      incrementWait: "incrementWait",
    }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>