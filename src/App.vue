<template>
<div>
  <nav>
    <router-link to="/">Portafolio</router-link> |
    <router-link to="/about">Servicios</router-link> |
    <router-link to="/contacto">Contacto</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/testimonios">Testimonios</router-link> |
    <router-link to="/sobremi">Sobre mi</router-link>
  </nav>
  <router-view class="router"/>
  <img class="logo" alt="Vue logo" src="./assets/logo2.png">
</div>
</template>

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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #c1cdda;
}

nav a.router-link-exact-active {
  color: #4256b9;
}

.logo{
  width: 200px;
  position: fixed;
  left: 0;
  bottom: 0;
}

</style>
