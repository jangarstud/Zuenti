<template>
    <div id="about">
      <div class="size d-flex flex-column align-items-center justify-content-center">
        <el-card class="card-size font-zuenti">
          <h1>About us</h1>
          <el-divider><i class="el-icon-s-opportunity"></i></el-divider>
          <p>Somos un grupo de estudiante de la Universidad de La Laguna donde hemos
            desarrollado un proyecto de una red social llamada ZUENTI (el resurgir del TUENTI)
            Los integrantes de este proyecto son los siguiente:
          </p>
          <br>
          <ul>
            <li>Eduardo Nuez Wehbe <i class="el-icon-message"></i>alu0101128153@ull.edu.es</li>
            <br>
            <li>Victor Davila Palenzuela <i class="el-icon-message"></i>alu0101128153@ull.edu.es</li>
            <br>
            <li>Jose Antonio Garcia Fuentes <i class="el-icon-message"></i><a>alu0101128153@ull.edu.es</a></li>
          </ul>
          <br>
          <el-divider><i></i></el-divider>
          <br>
          <h5 class="font-weight-bold">
            <router-link to="/about">Github</router-link>
          </h5>
          <h5 class="font-weight-bold">
            <router-link to="/about">Twitter</router-link>
          </h5>
          <h5 class="font-weight-bold">
            <router-link to="/about">Github</router-link>
          </h5>
          <h5 class="font-weight-bold">
            <router-link to="/about">Politica de privacidad</router-link>
          </h5>
        </el-card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.font-zuenti {
  font-family: 'Novecento';
  font-style: oblique;
}
#about {
  margin: 0;
  padding: 0;
  background: url(../assets/bg-01.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 94.1vh;
}
.card-size {
  width: 40%;
  height: 81%;
}
.container{
  background: white;
  position: relative;
  width: 100%;
  margin: 0px;
  align-items: center;
}
.fila{
  position:absolute;
  width: 100%;
}
.encabezado{
  height: 420px;
}
.wallpaper{
  position: relative;
  align-content: center;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.title{
  position: absolute;
  top: 140px;
  left: 0px;
}

.lateral {
  height: 100vh;
  background: black;
}
.imglateral{
  height: 100%;
  background-repeat: repeat-y;
  background: contain;
}

p{
  margin: 10px;
}
</style>
