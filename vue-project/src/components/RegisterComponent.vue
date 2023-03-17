<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from
"firebase/functions";

export default {
    name: "Blog",
        data(){
        return {
        handle:'',
        comment:''
    }
    },
    methods: {
        postComment(){
            console.log(this.handle);
            console.log(this.comment);
            const functions = getFunctions(app);

            if(window.location.hostname === 'localhost') // Check if working locally
            connectFunctionsEmulator(functions, "localhost", 5001);
            
            const postComment = httpsCallable(functions, 'postcomment');
            postComment({"handle": this.handle, "comment": this.comment}).then((result) => {
            // Read result of the Cloud Function.
            // /** @type {any} */
            console.log(result);
            });
        }

        
    }
}

</script>


<template>
<div>
    <h1>Welcome to my blog page</h1>
    <p>This is my blog page for my SaaS app</p>
    <div class="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" v-model= "handle" class="form-control" id="exampleFormControlInput1"
            placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
            <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="right">
            <button type="button" @click="postComment" class="btn">Post</button>
        </div>
    </div>

</div>
    
</template>

<style scoped>

.container{
text-align: center;
}
label, div{
    padding-left: 5px;
    padding: 10px;
    padding-top: 10px;
}

.btn{
    text-align: right;
    position: relative;
    left: 80px;

}

</style>


