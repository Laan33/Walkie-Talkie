<template>
  <div class="mb-3 right">
    <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
  </div>

  <div v-if="locationArray.length > 0">
    <table>
      <thead>
      <tr>
        <th>Username</th>
        <th>Origin</th>
        <th>Destination</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(result, index) in locationArray">

        <template v-if="index % 3 === 0">
          <tr>
            <td>{{ locationArray[index].username ? locationArray[index].username : 'Empty' }}</td>
            <td v-if="locationArray[index + 1]">{{ locationArray[index + 1].data ? locationArray[index + 1].data.result : 'Empty' }}</td>
            <td v-if="locationArray[index + 2]">{{ locationArray[index + 2].data ? locationArray[index + 2].data.result : 'Empty' }}</td>
          </tr>
        </template>
      </template>
      </tbody>
    </table>
  </div>
</template>

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
      console.log(this.app);
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
        this.result = result.data;
        this.locationArray = result.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>