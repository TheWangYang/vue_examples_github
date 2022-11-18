<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="changeCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{todo.name}}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.name" @blur="handleBlur(todo)" ref="inputName">
    </label>
    <button class="btn btn-danger" @click="deleteWork(todo.id,$event)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "MyItem",
  //声明接受todo对象
  props:['todo'],
  methods:{
    //---------------------------设置处理编辑逻辑的按钮逻辑-------------------------
    handleEdit(todo){
      if(todo.hasOwnProporty('isEdit')){
        todo.isEdit = true
      }else{
        // todo.isEdit = true
        this.$set(todo, "isEdit", true)//需要使用$set的方式给todo对象增加一个响应式的属性isEdit
      }

      //将焦点设置到input框中
      this.$nextTick(function(){
        //input输入框获得焦点
        this.$refs.inputName.focus()
      })
    },
    //失去焦点的时候，修改todo对象
    handleBlur(todo,event){
      todo.isEdit = false
      this.$bus.$emit("updateTodo", todo.id, event.target.value)
    },

    //-------------------------------设置的todolist动作函数--------------------------
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
        pubsub.publish("deleteTodo", id)
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