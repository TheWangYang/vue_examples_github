<template>
  <div>
    <h2>Count组件中的求和为：{{sum}}</h2>
    <hr>
    <h2>Person列表中第一个人的名字为：{{getFirstPersonName}}</h2>
    <h3>人员列表</h3>
    <input type="text" placeholder="请输入名字：" v-model="inputName">
    <button @click="addUser">添加该人员</button>
    <button @click="addWangUser">添加一个姓王的人</button>
    <button @click="addPersonFromServer">添加一个来自服务器的人</button>
    <ul v-for="p in personList" :key="p.id">
      <li>序号：{{p.id}}，姓名：{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
//引入mapState
import {mapGetters, mapState} from 'vuex'
import { nanoid } from 'nanoid'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Person",
    data(){
      return {
        inputName:""
      }
    },
    computed:{
      ...mapState('personAbout', {personList:"personList",sum:"sum"}),
      ...mapGetters('personAbout',{getFirstPersonName:'getFirstPersonName'})
    },
    methods:{
      addUser(){
        const newPerson = {
          id:nanoid(),
          name:this.inputName
        }

        //调用store中的函数
        this.$store.commit("personAbout/commitAddPerson", newPerson)
      },
      //增加一个姓王的人
      addWangUser(){
        const wangPerson = {
          id:nanoid(),
          name:this.inputName
        }

        //调用actions中的函数
        this.$store.dispatch('personAbout/addPersonWang', wangPerson)

      },
      //增加一个来自于服务器的人
      addPersonFromServer(){
        this.$store.dispatch('personAbout/getPersonFromServer')
      }

    }
}
</script>

<style scoped>
</style>