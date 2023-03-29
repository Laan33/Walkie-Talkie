<template>
  <div class="mb-3 right">
    <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
  </div>
</template>

<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable } from 'firebase/functions';

export default {
  props: {

    map1: String,
    map2: String,

    app: {
      type: Object,
      required: true,
    },
  },
  data() {

    return {
      currentUserID: '',
      locationArray: [],
      state1: '',
      state2: '',
    };
  },
  methods: {
    /*
    async getCurrentUserId() {
      console.log("Test1");

      const functions = getFunctions(app);
      const getUserId = httpsCallable(functions, 'getCurrentUserId');
      console.log("Test2");
      try {
        console.log("Test3");
        const result = await getUserId();
        console.log(result.data);
        this.currentUserID = result.data.userId;
        return this.currentUserID;
      } catch (error) {
        console.error(error);
        return null;
      }
    }, */
    async getMatchingUsers() {
      console.log("Hello1wworld");
      console.log(this.app);
      const functions = getFunctions(app);
      console.log(functions)
      const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
      try {
        //const uid = await this.getCurrentUserId(); // Wait for the promise to resolve
        //console.log("UID: " + uid);
        console.log(this.map1, this.map2);
        getMatchingUsers({
          //"uid": uid,
          
          "origin": this.map1,
          "destination": this.map2
        }).then((result) => {
          console.log(result.data);
          //loader.hide();
          this.locationArray = result.data;
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>