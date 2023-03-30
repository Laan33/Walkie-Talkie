<template>
  <section class="page-section portfolio mt-5" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Portfolio Grid Items-->
      <div class="row justify-content-center">
        <h1>Your personal details</h1><br><br>
        
        <h3>Your email: {{ email }}</h3>
        <h3>Your UID: {{ uid }}</h3>
        
      </div>
    </div>
  </section>
</template>

<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
export default {
  name: "Secure",
  data() {
    return {
      email: null,
      uid: null
    };
  },

  created(){
    // Call secure function and load some data
    const functions = getFunctions(app);
    //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
    const secureFunction = httpsCallable(functions, 'securefunction');
    console.log("yay");
    secureFunction()
        .then((result) => {
          // Read result of the Cloud Function.
          /** @type {any} */
          console.log("whats" + result);
          console.log("email " + this.email);
          // Update email and uid data properties
          console.log("hmmmm " + result.auth);
          console.log(result.data.uid);
          console.log("yay" + result.auth.uid);
          //this.email = result.data.email;
          //this.uid = result.data.uid;
        });
  }

}
</script>

<style scoped>
*{
  padding-left: 10%;
}
</style>
