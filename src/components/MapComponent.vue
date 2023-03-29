<template>
  <div>
    <p>Test: {{ map1 }} {{ map2 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    map1: String,
    map2: String
  }
}
</script>