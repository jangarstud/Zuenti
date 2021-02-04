<template>
  <body id="app" class="d-flex justify-content-center">
    <CardLogOut></CardLogOut>
  </body>
</template>

<script>
import CardLogOut from '../components/logout/CardLogOut'

export default {
  name: 'LogOut',
  components: {
    CardLogOut
  }
}
</script>

<style>
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
