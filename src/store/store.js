import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    auth: {},
    status: '',
    error: null
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    auth: state => state.auth,
    error: state => state.error
  },

  actions: {
    async login ({
      commit
    }, auth) {
      commit('auth_request')
      const res = await axios.post('http://localhost:3000/api/auth/login', auth)
      if (res.data.success) {
        const token = res.data.token
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = token
        commit('auth_success', { token: token, auth: res.data.auth })
      }
      return res
    },
    async logout ({
      commit
    }) {
      await localStorage.removeItem('token')
      commit('logout')
      delete axios.defaults.headers.common.Authorization
    }
  },

  mutations: {
    auth_request (state) {
      state.error = null
      state.status = 'loading'
    },
    auth_success (state, json) {
      state.token = json.token
      state.auth = json.auth
      state.status = 'success'
      state.error = null
    },
    auth_error (state, err) {
      state.error = err.response.data.msg
    },
    register_request (state) {
      state.error = null
      state.status = 'loading'
    },
    register_success (state) {
      state.error = null
      state.status = 'success'
    },
    register_error (state, err) {
      state.error = err.response.data.msg
    },
    logout (state) {
      state.error = null
      state.status = ''
      state.token = ''
      state.auth = ''
    },
    profile_request (state) {
      state.status = 'loading'
    },
    user_profile (state, auth) {
      state.auth = auth
    }
  }
})
