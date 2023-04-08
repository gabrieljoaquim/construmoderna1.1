<template>
  <div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Accion</th>
      <th scope="col">UserID</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="Tabla in TablaLista" :key="Tabla.id">
      <th scope="row">{{ Tabla.id }}</th>
      <td>{{ Tabla.title }}</td>
      <td>{{ Tabla.body }}</td>
      <td>{{ Tabla.userId }}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
name:'TablaData',

data() {
    return{
        TablaLista: []
    }
},

mounted() {
    this.getTablaLista()
},

methods:{
    getTablaLista() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then( res => ( this.TablaLista = res.data))
    }
}
}
</script>

<style>

</style>