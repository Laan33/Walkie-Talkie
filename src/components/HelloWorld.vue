<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <body>
  <div >
    <!-- Masthead Avatar Image-->
    <img  src="../assets/img/avataaars.svg" alt="..." />
    <!-- Masthead Heading-->
    <h1 class="masthead-heading text-uppercase mb-0">Awesome App</h1>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Masthead Subheading-->
    <p class="masthead-subheading font-weight-light mb-0">Innovator - Creator - Terrible at both</p>
  </div>
  </body>
</template>

<style scoped>
body{
  background-image:url("../assets/img/background-image1.jpg") ;
  width: 1220px;
  height: 100vh;
  background-size: cover;
}
img{
  width: 20%;
}
</style>
