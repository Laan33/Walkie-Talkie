<template>
  <h1>Walkie Talkie</h1>
  <div>
      <UserIDComponent />
  </div>

  <div class="container mt-5">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="handle" id="exampleFormControlInput1"
             placeholder="name@example.com">
    </div>

    <br><br>
    <PostLocComponent />

    <div>
      <MatchingComponent />
    </div>

  </div>
</template>
<script>

import UserIDComponent from "@/components/UserIDComponent.vue";
import SaveComponent from "@/components/SaveComponent.vue";
import PostLocComponent from "@/components/PostLocComponent.vue";
import MatchingComponent from "@/components/MatchingComponent.vue";

export default {

  components: {
    UserIDComponent,
    SaveComponent,
    PostLocComponent,
    MatchingComponent
  },
  data() {
    return {
      handle: '',
      comment: '',
      commentsArray:[],
      editing:false,
      tempValue:null,
      currentUserID:'',
    }
  },
}

</script>
<style scoped>
.right{
  text-align: right;
}
*{
  padding-left: 10%;
}
</style>