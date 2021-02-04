<template>
  <div class="bg-page d-flex justify-content-center align-items-center">
    <div class="card box-size">
      <RegisterCard></RegisterCard>
    </div>
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
body#auth {
  margin: 0;
  padding: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}
.box-size {
  width: 40%;
}

.bg-page {
  background: url(../assets/bg-01.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 94.1vh;
}
</style>
