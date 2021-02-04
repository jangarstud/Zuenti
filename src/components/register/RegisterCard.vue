<template>
  <div class="d-flex flex-column align-items-center margin shadow">
    <h1 class="margin-register font-register">Register</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm size d-flex flex-column justify-content-center">
      <el-form-item class="font-register" label="User Name" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item class="font-register" label="Full Name" prop="fullName">
        <el-input v-model="ruleForm.fullName"></el-input>
      </el-form-item>
      <el-form-item class="font-register" label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item class="font-register" label="Password" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item class="font-register" label="Repeat pass" prop="repeatPassword">
        <el-input type="password" v-model="ruleForm.repeatPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="font-register" type="primary" @click="submitForm()">Create</el-button>
        <el-button class="font-register" @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const registerURL = 'http://localhost:3000/api/auth/register'
export default {
  data () {
    return {
      ruleForm: {
        userName: '',
        fullName: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      rules: {
        userName: [
          { required: true, message: 'Please input your User Name', trigger: 'blur' },
          { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
        ],
        fullName: [
          { required: true, message: 'Please write your Full Name', trigger: 'blur' },
          { min: 3, message: 'Length should be min 3 characters', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input your email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please input your password', trigger: 'change' },
          { min: 4, message: 'Lenght should be min 4 characters', trigger: ['blur', 'change'] }
        ],
        repeatPassword: [
          { required: true, message: 'Please input your password again', trigger: 'change' },
          { min: 4, message: 'Pleas input the correct password', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      fetch(registerURL, {
        method: 'POST',
        body: JSON.stringify(this.ruleForm),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          alert(res.msg)
          if (res.success === true) {
            this.$router.push({ name: 'Home' })
          }
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>
<style scoped>
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.font-register {
  font-family: 'Novecento';
  font-weight: bold;
}
.size {
  width: 95%;
  margin-right: 30px;
}
.font {
  font-family: 'Novecento';
}
.margin {
  margin-top: 20px;
  margin-bottom: 20px;
}
.margin-register {
  margin-bottom: 40px;
}
</style>
