<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <body> <img  src="../assets/img/noun-taxi-1694545.svg" alt="..." />


    <!-- Masthead Avatar Image-->
    <!-- Masthead Heading-->
    <header>
    <h1 class="masthead-heading text-uppercase mb-0">Welcome to Walkie-Talkie</h1>
    <!-- Icon Divider-->

      <h2 >About us</h2>
      <p>We are a group of four computer science students from the University of Galway who are undertaking<br>
      this assignment to create a functioning Web Application. We have been developing this Web App for<br>
      months and we are aiming to help people with transport. Our Web Apps purpose is to match users who<br>
      are currently in a similar area and are looking to travel to the same destination. It is helpful<br>
      for those getting taxi's by themselves and are looking to split the fare with another traveller. We<br>
      hope ypu enjoy using our app, as we enjoyed making it.</p>
    </header>

    <!-- Masthead Subheading-->
    <p class="masthead-subheading font-weight-light mb-0"></p>
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>

    </div>

  </body>
</template>

<style scoped>
body{
  background-image:url("../assets/img/background-image1.jpg") ;

  width: 1220px;
  height: 100vh;
  background-size: cover;
  background-color: #a9adaf;
}
header{
  background-color: #e3904c;
  opacity: .9;
  padding: 20px;
  border-radius: 20px;
}
img{
  width: 20%;
  display: inline-block;
}
h1{
  font-size: 60px;
  color: #4ade80;
}
h2{
  text-decoration: underline ;
}
</style>
