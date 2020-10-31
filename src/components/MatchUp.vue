<template>
  <tr border="1">
    <td>{{ matchUp.engine1 }}</td>
    <td>{{ matchUp.engine2 }}</td>
    <td>{{ matchUp.engine1Wins }}</td>
    <td>{{ matchUp.engine2Wins }}</td>
    <td>{{ matchUp.draws }}</td>
    <td>{{ matchUp.draws + matchUp.engine1Wins + matchUp.engine2Wins }}</td>
    <td>{{ matchUp.engine1AsWhiteCount }} ({{ ((matchUp.engine1AsWhiteCount / (matchUp.draws + matchUp.engine1Wins + matchUp.engine2Wins)) * 100) | a }}%)</td>
  </tr>
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
