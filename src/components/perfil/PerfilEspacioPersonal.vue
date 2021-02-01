<template>
  <div class="espacio">
      <h3>Mi Espacio Personal</h3>
      <hr>
      <div class="video">
          <iframe :src="video" frameborder="1" width="300px" height="200px"></iframe>
      </div>
  </div>
</template>

<script>

export default {
  name: 'PerfilEspacioPersonal',
  props: {
    type: String
  },
  data () {
    return {
      video: 'https://www.youtube.com/watch?v=5UnvPdZpfh0'
    }
  }
}
</script>

<style>
.espacio {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
}

h3 {
    width: 100%;
}

hr {
  height: 0.5px;
  color: black;
  width: 100%;
}

.video {
    width: 90%;
    height: 200px;
    margin-top: 20px;
}
</style>
