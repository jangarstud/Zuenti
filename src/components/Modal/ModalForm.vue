<template>
  <el-form ref="form" label-width="120px">
    <el-form-item label="Full Name">
      <el-input v-model="fullName" />
    </el-form-item>
    <el-form-item label="User Name">
      <el-input v-model="userName" />
    </el-form-item>
    <el-form-item label="Presentation">
      <el-input type="textarea" v-model="desc"></el-input>
    </el-form-item>
    <el-form-item label="Birthday">
      <el-date-picker v-model="birthday" type="date" placeholder="Pick a date">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Profile picture">
      <ProfileImage />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Modify profile</el-button>
      <el-button @click="resetForm()">Clear</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
// const modifyUserNameURL = 'http://localhost:3000/api/auth/modifyUserName'
// const modifyProfile = 'http://localhost:3000/api/profile/modifyProfile'
import { mapActions } from 'vuex'
import ProfileImage from './ProfileImage'
export default {
  name: 'ModalForm',
  data () {
    return {
      fullName: null,
      userName: null,
      birthday: null,
      desc: null,
      image: null,
      clearImage: false
    }
  },
  components: {
    ProfileImage
  },
  methods: {
    ...mapActions(['modifyProfile', 'modifyUserName']),
    onSubmit: function () {
      if (this.userName !== null || this.fullName !== null) {
        this.modifyUserName({
          userName: this.userName,
          fullName: this.fullName
        })
      } else {
        this.modifyProfile({ birthday: this.birthday, desc: this.desc, image: this.image })
      }
      this.resetForm()
    },
    setImage: function (image) {
      this.image = image
      console.log(this.image)
    },
    resetForm: function () {
      this.fullName = null
      this.userName = null
      this.birthday = null
      this.desc = null
      this.image = null
      this.clearImage = false
    }
  }
}
</script>

<style scoped>
</style>
