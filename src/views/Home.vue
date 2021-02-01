<template>
  <div id="app">
    <b-container fluid>
      <b-row class="text-center">
          <div v-resize-text="{ratio:1.5, minFontSize: '30px', maxFontSize: '200px', delay: 200}" class="title">ZUENTI</div>
      </b-row>
      <b-row class="text-center">
        <LoginZuenti></LoginZuenti>
      </b-row>
    </b-container>
  </div>
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
