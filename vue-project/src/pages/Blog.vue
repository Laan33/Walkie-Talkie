<template>
  <h1>Welcome to my new Blog page</h1>
  <p>This is my very first blog entry</p>
  <div class="container mt-5">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="handle" id="exampleFormControlInput1"
        placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
      <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="postComment" class="btn btn-primary">Post Comment</button>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="getComments" class="btn btn-primary">Show Comments</button>
    </div>
    <!-- Checks to make sure there are actual comments to display -->
    <div v-if="commentsArray.length > 0">
      <ul>
        <li v-for="comment in commentsArray">
          <div v-if="!editing">
            <span @click="enableEditing(comment.data.comment)">
              {{ comment.data.comment }}</span>
          </div>

          <div v-if="editing">
            <input v-model="tempValue" class="input" />
            <button @click="disableEditing"> Cancel </button>
            <button @click="save(comment.id)"> Save </button>
          </div>

          <button type="button" @click="deleteComment(comment.id)" class="btn btn-primary">Delete Comment</button>
          <button type="button" @click="getUserId(currentUserID)" class="btn btn-primary">Get User id</button>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
export default {
  data() {
    return {
      handle: '',
      comment: '',
      commentsArray: [],
      editing: false,
      tempValue: null,
      currentUserID: '',
    }
  },
  created() {

    this.getComments();
    //window.setInterval(this.getComments, 1000);
  },
  methods: {
    postComment() {
      let loader = this.$loading.show({    // Optional parameters
        loader: 'dots',
        container: this.$refs.container,
        canCancel: true
      });
      const functions = getFunctions(app);
      // Uncomment this code if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
      const postComment = httpsCallable(functions, 'postcomment');
      postComment({ "handle": this.handle, "comment": this.comment }).then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} */
        loader.hide();
        this.getComments();
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
    },
    deleteComment(id) {
      const functions = getFunctions(app);
      // Uncomment this section if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
      const deleteComment = httpsCallable(functions, 'deletecomment?id=' + id);
      deleteComment().then((result) => {
        if (result.data == "Document successfully deleted")
          this.getComments();
      }); // To refresh the client
    },
    enableEditing(comment) {
      this.tempValue = comment;
      this.editing = true;
    },
    disableEditing() {
      this.tempValue = null;
      this.editing = false;
    },
    save(id) {
      const functions = getFunctions(app);
      // Uncomment this section if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
      const updateComment = httpsCallable(functions, 'updatecomment?id=' + id);
      // Data field automatically populated by Firebase client lib
      // JSON that will arrive at the server will be { data : {comment : "text from input"} }
      updateComment({ comment: this.tempValue }).then((result) => {
        this.getComments();
        this.editing = false;
      });
    },
    getCurrentUserId() {
      const functions = getFunctions(app);
      const getUserId = httpsCallable(functions, 'getCurrentUserId');
      getUserId().then((result) => {
        console.log(result.data);
        loader.hide();
        this.currentUserID = result.data;
      });
    }
  }
}
</script>
<style scoped>
.right {
  text-align: right;
}

* {
  padding-left: 10%;
}
</style>