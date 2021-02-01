<template>
  <div class="prueba d-flex justify-content-center align-content-center">
    <form @submit.prevent="addUser" class="top-margin">
      <div class="from-group ">
        <label for="inputName">User Name</label>
        <input
          type="text"
          v-model="newUser.userName"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="your name"
        />
      </div>
      <div class="from-group ">
        <label for="inputSecondName">Full name</label>
        <input
          type="text"
          v-model="newUser.fullName"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="your second name"
        />
      </div>
      <div class="from-group ">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          v-model="newUser.email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="from-group ">
        <label for="inputPassword">Password</label>
        <input
          type="text"
          v-model="newUser.password"
          class="form-control"
          id="password"
          placeholder="abcde"
        />
      </div>
      <div class="from-group ">
        <label for="inputRepeatPassword">Repeat password</label>
        <input
          type="text"
          class="form-control"
          v-model="newUser.repeatPassword"
          id="RepeatPassword"
          placeholder="abcde"
        />
      </div>
      <button class="btn-primary btn-block top-margin" id="boton-send">Send</button>
    </form>
  </div>
</template>

<script>
class NewUser {
  constructor (userName, fullName, email, password, repeatPassword) {
    this.userName = userName
    this.fullName = fullName
    this.email = email
    this.password = password
    this.repeatPassword = repeatPassword
  }
}
export default {
  data () {
    return {
      newUser: new NewUser()
    }
  },
  methods: {
    addUser () {
      const res = fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(this.newUser),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
      console.log(res)
    }
  }
}
</script>
<style scoped>
.prueba{
    background: white;
    width: 100%;
    height: 85%;
}
.top-margin {
    margin-top: 20px;
}

form {
  margin: 10px;
}
</style>
