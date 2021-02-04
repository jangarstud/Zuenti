import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    auth: localStorage.getItem('auth') || {},
    profile: localStorage.getItem('profile') || {},
    imageData: localStorage.getItem('imageData') || {},
    status: '',
    error: null
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    auth: state => state.auth,
    imageData: state => state.imageData,
    error: state => state.error,
    profile: state => state.profile
  },

  actions: {

    async uploadImage ({
      commit,
      getters
    }, data) {
      data.userName = JSON.parse(getters.auth).userName
      const res = await axios.post('http://localhost:3000/api/images/addImages', data)
      localStorage.setItem('imageData', JSON.stringify(res.data.imageData.images))
      commit('update_image_data', res.data.imageData.images)
    },
    /// /////////////////////////////////////////////////////////
    async modifyProfile ({
      commit,
      getters
    }, profile) {
      profile.userName = JSON.parse(getters.auth).userName
      const res = await axios.post('http://localhost:3000/api/profile/editProfile', profile)
      localStorage.setItem('profile', JSON.stringify(res.data.profile))
      commit('update_profile', res.data.profile)
    },
    async modifyUserName ({
      commit,
      getters
    }, newData) {
      commit('profile_request')
      const res = await axios.put('http://localhost:3000/api/auth/modifyUserName', {
        actualFullName: JSON.parse(getters.auth).fullName,
        newFullName: newData.fullName,
        actualUserName: JSON.parse(getters.auth).userName,
        userName: newData.userName,
        userId: JSON.parse(getters.auth)._id
      })
      const profile = await axios.put('http://localhost:3000/api/profile/editUserName', {
        oldUserName: JSON.parse(getters.auth).userName,
        newUserName: newData.userName
      })
      const imageData = await axios.put('http://localhost:3000/api/images/editUserName', {
        oldUserName: JSON.parse(getters.auth).userName,
        newUserName: newData.userName
      })
      console.log(imageData)
      localStorage.setItem('auth', JSON.stringify(res.data.auth))
      localStorage.setItem('profile', JSON.stringify(profile.data.profile))
      localStorage.setItem('imageData', JSON.stringify(imageData.data.imageData.images))
      commit('update_image_data', imageData.data.imageData.images)
      commit('update_profile', profile.data.profile)
      commit('auth_update_name_username', res.data.auth)
    },
    /// /////////////////////////////////////////////////////////
    async login ({
      commit
    }, auth) {
      commit('auth_request')
      const res = await axios.post('http://localhost:3000/api/auth/login', auth)
      if (res.data.success) {
        const token = res.data.token
        const auth = res.data.auth
        localStorage.setItem('token', token)
        localStorage.setItem('auth', JSON.stringify(auth))
        axios.defaults.headers.common.Authorization = token
        commit('auth_success', { token: token, auth: res.data.auth })
      }
      return res
    },
    async updateProfile ({
      commit
    }, profileUserName) {
      commit('auth_request')
      await axios.post('http://localhost:3000/api/profile/getProfile', { profileUserName: profileUserName })
        .then(profile => {
          localStorage.setItem('profile', JSON.stringify(profile.data.profile))
          commit('update_profile', profile.data.profile)
        }).catch(error => {
          console.log(error)
        })
      await axios
        .post('http://localhost:3000/api/images/getImages', {
          profileUserName: profileUserName
        })
        .then(imageData => {
          console.log(JSON.parse(localStorage.getItem('imageData')))
          if (!imageData.data.imageData) {
            console.log(JSON.parse(localStorage.getItem('imageData')))
            localStorage.setItem('imageData', null)
            console.log(JSON.parse(localStorage.getItem('imageData')))
            commit('update_image_data', null)
          } else {
            localStorage.setItem(
              'imageData',
              JSON.stringify(imageData.data.imageData.images)
            )
            commit('update_image_data', imageData.data.imageData.images)
          }
        })
        .catch(error => {
          console.log(error)
        })
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
      state.auth = JSON.stringify(json.auth)
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
      state.auth = {}
      state.profile = {}
    },
    profile_request (state) {
      state.status = 'loading'
    },
    user_profile (state, auth) {
      state.auth = auth
    },
    auth_update_name_username (state, auth) {
      state.auth = JSON.stringify(auth)
    },
    update_profile (state, profile) {
      state.profile = JSON.stringify(profile)
    },
    update_image_data (state, imageData) {
      state.imageData = JSON.stringify(imageData)
    }
  }
})
