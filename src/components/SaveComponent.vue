<template>
  <button @click="saveComment">Save</button>
</template>

<script>
import { getFunctions, httpsCallable } from 'firebase/functions';
import { connectFunctionsEmulator } from 'firebase/functions';

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    saveComment() {
      const functions = getFunctions(app);
      // Uncomment this section if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
      const updateComment = httpsCallable(functions, 'updatecomment?id=' + this.comment.id);
      // Data field automatically populated by Firebase client lib
      // JSON that will arrive at the server will be { data : {comment : "text from input"} }
      updateComment({ comment: this.tempValue }).then((result) => {
        this.getComments();
        this.editing = false;
      });
    },
  },
};
</script>