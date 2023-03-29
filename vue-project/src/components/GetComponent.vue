<template>
  <div>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="handle">Handle</label>
        <input type="text" class="form-control" v-model="handle">
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea class="form-control" v-model="comment"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Post Comment</button>
    </form>
  </div>
</template>

<script>
import { getFunctions, httpsCallable } from "firebase/functions";
import app from "@/.api/firebase";

export default {
  data() {
    return {
      handle: "",
      comment: ""
    };
  },
  methods: {
    submitComment() {
      const functions = getFunctions(app);
      const postComment = httpsCallable(functions, 'postusercomment');
      postComment({
        "handle": this.handle,
        "comment": this.comment
      }).then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} */
        //loader.hide();
        this.getComments();

        // Clear the text fields
        this.handle = "";
        this.comment = "";
      });
    },
    getComments() {
      let loader = this.$loading.show({    // Optional parameters
        loader: 'dots',
        container: this.$refs.container,
        canCancel: true
      });
      const functions = getFunctions(app);
      // Uncomment this section if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
      const getComments = httpsCallable(functions, 'getcomments');
      getComments().then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} */
        console.log(result.data);
        loader.hide();
        this.commentsArray = result.data;
      });
    }
  },
  mounted() {
    this.getComments();
  },
  computed: {
    commentsArray() {
      return this.$store.getters.commentsArray;
    }
  }
};
</script>