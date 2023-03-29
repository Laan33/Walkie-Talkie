<template>
  <div class="mb-3 right">
    <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
  </div>
</template>

<script>
import UserIDComponent from "@/components/UserIDComponent.vue";
import { getFunctions, httpsCallable } from 'firebase/functions';

export default {

  components: {
    UserIDComponent
  },

  name: 'MatchingUsers',
  data() {
    return {
      locationArray: [],
      state1: '',
      state2: '',
    };
  },
  methods: {
    async getCurrentUserId() {
      return this.$refs.userIDComponent.getCurrentUserId();
    },
    async getMatchingUsers() {
      const functions = getFunctions();
      const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
      try {
        const uid = await this.getCurrentUserId();
        console.log("UID: " + uid);
        const result = await getMatchingUsers({
          "uid": uid,
          "origin": this.state1,
          "destination": this.state2
        });
        console.log(result.data);
        this.locationArray = result.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>