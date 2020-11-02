<template>
  <tr border="1" v-if="matchUp.engine1 == '38.0.0'" :class="matchUp.engine1Wins > matchUp.engine2Wins ? 'winner' : 'loser'">
    <td>{{ matchUp.engine1 }}</td>
    <td>{{ matchUp.engine2 }}</td>
    <td>{{ (matchUp.engine1Wins / (matchUp.engine1Wins + matchUp.engine2Wins)) * 100 | a }}%</td>
    <td>{{ matchUp.engine1Wins }}</td>
    <td>{{ matchUp.engine2Wins }}</td>
    <td>{{ matchUp.draws }}</td>
    <td>{{ matchUp.draws + matchUp.engine1Wins + matchUp.engine2Wins }}</td>
    <td>{{ ((matchUp.engine1AsWhiteCount / (matchUp.draws + matchUp.engine1Wins + matchUp.engine2Wins)) * 100) | a }}%</td>
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
.winner {
  background-color: #00dd00;
  color: black
}

.loser {
  background-color: #dd0000;
  color: white
}
</style>
