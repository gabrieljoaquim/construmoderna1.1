<template>
  <div class="container">
    <h2>Contacto</h2>
    <div class="row">
      <div class="col">
        <img src="../assets/logo2.png" alt="logo2">
      </div>
      <div class="col">

      </div>
      <div class="card col align-self-end">
        <div class="row">
        <label class="form-label">Nombre</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
          />
        </div>
    </div>
    <div class="row">
        <label class="form-label">Apellido</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
          />
        </div>
    </div>
    <div class="row">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <div class="input-group mb-3">
      <input
        type="email"
        class="form-control"
      />
    </div>
    </div>
    <div class="row">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <div class="input-group mb-3">
          <textarea
            class="form-control"
            id="example"
            rows="6"
          ></textarea>
        </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card{
    padding: 1rem;
    background: #f8f8f8a5;
    color: rgb(24, 24, 24);
    font-size: large;
    
}



</style>