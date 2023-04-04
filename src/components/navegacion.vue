<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Construmoderna</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page">
                <router-link to="/">Portafolio</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/about">Servicios</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/contacto">Contacto</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/blog">Blog</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/testimonios">Testimonios</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
name:"navegacion"
}
</script>

<style scoped>
  .navbar{
    background: rgba(var(--bs-secondary-bg-rgb), .5);
    font-size: 1rem;
  }
  @media (max-width:991px){
    .navbar{
      font-size:calc(0.5vw + 0.8rem)
    }
  }
  a{
    font-style: none;
  }
</style>