<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row">
      <div class="col">
        <tablaRejistro/>
      </div>
    </div>
    <div  class="row dispaly">
      <div class="col-md-3 d-flex justify-content-around" v-for="post in posts" :key="post.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">
                {{ post.body }}
              </p>
            </div>
          </div>
          <h3></h3>
        </div>
    </div>
  </div>
</template>

 <script>
 import axios from 'axios'
 import tablaRejistro from '@/components/tablaRejistro.vue'

 export default {
   data() {
     return {
       posts: []
     }
   },
   components:{
    tablaRejistro
   },
   mounted() {
    this.getPosts();
   },
   methods:{
     getPosts() {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => (this.posts = response.data))
      }
    }
  }
 
 </script>

 <style scoped>
.container-xxl{
  background: purple;
}
 .row{
  border-style: solid;
  border-color: black;
 }
 .card{
  height: 250px;
 }
 img{
   width: auto;
 }
 </style>
