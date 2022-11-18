<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addWork"
    />
  </div>
</template>

<script>
// import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  methods: {
    addWork(event) {
      if (!event.target.value.trim()) {
        return alert("注意：输入不能为空！");
      }
      //(event)
      //将用户输入数据包装成一个对象
      // const todoObj = {
      //   id: nanoid(),
      //   name: event.target.value,
      //   done: false,
      // };

      //调用接收到的receiveData()方法
      // this.receiveData(todoObj);
      // this.$bus.$emit("receiveData", todoObj)

      //添加之后将输入框中的数据清空
      event.target.value = "";
    },
  },
  // props: [],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 1px 1px rgb(0, 0, 0, 0.75) 0 0 8px rgb(0, 0, 0, 0.5);
}
</style>