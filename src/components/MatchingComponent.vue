<template>
  <div class="mb-3 right">
    <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
  </div>
</template>

<script>
import { getFunctions, httpsCallable } from 'firebase/functions';

export default {
  props: {
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
      const functions = getFunctions(app);
      const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
      try {
        //const uid = await this.getCurrentUserId(); // Wait for the promise to resolve
        //console.log("UID: " + uid);
        getMatchingUsers({
          //"uid": uid,
          "origin": this.state1,
          "destination": this.state2
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