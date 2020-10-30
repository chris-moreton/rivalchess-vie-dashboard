<template>
  <tr border="1"><td>{{ matchUp.engine1 }}</td><td>{{ matchUp.engine2 }}</td><td>{{ matchUp.result }}</td><td>{{ matchUp.cnt }}</td></tr>
</template>

<script>
export default {
  name: "MatchUp",
  props: {
    matchUp: Object
  }
};
</script>

<style>
</style>
