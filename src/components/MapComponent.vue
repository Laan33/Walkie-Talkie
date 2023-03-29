<template>
  <div>
    ...
  </div>
</template>

<script>
export default {
  data() {
    return {
      receivedString1: "",
      receivedString2: ""
    };
  },
  mounted() {
    this.$on("stringsChanged", (state1, state2) => {
      this.S1 = state1;
      this.S2 = state2;
      console.log(state1,state2);
    });
  }
};
</script>