<template>
  <div class="todo-footer" v-show="todoSize">

    <label>
      <input type="checkbox" :checked="isAllWorkBeChoosen" @change="checkAll"/>
    </label>

    <span>
      <span>已完成{{ doneSize }}</span> / 全部{{ todoSize }}
    </span>
    <button class="btn btn-danger" @click="clearAll">点击删除已完成任务</button>
  </div>
</template>

<script>
export default {
  computed: {
    doneSize() {
      //第一种方法：使用for循环
      let sum = 0;
      
      // for (let i = 0; i < this.todos.length; i++) {
      //   if (this.todos[i].done === true) {
      //     sum++;
      //   }
      // }
      // return sum;
      

      //第二种方法：使用reduce函数
      sum = this.todos.reduce((pre, current)=>{
        return pre + (current.done === true ? 1 : 0)
      },0)

      return sum
    },
    todoSize(){
      return this.todos.length
    },
    //判断是否全部任务都被勾选了
    isAllWorkBeChoosen(){
      return this.doneSize === this.todoSize && this.todoSize > 0
    }
  },
  name: "MyFooter",
  props: ["todos"],
  methods:{
     //设置的勾选所有的选项
    checkAll(event){
      console.log("操作是否全选...",event.target.checked)
      // this.checkAllTodo(event.target.checked)
      // this.$bus.$emit("checkAllTodo",event.target.checked)
    }
  },
  //删除所有已完成任务的方法
  clearAllWork(){
    console.log("清除数组中的所有已完成事项...")
    // this.clearAll()
    // this.$bus.$emit("clearAll")
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>