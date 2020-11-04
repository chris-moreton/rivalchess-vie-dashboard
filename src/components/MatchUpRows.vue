<template>
  <tr border="1" v-if="matchUp.engine1 === engineVersion"
      :class="matchUp.engine1Wins > matchUp.engine2Wins ? 'winner' : (matchUp.engine1Wins === matchUp.engine2Wins ? 'draw' : 'loser')">
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
  name: "MatchUpRow",
  props: {
    matchUp: Object,
    engineVersion: String
  }
};
</script>

<style>
.winner {
  background-color: #009900;
  color: white
}

.draw {
  background-color: #999999;
  color: white
}

.loser {
  background-color: #990000;
  color: white
}
</style>
