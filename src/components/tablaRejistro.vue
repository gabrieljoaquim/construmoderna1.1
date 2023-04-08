<template>
  <div class="row secondary">
    <div class="col-lg-g offset-lg-2">
        <div class="table-responsive">
            <div class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="contenido" v-for="prod in products" :key="prod.id">
                    <th>{{ prod.id }}</th>
                    <th>{{ prod.title }}</th>
                    <th>{{ prod.completed }}</th>
                </tbody>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'tablaRejistro',

    data() {
        return{
            products:[]
        }
    },

    mounted(){
        console.log('hola mundo desde mounted')
        this.getProducts();
    },

    methods:{
        getProducts(){
            console.log('hola mundo desde get products')
            axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => (this.products = response.data))
            .catch( e=> console.log(e))
        }
    }
}
</script>

<style scoped>

</style>

<!-- https://apirestflaskpythonsqlite3.parzibyte.repl.co -->
<!-- https://jsonplaceholder.typicode.com/todos -->