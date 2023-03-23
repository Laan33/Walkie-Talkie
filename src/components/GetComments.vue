<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from
    "firebase/functions";

export default {
    name: "Blog",
    data() {
        return {
            handle: '',
            comment: ''
        }
    },
    methods: {

        getComments() {
            const functions = getFunctions(app);

            if (window.location.hostname === "localhost") {
                connectFunctionsEmulator(functions, "localhost", 5001);
            }

            const getComments = httpsCallable(functions, "getcomments");
            getComments()
                .then((result) => {
                    // Read result of the Cloud Function.
                    console.log(result);
                    // Update your component's data property with the fetched comments
                    this.comments = result.data;
                })
                .catch((error) => {
                    console.error(error);
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
                        <td>{{ comment.timestamp.toDate() }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="right">
                <button type="button" @click="postComment" class="btn">Post</button>
            </div>
        </div>

    </div>
</template>

<style scoped>
.container {
    text-align: center;
}

label,
div {
    padding-left: 5px;
    padding: 10px;
    padding-top: 10px;
}

.btn {
    text-align: right;
    position: relative;
    left: 80px;

}
</style>


