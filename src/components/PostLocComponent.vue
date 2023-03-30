<template>

  <div class="card">
    <div class="mb-3 center">
      <label for="exampleUsernameInput1" class="form-label">Username</label>
      <input type="username" class="form-control" v-model="username" id="exampleUsernameInput1" placeholder="Username">
    </div>
    <div class="mb-3 center">
      <label for="examplePhoneNumInput" class="form-label">Phone number</label>
      <input type="phone number" class="form-control" v-model="phoneNum" id="phoneNum1" placeholder="Phone Number">
    </div>

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
<!--      <MapComponent :map1="state1" :map2="state2" />-->
    </div>

    <MatchingComponent :map1="state1" :map2="state2" />

  </div>

</template>

<script>
import { getFunctions, httpsCallable } from 'firebase/functions';
import { ref } from 'vue';
// import MapComponent from "@/components/MapComponent.vue";
import MatchingComponent from "@/components/MatchingComponent.vue";

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
    // MapComponent,
    MatchingComponent
  }
};
</script>
<style scoped>
input {
  width: 100%;
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #4ade80;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.card{
  width: 350px;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgb(98, 63, 35);
  background-color: #1e293b;
}
</style>