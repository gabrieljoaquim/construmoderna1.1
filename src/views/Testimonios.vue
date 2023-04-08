<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Contenido</td>
          <td>UserId</td>
          <td>Complemento</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in LlamarLista" :key="list.id" @v-if="completed" >
          <th>{{ list.id }}</th>
          <th>{{ list.title }}</th>
          <th>{{ list.userId }}</th>
          <th>{{ list.completed }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name:"Testimonios",
 data() {
  return{
    LlamarLista:[],
    completed:[]
  }
 },
 mounted(){
  console.log('hola mundo')
  this.getLlamarLista()
 },
 methods:{
  getLlamarLista() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      this.LlamarLista = res.data
    })
    .catch(e => console.log(e))
  }
 }
}
</script>

<style>

</style>