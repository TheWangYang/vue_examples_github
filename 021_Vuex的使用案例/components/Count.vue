<template>
  <div>
    <h2>当前求和为：{{ $store.state.sum }}</h2>
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

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data() {
    return {
      curr: 1,
    };
  },
  methods: {
    increment() {
      //调用$store使用Vuex实现共享存储对象
      this.$store.dispatch("increment", this.curr);
    },
    decrement() {
      //调用$store使用Vuex实现共享存储对象
      this.$store.dispatch("decrement", this.curr);
    },
    incrementOdd() {
        //判断是否为奇数的逻辑在actions对象中
        this.$store.dispatch("incrementOdd", this.curr);
      
    },
    incrementWait() {
        // console.log("timeout inner this : ", this)
        //定时器逻辑在actions中
        this.$store.dispatch("incrementWait", this.curr);
      
    },
  },
  mounted() {
    console.log("Count.vue this : ", this);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>