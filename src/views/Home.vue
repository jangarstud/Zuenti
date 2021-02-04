<template>
  <body id="app" class="d-flex justify-content-center align-items-center flex-wrap">
      <div class="text-center size d-flex align-items-center">
        <LoginZuenti></LoginZuenti>
      </div>
  </body>
</template>

<script>
import LoginZuenti from '../components/login/LoginZuenti'
import ResizeText from 'vue-resize-text'

export default {
  name: 'App',
  components: {
    LoginZuenti
  },
  directives: {
    ResizeText
  }
}
</script>

<style>
.margin-left {
  margin-right: 200px;
}
.size {
  height: 100%;
  width: 100%;
}
.title {
  width: 100%;
}
body#app {
  margin: 0;
  padding: 0;
  background: url(../assets/bg-01.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}
</style>
