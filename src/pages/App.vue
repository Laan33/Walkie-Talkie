<template>
  <body>
  <div>
    <UserIDComponent />
  </div>

  <div class="container mt-5">


    <br><br>
    <PostLocComponent />

  </div>
  </body>
</template>


<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { store } from '../store/store';

import UserIDComponent from "@/components/UserIDComponent.vue";
import SaveComponent from "@/components/SaveComponent.vue";
import PostLocComponent from "@/components/PostLocComponent.vue";
import MatchingComponent from "@/components/MatchingComponent.vue";

export default {

  components: {
    UserIDComponent,
    SaveComponent,
    PostLocComponent,
    MatchingComponent
  },
  data() {
    return {
      handle: '',
      comment: '',
      username: '',
      state: '',
      commentsArray: [],
      locationArray: [],
      editing: false,
      tempValue: null,
      user: null,
      userID: null,
      store,
    }
  }
}
</script>
<style scoped>
body{
  background-image:url("../assets/img/background-image1.jpg") ;
  width: 1220px;
  height: 100vh;
  flex-direction: column;
  background-size:cover ;

}
</style>