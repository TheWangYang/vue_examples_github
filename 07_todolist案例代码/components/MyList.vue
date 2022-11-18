<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
//引入Item组件
import MyItem from "../components/MyItem.vue";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props:["todos","checkTodo","deleteTodo"]
};
</script>

<style>

/*list样式*/
.todo-main{
            margin-left: 0px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 0px;
        }

        .todo-empty{
            height: 40px;
            line-height: 40px;
            border: 1px solid #ddd;
            border-radius: 2px;
            border-left: 5px;
            padding-left: 5px;
            margin-top: 10px;
        }
        

</style>