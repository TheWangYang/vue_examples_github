<template>
<h2>消息编号：{{$route.query.id}}</h2>
<h3>消息标题：{{$route.query.title}}</h3>
<h3>消息内容：{{$route.query.content}}</h3>
</template>

<script>
export default {
    name:"MessageDetail",
    //在接收组件中使用props属性获得传来的值
    // props:['id','title','content']
}
</script>

<style>

</style>