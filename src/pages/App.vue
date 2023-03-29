<template>
  <h1>Walkie Talkie</h1>
  <div>
    <UserIDComponent />
  </div>

  <div class="container mt-5">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="handle" id="exampleFormControlInput1"
             placeholder="name@example.com">
    </div>

    <br><br>
    <PostLocComponent />

    <div>
      <MatchingComponent />
    </div>

  </div>
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
  },

  // methods: { // and look at this tooooooooooooooooo


    // async getMatchingUsers() {
    //   const functions = getFunctions(app);
    //   const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
    //   try {
    //     const uid = await this.getCurrentUserId(); // Wait for the promise to resolve
    //     console.log("UID: " + uid);
    //     getMatchingUsers({
    //       "uid": uid,
    //       "origin": this.state1,
    //       "destination": this.state2
    //     }).then((result) => {
    //       console.log(result.data);
    //       //loader.hide();
    //       this.locationArray = result.data;
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
}
</script>
<style scoped>
.right {
  text-align: right;
}

.centre {
  text-align: center;
}

* {
  padding-left: 10%;
}

.btn {
  padding: 10px;
  background-color: greenyellow;
  color: white;
}
</style>