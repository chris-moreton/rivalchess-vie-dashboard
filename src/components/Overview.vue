<template>
  <h1>Total matches played: {{ totalMatchesPlayed }}</h1>
</template>

<script>
export default {
  name: "Overview",
  props: {
    totalMatchesPlayed: Number
  }
};
</script>

<style>
</style>
