<template>
  <h1>Welcome to my new Blog page</h1>
  <p>User ID:
    <button type="button" @click="getCurrentUserId" class="btn btn-primary">Get User id</button>
    {{ userID }}
  </p>

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
    <!-- 
    <div>
      <button type="button" @click="getCurrentUserId" class="btn btn-primary">Get User id</button>
    </div>
    -->
    <br><br>
    <div class="mb-3 center">
      <label for="exampleUsernameInput1" class="form-label">Username</label>
      <input type="username" class="form-control" v-model="username" id="exampleUsernameInput1"
        placeholder="Username">
    </div>
    <div class="mb-3 center">
      <label for="stateLocation">Origin Location</label>
      <select name="state" v-model="state" id="state" :value="value" @change="e => $emit('input', e.target.value)">

        <option value="DEFAULT" selected="selected">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
      </select>


    </div>
    <div class="mb-3 right">
      <button type="button" @click="postLocation" class="btn btn-primary">Post location</button>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="getMatchingUsernames" class="btn btn-primary">Show Matching USERNAMES</button>
    </div>
    <br><br>




    <!-- Checks to make sure there are actual comments to display -->


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


        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { store } from '../store/store';
export default {
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
  created() {

    this.getComments();
    //window.setInterval(this.getComments, 1000);
  },
  methods: { // and look at this tooooooooooooooooo
    postComment() {
      /* TO DO PUT LOADER BACK 
      let loader = this.$loading.show({ // Optional parameters
        loader: 'dots',
        container: this.$refs.container,
        canCancel: true
      });*/
      const functions = getFunctions(app);


      const postComment = httpsCallable(functions, 'postusercomment');
      postComment({
        "handle": this.handle, "comment":
          this.comment
      }).then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} */
        //loader.hide();
        this.getComments();
      });
    },
    getComments() {
      /* TO DO PUT LOADER BACK 
      let loader = this.$loading.show({    // Optional parameters
        loader: 'dots',
        container: this.$refs.container,
        canCancel: true
      });*/
      const functions = getFunctions(app);

      const getComments = httpsCallable(functions, 'getcomments');
      getComments().then((result) => {
        console.log(result.data);
        //loader.hide();
        this.commentsArray = result.data;
      });
    },
    //getMatchingUsers
    getMatchingUsers() {
      /* TO DO PUT LOADER BACK
      let loader = this.$loading.show({    // Optional parameters
        loader: 'dots',
        container: this.$refs.container,
        canCancel: true
      }); */
      const functions = getFunctions(app);

      const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
      getMatchingUsers({
        "location": this.state
      }).then((result) => {
        console.log(result.data);
        //loader.hide();
        this.locationArray = result.data;
      });
    },
    getMatchingUsernames() {
      /* TO DO PUT LOADER BACK
      let loader = this.$loading.show({    // Optional parameters
        loader: 'dots',
        container: this.$refs.container,
        canCancel: true
      }); */
      const functions = getFunctions(app);

      const getMatchingUsers = httpsCallable(functions, 'getmatchingusernames');
      getMatchingUsers({
        "location": this.state
      }).then((result) => {
        console.log(result.data);
        //loader.hide();
        this.locationArray = result.data;
      });
    },

    postLocation() {
      const functions = getFunctions(app);

      console.log("Posting user location");
      const postLocation = httpsCallable(functions, 'postuserlocation');
      postLocation({
        "handle": this.handle,
        "location": this.state,
        "username": this.username
      }).then((result) => {
        console.log(result);
      });
    },

    /* 

    postLocation() {
      //var userLoc = this.state;
      const functions = getFunctions(app);

      console.log("Posting user location");
      const postLocation = httpsCallable(functions, 'postuserlocation');
      postLocation({
        "handle": this.handle, "location":
          this.state, "Username": this.username
      }).then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} 
        console.log(result);
        //loader.hide();
        //this.get();
      });
      console.log("THIS WORKS 4");
    }, */

    //   deleteComment(id){
    //     const functions = getFunctions(app);

    //     const deleteComment = httpsCallable(functions, 'deletecomment?id='+id);
    //     deleteComment().then((result) => {
    //       if(result.data == "Document successfully deleted")
    //         this.getComments();
    //     }); 
    //   },
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
      const updateComment = httpsCallable(functions, 'updatecomment?id=' + id);

      updateComment({ comment: this.tempValue }).then((result) => {
        this.getComments();
        this.editing = false;
      });
    },

    getCurrentUserId() {
      // Check for logged in user
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        this.user = user; // set the user object to the user prop
        if (user) {
          console.log("User", user.uid);
          this.userID = user.uid;
          // User is signed in
        } else {
          console.log("No user found")
          // User is not signed in

        }
      });
    },
    created() {
      // Check for logged in user
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        this.user = user; // set the user object to the user prop
        if (user) {
          console.log("User", user);
          // User is signed in
        } else {
          console.log("No user found")
          // User is not signed in
        }
      });
      this.getComments();
      //window.setInterval(this.getComments, 1000);
    },
    deleteComment(id) {
      const functions = getFunctions(app);
      const deleteComment = httpsCallable(functions, 'deleteusercomment');
      deleteComment({ id: id }).then((result) => {
        console.log(result.data);
        if (result.data == "Document successfully deleted")
          this.getComments();
      }); // To refresh the client
    },

  }
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