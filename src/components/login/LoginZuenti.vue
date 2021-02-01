<template>
  <div class="container">
      <div class="card size">
        <div class="card-body">
          <form @submit.prevent="loginUser" class="top-margin">
            <div class="from-group">
              <label for="inputName">User name</label>
              <input
                id="userName"
                type="text"
                placeholder="User Name"
                name="userName"
                v-model="userName"
                class="form-control"
              />
            </div>
            <div class="from-group">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              />
            </div>
            <br />
            <button id="btn-login" type="submit" class="btn btn-primary btn-block">Login</button>
            <br />
          </form>
                      <a href="auth.html" class="text-white"
              ><button id="botonSign" class="btn btn-primary btn-block">Sing in</button></a
            >
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

console.log(mapActions)

export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    ...mapGetters(['auth']),
    ...mapGetters(['isLoggedIn']),
    loginUser () {
      const user = {
        userName: this.userName,
        password: this.password
      }
      this.login(user)
        .then(res => {
          if (res.data.success) {
            alert(`Hola usuario ${this.auth().userName}`)
            this.$router.push({ name: 'perfil' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.size {
    height: 100%;
    width: 60%;
    margin: 0px auto;
}

.container {
    width: 100%;
    display: flex;
    align-items: center;
}
</style>
