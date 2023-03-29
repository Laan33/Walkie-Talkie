<template>
  <header class="masthead bg-transparent text-white">
    <div class="card">
      <label>Register</label>
      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      <button @click="register" class="btn btn-primary mt-2">Create Account</button>
    </div>
  </header>
</template>

<script>
import app from "../.api/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "RegisterForm",
  components: {},

  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    register() {
      console.log("Email " + this.email);
      console.log("Password" + this.password);
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
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
header {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  background-color: var(--dark);
  color: var(--light);
}
.card{
  width: 350px;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgb(99, 180, 110);
  background-color: #ffffff;
}
label{
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

input {
  width: 100%;
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #333;
}

button {
  width: 100%;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #25641d;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 20px;
  margin-top: 20px;
}

button:hover {
  background-color: #25641d;
}

button:active,
button:focus {
  outline: none;
  box-shadow: none;
}

@media (max-width: 767px) {
  .card {
    width: 100%;
    max-width: 350px;
  }
}

</style>