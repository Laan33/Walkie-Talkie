<template>
  <header class="masthead bg-transparent text-white">
    <div class="container d-flex flex-column">
    <div class="form-group">
      <h1 class="text-black">Register for an account</h1>
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="exampleInputUsername1">Username</label>
      <input type="username" v-model="username" class="form-control" id="exampleInputUsername1" placeholder="Username">
    </div>
    <button @click="register" class="btn btn-primary mt-2">Create Account</button>
    </div>
  </header>
</template>

<script>
import app from "../.api/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      username: ""
    }
  },
  methods: {
    register() {
      console.log("Email " + this.email);
      console.log("Password " + this.password);
      console.log("Username " + this.username);
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password, this.username)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            this.$router.push({path: '/secure'})
            // ...
          }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
    }
  }
}
</script>

<style scoped>
.mt{
  margin-top: 20px;
}
*{
  padding-left: 10%;
}

</style>