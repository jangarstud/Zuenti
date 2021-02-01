<template>
  <div id="app">
    <b-container fluid>
      <div class="container">
        <div class="card">
          <RegisterCard></RegisterCard>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import RegisterCard from '../components/register/RegisterCard'
export default {
  name: 'Auth',
  components: {
    RegisterCard
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: green;
  height: 100vh;
}
.size {
  height: 80%;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 80px;
}

.card {
  margin: 0px auto;
}
</style>
