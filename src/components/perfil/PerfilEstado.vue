<template>
  <div class="container ">
      <input type="text" size="15" value="¿Que está pasando?" name="nombre">
      <div class="modificacion">
        <p class="ultima">Última modificación: </p>
        <p class="estado">Hello!! I'm using Zuenti</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'PerfilEstado',
  props: {
    type: String
  },
  components: {
  }
}
</script>

<style>
.container {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
}

input {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 30px;
  border: 2px solid rgb(201, 201, 201);
}

.modificacion {
  display: flex;
  width: 100%;
}

.ultima {
  font-weight: bolder;
}

.estado {
  color: grey;
}
</style>
