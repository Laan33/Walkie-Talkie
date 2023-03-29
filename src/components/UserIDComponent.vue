<template>
  <div>
    <button type="button" @click="getCurrentUserId" class="btn btn-primary">Get User id</button>
    User ID: {{ currentUserID }}
  </div>
</template>

<script>
import { getFunctions, httpsCallable } from "firebase/functions";

export default {
  props: {
    app: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentUserID: "",
    };
  },
  methods: {
    getCurrentUserId() {
      const functions = getFunctions(this.app);
      const getUserId = httpsCallable(functions, 'getCurrentUserId');
      getUserId().then((result) => {
        // console.log(result.data);
        this.currentUserID = result.data.userId;
        return this.getCurrentUserId();
      });
    },
  },
};
</script>