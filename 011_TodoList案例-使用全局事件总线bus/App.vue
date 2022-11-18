    <template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receiveData="receiveData" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" />
      </div>
    </div>
  </div>
</template>

    <script>
//引入组件
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },

  //装载数据
  data() {
    return {
      todos: [
        { id: "0001", name: "吃饭", done: false },
        { id: "0002", name: "看电影", done: true },
        { id: "0003", name: "玩游戏", done: true },
      ],
    };
  },
  methods:{
    //添加数据方法
    receiveData(todoObj){
        // console.log("我收到了Header中的数据：",todoObj)
        this.todos.unshift(todoObj)
    },
    //修改对应id下标的数据的done值为相反值
    checkTodo(id){
         console.log("App.vue : ",id)
        this.todos.forEach((todo) => {
            if(todo.id === id){
                // console.log("find that")
                todo.done = !todo.done   //将对应的值取反
            }
        })
    },
    //删除选定的任务
    deleteTodo(id){
      console.log("Delete todo...")
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选或取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    //删除所有已完成任务
    clearAll(){
      this.todos = this.todos.filter((todo)=>{
        return todo.done === false
      })
    }
  },
  // 挂载钩子
  // mounted:{
  //   // this.$bus.on('checkTodo',this.checkTodo)
  //   // this.$bus.on('deleteTodo',this.deleteTodo)
  //   // this.$bus.on('checkAllTodo',this.checkAllTodo)
  //   // this.$bus.on('clearAll',this.clearAll)
  // this.$bus.on("receiveData",this.receiveData)
  // }
  
};
</script>

    <style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inser 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>