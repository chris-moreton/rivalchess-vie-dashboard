
<template>
  <table border="1">
    <tr><th>Engine 1</th><th>Engine 2</th><th>Win %</th><th>Wins</th><th>Losses</th><th>Draws</th><th>Total</th><th>As White</th></tr>
    <AsyncMatchUpRows v-for="matchUp in matchUpsConsolidated" :matchUp="matchUp" :engineVersion="engineVersion"/>
  </table>
</template>

<script>
import {defineAsyncComponent} from "vue";

const AsyncMatchUpRows = defineAsyncComponent({
  loader: () => import("./MatchUpRows.vue"),
  delay: 200,
  suspensible: false
});

export default {
  name: "MatchUpTable",
  props: {
    matchUpsConsolidated: Object,
    engineVersion: String
  },
  components: {
    AsyncMatchUpRows
  },
};
</script>

<style>

</style>
