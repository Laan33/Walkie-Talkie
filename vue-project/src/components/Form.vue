<template class="temp">
    <h1>Welcome to my blog page</h1>
    <p>This is my blog page for my SaaS app</p>

    <div class="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" v-model="handle" class="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com" >
         </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
            <textarea v-model="comment" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="right">
            <button type="button" @click="postComment" class="btn btn-primary">Comment</button>
        </div>
    </div>
</template>

<script>

import app from '../api/firebase';
import { getFunctions, httpsCallable } from "firebase/functions";

export default {
name: "Blog",
    data() {
        return {
        handle: '',
        comment: ''
        }
    },
    methods : {
        postComment () {
            console.log(this.handle);
            console.log(this.comment);
            const functions = getFunctions(app);
            const postComment = httpsCallable(functions, 'postcomment');

            postComment({"handle": this.handle, "comment":this.comment})
                .then((result) => {
                // Read result of the Cloud Function.
                /** @type {any} */
                console.log(result);
                });
            }
        }
    }
</script>

<style scoped>
    .container{
    text-align: center;
    }
    .right{
        text-align: right;
    }
    h1, p{
        text-align: center;
        padding-top: 10px;
    }
    .mb-3{
        text-align: left;
    }
</style>