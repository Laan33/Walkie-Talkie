<template>
    <h1>Create an Account</h1>
    <!-- <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="text" placeholder="Password" v-model="password"></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p> -->
</template>

<!-- <script setup>
import{ ref } from "vue";
import {getAuth, createUserWithEmailAndPasswords} from "firebase/auth"
import { useRouter } from "vue-router";
const email = ref( "email" );
const password = ref( "password" );
const router = useRouter();
const register = () => {
    createUserWithEmailAndPasswords(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!");
        router.push('/feed') 
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
};

const signInWithGoogle =() => {

}
</script> -->