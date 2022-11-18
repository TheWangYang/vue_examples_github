    <template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>


    <script>
    //引入axios
    import axios from 'axios'

export default {
  name: "App",
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/test/cars').then(
        response => {console.log("请求成功了", response.data)},
        error => {console.log("请求失败了", error.message)}
      )
    }
  }
};
</script>

    <style>
body {
  background: #fff;
} 
</style>