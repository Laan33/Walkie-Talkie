<template>
  <body>
    <div class="card">
      <label>Register</label>
      <input type="email" v-model="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <input type="password" v-model="password"  id="exampleInputPassword1" placeholder="Password">
      <button @click="register" >Create Account</button>
    </div>
  </body>
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
body {
  background-image:url("../assets/img/background-image1.jpg") ;
  width: 1220px;
  height: 100vh;
  flex-direction: column;
  background-size:cover ;
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
  box-shadow: 0px 0px 20px rgb(98, 63, 35);
  background-color: #1e293b;
}
label{
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
}

input {
  width: 100%;
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #4ade80;
 text-align: center;
  font-size: 14px;
  color: #fff;
}
input::placeholder{
  color: #fff;
}

button {
  width: 100%;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #4ade80;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 20px;
  margin-top: 20px;
}

button:hover {
  background-color: #4ade80;
}

button:active,
button:focus {
  outline: none;
  box-shadow: none;
}

@media (max-width: 1300px) {
  .card {
    width: 100%;
    max-width: 350px;
    margin-top: 10em;
  }
}
@media (max-width: 576px) {

  .card{
    width: 80%;
  }
}

</style>