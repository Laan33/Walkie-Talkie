<template>
  <div>
    <div class="mb-3 center">
      <label for="stateLocation">Origin Location</label>
      <select name="state1" v-model="state1" id="state1" :value="value">
        <option value="DEFAULT" selected="selected">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
      </select>
    </div>

    <div class="mb-3 center">
      <label for="stateLocation">Destination Location</label>
      <select name="state2" v-model="state2" id="state2" :value="value">
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
      <button type="button" @click="postUserLocation" class="btn btn-primary">Post location</button>
    </div>

    <div>
      <MapComponent :map1="state1" :map2="state2" />
    </div>

  </div>
</template>

<script>
import { getFunctions, httpsCallable } from 'firebase/functions';
import { ref } from 'vue';
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: 'PostLocation',

  setup() {
    const state1 = ref('DEFAULT');
    const state2 = ref('DEFAULT');
    const username = ref(''); // Your username goes here

    const postUserLocation = async () => {
      const functions = getFunctions();
      const postLocation = httpsCallable(functions, 'postuserlocation');
      try {
        const result = await postLocation({
          "username": username.value,
          "origin": state1.value,
          "destination": state2.value,
        });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    return {
      state1,
      state2,
      postUserLocation,
      map1: "state1",
      map2: "state2"
    };
  },

  components: {
    MapComponent
  }
};
</script>