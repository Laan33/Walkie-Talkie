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
        // Clear the text fields
        this.handle = "";
        this.comment = "";
        this.getComments();
      });
    }
  }
};
</script>