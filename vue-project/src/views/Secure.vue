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
        <!-- Portfolio Item 1-->
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="../assets/img/portfolio/cabin.png" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 2-->
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="../assets/img/portfolio/cake.png" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 3-->
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="../assets/img/portfolio/circus.png" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 4-->
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="../assets/img/portfolio/game.png" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 5-->
        <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="../assets/img/portfolio/safe.png" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 6-->
        <div class="col-md-6 col-lg-4">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="../assets/img/portfolio/submarine.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
export default {
  name: "Secure",

  created(){
    // Call secure function and load some data
    const functions = getFunctions(app);
    //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
    const secureFunction = httpsCallable(functions, 'securefunction');
    secureFunction()
        .then((result) => {
          // Read result of the Cloud Function.
          /** @type {any} */
          console.log(result);
        });
  }

}
</script>

<style scoped>

</style>