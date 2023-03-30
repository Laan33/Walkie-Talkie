<template>

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
        this.currentUserID = result.data.userId;
        console.log(this.currentUserID)
      }).catch((error) => {
        console.error(error);
      });
    },
  },
};
</script>
<style scoped>

</style>