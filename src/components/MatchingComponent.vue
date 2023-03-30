
<script>
import app from '../.api/firebase';
import { getFunctions, httpsCallable } from 'firebase/functions';

export default {
  props: {
    map1: String,
    map2: String,
    app: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentUserID: '',
      locationArray: [],
      state1: '',
      state2: '',
    };
  },
  methods: {
    async getMatchingUsers() {
      console.log("Hello1wworld");
      const functions = getFunctions(app);
      console.log(functions)
      const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
      try {
        console.log(this.map1, this.map2);
        const result = await getMatchingUsers({
          "origin": this.map1,
          "destination": this.map2
        });
        console.log(result.data);

        this.locationArray = result.data;
        let myAlert =this.locationArray.join('\n');
        let alert = document.getElementById("alert");
        alert.innerHTML = myAlert;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <div class="mb-3 right">
    <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
  </div>
  <div id="alert" class="alert alert-success" role="alert">
    You matched with:
  </div>
</template>
<style scoped>
.alert{
  background-color: #4ADE80FF;
  width: 50%;
}
</style>
