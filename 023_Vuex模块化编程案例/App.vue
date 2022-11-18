<template>
  <div>
    <Count />

    <Person/>
  </div>
</template>
    <script>
//引入组件
import Count from "./components/Count.vue";
//引入Person组件
import Person from './components/Person.vue'


export default {
  name: "App",
  components: {
    Count,
    Person
  },
};
</script>


<style scoped>
</style>

