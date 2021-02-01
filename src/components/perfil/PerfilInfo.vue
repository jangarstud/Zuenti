<template>
  <div class="container ">
      <div id="img"></div>
      <div class="redes">
      <div class="margen">
        <h4>Redes</h4>
        <hr>
        <p id="titulo">Localidad</p>
        <p>San Cristóbal de La laguna, Tenerife</p>
        <p id="titulo">Estudios</p>
        <p>Ingeniería Infomática, Universidad de La La Laguna</p>
        <p id="titulo">Deportes</p>
        <p>Fútbol</p>
        <p>Fútbol</p>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PerfilInfo',
  props: {
    type: String
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
  align-items: center;
}
#img {
  width: 220px;
  height: 300px;
  background: black;
  margin-top: 30px;
  margin-bottom: 20px;
}

h4 {
  height: 10px;
}
.redes {
  background-color: rgb(201, 201, 201);
}
.margen {
  margin: 8px;
}
#titulo {
  font-weight: bold;
  font-size: smaller;
}
hr {
  height: 0.5px;
  background-color: black;
}

p {
  font-size: smaller;
}

</style>
