
<template>
  <table border="1">
    <tr>
      <th>Engine</th>
      <th>ELO</th>
      <th>Played</th>
    </tr>
    <AsyncRanking v-for="ranking in rankings" :ranking="ranking" />
  </table>
</template>

<script>
import {defineAsyncComponent} from "vue";

const AsyncRanking = defineAsyncComponent({
  loader: () => import("./Ranking.vue" ),
  delay: 200,
  suspensible: false
});

export default {
  name: "MatchUpTable",
  props: {
    rankings: Object
  },
  components: {
    AsyncRanking
  },
};

</script>

<style>

</style>
