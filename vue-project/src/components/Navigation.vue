<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand" to="/">My Application</router-link>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/blog">Blog</router-link></li>
          <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Register">Register</router-link></li>
          <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/login">Sign In</router-link></li>
          <li v-if="isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/secure">Secure</router-link></li>
          <li v-if="isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link @click="logout" class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import app from "../.api/firebase";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";

export default {
  name: "Navigation",
  data() {
    return {
      isLoggedIn : false
    }
  },
  created (){
    // Check if the user is logged in
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods : {
    logout(){
      signOut(getAuth(app)).then(() => {
        // Send them back to the home page!
         this.$router.push("/");
      });
    }
  }
}
</script>
<style scoped>

</style>