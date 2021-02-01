<template>
  <div class="tablon">
      <h3>Mi Tablón</h3>
      <hr>
      <input type="text" size="15" value="Escribe aquí" class="formulario">
      <div v-for="(hilo,index) in comentarios" :key="index" :index="index" class="hilo">
          <div v-for="(mensaje,i) in hilo" :key="i" :index="i" class="mensaje">
              <p class="nombre">{{mensaje.name}}</p>
              <p class="txt"> {{mensaje.mensaje}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import comentarios from '../../assets/comentarios.json'

export default {
  name: 'PerfilTablon',
  data () {
    return {
      comentarios: comentarios
    }
  }
}
</script>

<style>
.tablon {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
}

h3 {
    width: 100%;
}
p {
    margin-right: 20px;
}

.formulario {
    border: 10px solid rgb(119, 119, 119);
    font-size: 25px;
}
.hilo {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(112, 255, 112);
    margin-top: 10px;
}

.mensaje {
    background-color: rgb(170, 253, 170);
    border: 2px solid rgb(85, 85, 85);
}

.nombre {
    font-weight: bolder;
    font-size: 15px;
}

.txt {
    font-size: 14px;
    color: rgb(24, 24, 24);
}
</style>
