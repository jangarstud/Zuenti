<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link class="navbar-brand company-name" to="/" id="ZuentiHome">
        Zuenti
      </router-link>
      <b-navbar-toggle target="nav-collapse "></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-link" v-if="isLoggedIn">Feed</b-nav-item>
          <b-nav-item v-if="isLoggedIn">
            <router-link class="nav-link" to="/perfil">My profile</router-link>
          </b-nav-item>
          <b-nav-item v-if="!isLoggedIn">
            <router-link class="nav-link" to="/">Login</router-link>
          </b-nav-item>
          <b-nav-item v-if="!isLoggedIn">
            <router-link class="nav-link" to="/register">Register</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/">About</router-link>
          </b-nav-item>
          <b-nav-item class="nav-link" v-if="isLoggedIn" @click="logoutUser()">
            Logout
          </b-nav-item>
          <b-nav-item v-if="isLoggedIn">
            <router-link class="nav-link" to="/">Friends</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
    prueba: function () {
      return this.isLoggedIn
    }
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser: function () {
      if (window.confirm('You sure you wanna logout')) {
        this.$router.push({ name: 'logout' })
        this.logout()
      } else {
        console.log(':(')
      }
    }
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pavanam");
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
.company-name {
  font-family: "Pavanam", "AntonS";
  color: rgb(218, 165, 32) !important;
}
.company-name:hover {
  color: rgb(218, 165, 32, 0.5) !important;
}
</style>
