<template>
    <div class="fotos">
        <h3>Fotos</h3>
        <hr>
        <div class="imagenes">
          <div v-for="image in images" :key="image">
            <img :src="image">
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PerfilFotos',
  data () {
    return {
      images: [
        'https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/7/71/Rick_S%C3%A1nchez.png/revision/latest?cb=20170327172715&path-prefix=es',
        'https://www.latercera.com/resizer/eSD7rt7YG1QSUd1RM32nhFzpEt0=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/WPNKFC3FPBBJ3NJK5PINB2XPUM.png',
        'https://ih1.redbubble.net/image.966759299.7967/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
      ]
    }
  }
}
</script>

<style>

.fotos {

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.imagenes {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(6,1fr);
    grid-gap: 5px 5px;
}

.fotos img {
    width: 150px;
    height: 180px;
    margin: 5px;
}
</style>
