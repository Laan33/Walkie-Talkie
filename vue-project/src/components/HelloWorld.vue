<script>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <head>
    <title> WalkieTalkie Login and Registration</title>
</head>

<body>
    <div class="container1">
      <div class="card">
      <div class="inner-box" id="card">
        <div class="card-front">
        <h2>LOGIN</h2>
        <form>
          <input type="email" class="input-box" placeholder="Your Email ID" required>
        <input type="password" class="input-box" placeholder="Password" required>
      <button type="submit" class="submit-btn" onclick="window.location='Home Page.html';">Submit</button>  
    <input type="checkbox" class="checkbox"><span>Remember Me</span> 
    </form>
    <button type="button" class="btn" onclick="openRegister()">I'm new here</button>
    <a href="">Forgot Password</a>    
  </div>
      <div class="card-back">
        <h2>Register</h2>
        <form>
          <input type="text" class="input-box" placeholder="Your Name" required>
          <input type="email" class="input-box" placeholder="Your Email ID" required>
        <input type="password" class="input-box" placeholder="Password" required>
      <button type="submit" class="submit-btn" onclick="window.location='Home Page.html';">Submit</button>  
    <input type="checkbox" class="checkbox"><span>Remember Me</span> 
    </form>
    <button type="button" class="btn" onclick="openLogin()">I have an account</button>
    <a href="">Forgot Password</a>
      </div>
    </div>
    </div>
    </div>
</body>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
div{
  width: 100%;
}

.container1{
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  background: rgba(67, 159, 94, 0.781);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container2{
  width: 100%;
  height: 1000vh;
  font-family: sans-serif;
  background: rgba(67, 159, 94, 0.781);
  color: #fff;
  display: flex;
  align-items: left;
  justify-content: left;
}
.card{
  width: 350px;
  height: 500px;
  box-shadow: 0 0 40px 20px rgba(0,0,0,0.26);
  perspective: 1000px;
}
.inner-box{
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
}
.card-front,.card-back{
  position: absolute;
  width: 100%;
  height: 100%;
background-position: center;
background-size: cover;
background-image: linear-gradient(rgba(0,0,100,0.8),rgba(0,0,100,0.8),url(background.jfif));
padding: 55px;
box-sizing: border-box;
backface-visibility: hidden;
}
.card-back{
  transform: rotateY(180deg);
}
.card h2{
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

input{
  width: 100%;
  background: transparent;
  border: 1px solid #fff;
  margin: 6px 0;
  height: 32px;
  border-radius: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  color: #fff;
}
.checkbox{
 height: 15px;
}

::placeholder{
  color: #fff;
  font-size: 12px;
}
button{
  width: 100%;
  background: transparent;
  border: 1px solid #fff;
  margin: 35px 0 10px;
  height: 32px;
  font-size: 12px;
  border-radius: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  color: #fff;
  cursor: pointer;
}
.submit-btn{
  position: relative;
}
.submit-btn::after{
  content: '\27a4';
  color: #333;
  line-height: 32px;
  font-size: 17px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: absolute;
  right: -1px;
  top: -1px;
}
span{
  font-size: 13px;
  margin-left: 10px;
}
.bard .btn{
  margin-top: 70px;
}
.card a{
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 13px;
  margin-top: 8px;
}

.collect-btn{
width: 20%;
background: green;
}

.info-box{
  width: 51%;
  background: green;
  border: 1px solid rgb(255, 255, 255);
  margin: 6px 0;
  height: 32px;
  border-radius: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  text-align: left;
  color: #fff;
}

.pass-no{
  width: 15%;
  background: green;
}

.pickup-time{
  width: 15%;
  background: green;
}

img{
  height: 250px;
  display: block;
  margin-left: 20px;
  border: 2px solid black;
  border-radius: 20px;
 
}
.header{
  width: 100%;
  height: 100vh;
  padding-left: 11%;
  padding-right: 8%;
}
.top-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 15px;
  border-bottom: 1px solid white;
}

</style>
