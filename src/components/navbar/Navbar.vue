<template>
  <div id="navbar-zuenti" class="company-name">
    <b-navbar toggleable="lg" type="dark" class="navbar-bg">
      <router-link class="navbar-brand" to="/" id="ZuentiHome">
        Zuenti
      </router-link>
      <b-navbar-toggle target="nav-collapse "></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="isLoggedIn">
            <router-link class="nav-link" to="/feed">Feed</router-link>
          </b-nav-item>
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
            <router-link class="nav-link" to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item class="nav-link" v-if="isLoggedIn" @click="logoutUser()">
            Logout
          </b-nav-item>
          <b-nav-item v-if="isLoggedIn">
            <router-link class="nav-link" to="/friends">Friends</router-link>
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
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.company-name {
  font-family: "Novecento", "AntonS";
  color: white !important;
}
.company-name:hover {
  color: rgb(218, 165, 32, 0.5) !important;
}
#navbar-zuenti {
  background: black;
}
.navbar-bg {
  background: #073b4c;
}
.navbar {
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
