<template>
  <div class="hello">
    <h2>Portafolio: Esta sección sería la más importante de mi sitio web. Incluiría una variedad de imágenes de proyectos anteriores que haya completado, junto con detalles sobre cada proyecto, como el tamaño de la habitación, los requisitos del cliente, el tiempo que llevó completar el proyecto y cualquier otro detalle relevante.</h2>
    <div class="card">
      <h2>Remodelacion de Cocina</h2>
      <p>Uno de nuestros clientes nos contactó para solicitar una reforma de su cocina que se encontraba en un estado muy deteriorado. Para poder trabajar en el área, se tomaron medidas y se tomaron fotografías para tener un registro de la situación actual. Luego, nos reunimos con el cliente para discutir los cambios que deseaba realizar, los materiales que le gustaría utilizar y el presupuesto que tenía disponible para llevar a cabo la reforma. El cliente no solo quería que realizáramos el modelo 3D y el render para que pudiera visualizar los cambios, sino que también deseaba que nos encargáramos de la reforma completa y le entregáramos la cocina lista para su uso.</p>

      <div class="img">
        <img src="../assets/CocinaJuanAntes.jpg" alt="">
      </div>

      <p>Después de acordar los materiales a utilizar y el presupuesto, presentamos al cliente cuatro renders que variaban principalmente en los materiales de construcción y los colores, ya que la distribución de la cocina permanecería igual. El cliente se decidió por la opción de madera, ya que sería más duradera y solicitó que solo se le colocara sellador y protector a la madera para mantener su color natural. Este fue el render que finalmente el cliente escogió.</p>

      <div class="img">
        <img src="../assets/CocinaJuanRender.png" alt="">
      </div>

      <p>En tan solo dos días, presentamos el modelo 3D y los renders mientras se ajustaba el presupuesto y se elegían los materiales de construcción. Después de llegar a un acuerdo con el cliente, procedimos a realizar la reforma de la cocina en tan solo dos días más. El resultado final fue una cocina totalmente reformada y lista para su uso, con la apariencia que el cliente había imaginado en el render elegido.</p>

      <div class="img">
        <img src="../assets/CocinaJuanTerminado.jpg" alt="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
.card{
  font-size: x-large;
  color: black;
}
img{
  width: 500px;
  height: 400px;
}
</style>
