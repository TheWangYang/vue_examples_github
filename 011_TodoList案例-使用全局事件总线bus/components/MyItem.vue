<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="changeCheck(todo.id)"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteWork(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  //声明接受todo对象
  props:['todo'],
  methods:{
    changeCheck(id){
      //向App.vue组件中的checkTodo函数传入参数id
      // this.checkTodo(id)
      // this.$bus.$emit("checkTodo",id)
      console.log(id)
    },
    //点击删除按钮，得到对应的id
    deleteWork(id){
      //增加危险操作的选项
      if(confirm("确定删除该项任务么？")){
        //console.log("得到id : ",id)
        // this.deleteTodo(id)
        // this.$bus.$emit("deleteTodo",id)
        console.log("Delete todo 执行成功...",id)
      }
    }

  }
}

</script>

<style scoped>
  /*item*/
        li{
            list-style: none;
            height: 36px;
            line-height: 36px;
            padding: 0 5px;
            border-bottom: 1px solid #ddd;
        }

        li label{
            float: left;
            cursor: pointer;
        }


        li label li input{
            vertical-align: middle;
            margin-right: 6px;
            position: relative;
            top: -1px;
        }


        li button{
            float: right;
            display: none;
            margin-top: 3px;
        }


        li:before{
            content: initial;
        }


        li:last-child{
            border-bottom: none;
        }

        /*设置li悬停高亮显示*/
        li:hover{
          background-color: #ddd;
        }

        /*设置li悬停之后，显示出删除按钮*/
        li:hover button{
          display: block;
        }

</style>