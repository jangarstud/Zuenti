<template>
  <div id="app">
    <CardLogOut></CardLogOut>
  </div>
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
.size {
  background: blue;
  height: 80%;
}
.title {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: green;
  height: 100vh;
}
</style>
