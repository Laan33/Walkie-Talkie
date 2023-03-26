<template>
    <h1>Welcome to my new Blog page</h1>
    <p>Get user id 
    <button type="button" @click="getCurrentUserId" class="btn btn-primary">Get User id</button>
    {{  userID }}
    </p>
    <div >
        <h1>records</h1>
        <ul>
            <li v-for ="record in tempMatch" >
                <p>{{ "Name: "+record.data.uName }}</p>
                <p>{{ "Pick Up Location:  "+record.data.uLocation }}</p>
                <p>{{ "Drop off: "+record.data.uDestination }}</p>
            </li>
        </ul>
    </div>
    
    <div class="container mt-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">uName</label>
        <input type="email" class="form-control" v-model="uName" id="exampleFormControlInput1" placeholder="uName">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">uLocation</label>
        
        <div>
            <select v-model="uLocation">
                <option v-for="option in myOptions" :value="option">
                {{ option }}
                </option>
            </select>

            <div>From: {{ uLocation }}</div>
        </div>
        <div>
            <select v-model="uDestination">
                <option v-for="option in myOptions" :value="option">
                {{ option }}
                </option>
            </select>

            <div>To: {{ uDestination }}</div>
        </div>
        <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="mb-3 right">
        <button type="button" @click="postComment" class="btn btn-primary">Post Comment</button>
      </div>
      <div class="mb-3 right">
        <button type="button" @click="uLocationCompare" class="btn btn-primary">get mach</button>
      </div>
      <div class="mb-3 right">
        <button type="button" @click="getComments" class="btn btn-primary">Show Comments</button>
      </div>
      <div>
        <button type="button" @click="getCurrentUserId" class="btn btn-primary">Get User id</button>
    </div>
      <!-- Checks to make sure there are actual comments to display -->
      <div v-if="commentsArray.length > 0">
        <ul>
        <li v-for="comment in commentsArray">
          <div v-if="!editing">
            <span @click="enableEditing(comment.data.comment)">
              {{comment.data.comment}}</span>
          </div>
  
          <div v-if="editing">
            <input v-model="tempValue" class="input"/>
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
  //import firebase from "firebase/firestore";

  
  import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
  import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
  import {store} from '../store/store';
  import { collection } from "firebase/firestore";
  import { collectionGroup, query, where, getDocs } from "firebase/firestore";
  
  export default {
    data() {
      return {
        uName: '',
        uLocation: '',
        uDestination:'',
        myValue: '',
        returnedData: [],
        myOptions: ['Galway', 'Clare', 'op3'],
        commentsArray:[],
        editing:false,
        tempValue:null,
        user:null,
        userID: null,
        store,
        matchingData: [],
        tempMatch: [],


        match: []
      }
    },
    mounted() {
  
  // Retrieve records from the "matchinData" collection
  // that have their uLocation set to "Galway"
  
},
    created(){
        this.getDataTest();
        this.getComments();
        // this.uLocationCompare();
        


    },
    
    methods : { 
        postComment() {
            let loader = this.$loading.show({ // Optional parameters
            loader: 'dots',
            container: this.$refs.container,
            canCancel: true
            });
            const functions = getFunctions(app);
            
        
            const postComment = httpsCallable(functions, 'postmatchingdata');
            postComment({"uName": this.uName, "uLocation":
            this.uLocation, "uDestination": this.uDestination}).then((result) => {
            // Read result of the Cloud Function.
            // /** @type {any} */
            loader.hide();
            this.getComments();
            });
},
    uLocationCompare() {
        this.tempMatch = [];
        this.commentsArray.forEach(element => {
        if (element.data.uLocation == this.uLocation) {
            this.tempMatch.push(element);
        }
        });
        console.log(this.tempMatch);
        return this.tempMatch;
           
        },
      getComments() {
        let loader = this.$loading.show({    // Optional parameters
          loader: 'dots',
          container: this.$refs.container,
          canCancel: true
        });
        const functions = getFunctions(app);
        
        const getComments = httpsCallable(functions, 'getmatchingdata');
        getComments().then((result) => {
          console.log(result.data);
          loader.hide();
          this.commentsArray = result.data;
        });
      },
      getDataTest() {
        console.log("Function get data test");

        let loader = this.$loading.show({    // Optional parameters
          loader: 'dots',
          container: this.$refs.container,
          canCancel: true
        });
        const functions = getFunctions(app);
        
        const getComments = httpsCallable(functions, 'getmatchingdata');
        getComments().then((result) => {
          console.log(result.data);
          loader.hide();
          this.returnedData = result.data;

        });
      },
      matchData(){
        
      },
      myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        },
    
      enableEditing(comment){
        this.tempValue = comment;
        this.editing = true;
        },
      disableEditing(){
        this.tempValue = null;
        this.editing = false;
      },
      save(id) {
        const functions = getFunctions(app);
        const updateComment = httpsCallable(functions, 'updatecomment?id=' + id);

        updateComment({ comment : this.tempValue }).then((result) => {
          this.getComments();
          this.editing = false;
        });
      },
      
      getCurrentUserId (){
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
        created(){
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
        deleteComment(id){
            const functions = getFunctions(app);
            const deleteComment = httpsCallable(functions,'deleteusercomment');
            deleteComment({id:id}).then((result) => {
            console.log(result.data);
            if(result.data == "Document successfully deleted")
            this.getComments();
        }); // To refresh the client
        },
        

    }
  }
  </script>
  <style scoped>
  .right{
    text-align: right;
  }
  *{
    padding-left: 10%;
  }
  .btn{
    padding: 10px;
    background-color: greenyellow;
    color: white;
  }
  </style>