<template>
    <div>
        <h1>Welcome to my blog page</h1>
        <p>This is my blog page for my SaaS app123123123</p>
        <div class="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" v-model="handle" class="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="right">
                <button type="button" @click="postComment" class="btn">Post</button>
                <button type="button" @click="getComments" class="btn">Get Comments</button>
            </div>
        </div>
        <div class="mb-3 right">
            <button type="button" @click="getComments" class="btn btn-primary">Show Comments</button>
        </div>

        <pre class="beans">

                </pre>
        
        <table v-if="comments.length > 0" class="table">
            <thead>
                <tr>
                    <th scope="col">Handle</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(comment, index) in comments" :key="index">
                    <td>{{ comment.handle }}</td>
                    <td>{{ comment.comment }}</td>
                    <td>{{ Date.parse(comment.timestamp) }}</td>
                </tr>
            </tbody>
        </table>
        <br>
    <p v-for="comment in comments" :key="comment.handle">
        Comment: {{ comment.comment }}<br>
        Handle: {{ comment.handle }} <br>
        Timestamp: {{ comment.timestamp  }}<br><br>
        
    </p> 
    const postConverted = new firebase.firestore.Timestamp(preConverted.seconds, preConverted.nanoseconds);
    //firebase.firestore.Timestamp(comment.timestamp)
    </div>
</template>
  
<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
//var comments: []

export default {
    name: "Blog",

    data() {
        return {
            handle: "",
            comment: "",
            comments: []
        };
    },
    methods: {
        postComment() {
            console.log(this.handle);
            console.log(this.comment);
            const functions = getFunctions(app);

            if (window.location.hostname === "localhost") // Check if working locally
                connectFunctionsEmulator(functions, "localhost", 5001);

            const postComment = httpsCallable(functions, "postcomment");
            postComment({ handle: this.handle, comment: this.comment }).then((result) => {
                // Read result of the Cloud Function.
                // /** @type {any} */
                console.log(result);
            });
        },
        /*
        async getComments() {
            //db = app.firestore();
            // query to get all docs in 'countries' collection
            const querySnap = await getDocs(query(collection(admin.firestore(), 'comments')));

            // add each doc to 'countries' array
            querySnap.forEach((doc) => {
                this.comments.push(doc.data())
            })

        } 
        
        getComments() {
          console.log(this.handle);
          console.log(this.comment);
          const functions = getFunctions(app);
    
          const getComments = httpsCallable(functions, "getcomments");
          
          getComments().then((result) => {
          
            // Read result of the Cloud Function.
            // /** @type {any} * /
            console.log(result);
            console.log(result.data);
            this.comments = result.data;
          });
        } */

        getComments() {
            const functions = getFunctions(app);
            const getComments = httpsCallable(functions, 'getcomments');
            getComments().then((result) => {
                console.log(result);
                const commentsArray = result.data;
                this.comments = commentsArray;
                //this.comments = 
                //const postConverted = new firebase.firestore.Timestamp(preConverted.seconds, preConverted.nanoseconds);
            }).catch((error) => {
                console.error(error);
            });

        }
    }
};




</script>
  