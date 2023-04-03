<template>
  <div class="container">
    <div class="row">
      <HelloWorld class="contenido"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home{
  position: absolute;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.HelloWorld{
  width: 800px;
  height: 600px;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
}
.contenido{
  opacity: 100%;
}
</style>
