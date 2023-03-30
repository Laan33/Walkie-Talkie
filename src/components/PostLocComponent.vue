<template>

  <div class="card">
    <table>
      <tr><td>
        <div class="left">
    <label for="exampleUsernameInput1" class="form-label">Username</label>
    <input type="text" class="form-control" v-model="username" id="exampleUsernameInput1" placeholder="Username">
        </div>
        <div class="right">
          <label for="examplePhoneNumInput" class="form-label">Phone number</label>
          <input type="text" class="form-control" v-model="phoneNum" id="phoneNum1" placeholder="Phone Number">
        </div>
        <div >
          <label>Where are you?</label>
    <select name="state1" v-model="state1" id="state1" :value="value">

      <option value="DEFAULT" disabledselected="selected">Current Location</option>
      <option value="ES">Eyre Square</option>
      <option value="UG">University of Galway</option>
      <option value="WS">Westside</option>
      <option value="KC">Knocknacarra</option>
      <option value="CG">Claregalway</option>
      <option value="SH">Salthill</option>
    </select>
        </div>
        <div >
    <label>Where are you going?</label>
    <select name="state2" v-model="state2" id="state2" :value="value">
      <option value="DEFAULT" disabled selected="selected">Destination</option>
      <option value="ES">Eyre Square</option>
      <option value="UG">University of Galway</option>
      <option value="WS">Westside</option>
      <option value="KC">Knocknacarra</option>
      <option value="CG">Claregalway</option>
      <option value="SH">Salthill</option>
    </select>
        </div>
    <div class="buttons">
    <button type="button" @click="postUserLocation" class="btn btn-primary">Post location</button>
    </div>
    <MatchingComponent :map1="state1" :map2="state2" />
    </td>

      <td>
    <MapComponent :map1="state1" :map2="state2" />
      </td>
    </tr></table>
  </div>

</template>

<script>
import { getFunctions, httpsCallable } from 'firebase/functions';
import { ref } from 'vue';
import MapComponent from "@/components/MapComponent.vue";
import MatchingComponent from "@/components/MatchingComponent.vue";

export default {
  name: 'PostLocation',


  setup() {
    const state1 = ref('DEFAULT');
    const state2 = ref('DEFAULT');
    const username = ref(''); // Your username goes here
    const phoneNum = ref('');

    const postUserLocation = async () => {
      console.log("phone: " + phoneNum1.value + " ,example: " + exampleUsernameInput1.value);
      const functions = getFunctions();
      const postLocation = httpsCallable(functions, 'postuserlocation');
      try {
        const result = await postLocation({
          "username": exampleUsernameInput1.value,
          "phoneNum": phoneNum1.value,
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
    MapComponent,
    MatchingComponent
  }
};
</script>
<style scoped>
.card {
  width: 70%;
  max-height: 100vh;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgb(98, 63, 35);
  background-color: #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
div{
  display: inline-block;
  margin-left: 1em;
  margin-bottom: 1em;
}
button{
  margin-bottom: 1em;
}
label {
  color: #fff;
}


input {
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #4ade80;
  text-align: center;
  font-size: 14px;
}

select {
  width: 15em;
  margin-bottom: 1em;
  margin-left: 1em;
  border: none;
  background-color: #4ade80;
  text-align: center;
  font-size: 14px;
}

option {
  background-color: #ffffff;
}

input::placeholder {
  color: #1e293b;
}

@media (max-width: 1300px) {
  .card {
    margin-top: 1em;
  }
}

@media (max-width: 576px) {
  .card {
    width: 70%;
  }
}
</style>