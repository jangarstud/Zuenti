<template>
      <div class="card size bg-light">
        <div class="card-body">
          <h1 class="margin-top font-zuenti">ZUENTI</h1>
          <form @submit.prevent="loginUser" class="margin-top">
            <div class="font-zuenti from-group d-flex flex-column justify-content-center align-items-center">
              <label for="inputName">User name</label>
              <input
                id="userName"
                type="text"
                placeholder="User Name"
                name="userName"
                v-model="userName"
                class="form-control text-center margin"
              />
            </div>
            <div class="font-zuenti from-group d-flex flex-column justify-content-center align-items-center">
              <label for="inputPassword" class="margin">Password</label>
              <input
                type="password"
                class="form-control text-center margin"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              />
            </div>
            <div class="font-zuenti from-group d-flex flex-column justify-content-center align-items-center">
              <button id="btn-login" type="submit" class="btn input-bg font-white btn-block marg">Login</button>
            </div>
          </form>
          <div class="font-zuenti d-flex flex-column justify-content-center align-items-center">
            <router-link class="btn input-bg font-white btn-block marg" to="/register">Register</router-link>
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
    ...mapActions(['updateProfile']),
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
            this.updateProfile(JSON.parse(this.auth()).userName).then(() => {
              alert(`Hola ${JSON.parse(this.auth()).fullName}`)
              this.$router.push({ name: 'perfil' })
            })
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
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.marg {
  margin-top: 30px;
  width: 90%;
}
.font-zuenti {
  font-family: 'Novecento';
  font-weight: bold;
}
.margin {
  margin-top: 10px;
  width: 90%;
}
.margin-top {
  margin-top: 50px;
}
.size {
    height: 10%;
    width: 35%;
    margin: 0px auto;
    box-shadow: 0 2px 4px rgba(7,59,76, 12), 0 0 6px rgba(7,59,76, 12)
}
.card {
  height: 600px;
  border-radius: 10px;
}
.input-bg {
  background: #073b4c;
}
.font-white {
  color: white;
}
.container {
    width: 100%;
    display: flex;
    align-items: center;
}
</style>
