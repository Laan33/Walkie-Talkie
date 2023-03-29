<template>
  <div class="mb-3 right">
    <button type="button" @click="getMatchingUsers" class="btn btn-primary">Show Matching Users</button>
  </div>
  <div class="matching-users">
    <table>
      <thead>
      <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in formattedUsers" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
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
      const functions = getFunctions(app);
      const getMatchingUsers = httpsCallable(functions, 'getmatchingusers');
      try {
        console.log(this.map1, this.map2);
        const result = await getMatchingUsers({
          "origin": this.map1,
          "destination": this.map2
        });
        console.log(result.data);
        this.locationArray = result.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    formattedUsers() {
      return this.locationArray.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
    }
  },
};
</script>