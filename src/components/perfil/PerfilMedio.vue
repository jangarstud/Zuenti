<template>
  <div class="container ">
      <h2>{{ auth.userName }}</h2>
      <br>
      <div class="opciones d-flex justify-content-around">
          <button type="button" class="btn btn-light text">My albums</button>
          <button type="button" class="btn btn-light text">My videos</button>
          <button type="button" class="btn btn-light text">Modify profile</button>
      </div>
      <br>
      <perfil-estado></perfil-estado>
      <perfil-espacio-personal></perfil-espacio-personal>
      <perfil-tablon></perfil-tablon>
  </div>
</template>

<script>
import PerfilEstado from './PerfilEstado.vue'
import PerfilEspacioPersonal from './PerfilEspacioPersonal.vue'
import PerfilTablon from './PerfilTablon.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'PerfilMedio',
  props: {
    type: String
  },
  computed: {
    ...mapGetters(['auth'])
  },
  components: {
    'perfil-estado': PerfilEstado,
    'perfil-espacio-personal': PerfilEspacioPersonal,
    'perfil-tablon': PerfilTablon
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

h2 {
    width: 100%;
}
.opciones {
    display: flex;
    width: 100%;
    font-weight: bolder;
    color: rgb(4, 221, 4);
}
.text {
      color: rgb(4, 221, 4);
}
p {
    margin-right: 20px;
}
</style>
