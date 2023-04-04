<template>
<div>
  <navegacion/>
  <router-view class="router"/>
  <img class="logo" alt="Vue logo" src="./assets/logo2.png">
</div>
</template>

<script>
import navegacion from './components/navegacion.vue'

export default {
  name: 'app',
  components: {
    navegacion
  } 
}

</script>


<style>
#app {
  width: 100%;
  height: 900px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  background: url(./assets/ren6effectsResult.png);
  background-position: fixed;
  animation: slider 25s infinite alternate;

  color: #c1cdda;
}
.logo{
  width: 200px;
  position: fixed;
  left: 0;
  bottom: 0;
}

@media (max-width:991px) {
  #app{
    font-size: calc(0.5vw + 0.3rem);
  }
}

@keyframes slider {
  from {
    background-position: center;
    background-size: 100%;
  }
  to{
    background-position: center;
    background-size: 150%;
  }
}
</style>
