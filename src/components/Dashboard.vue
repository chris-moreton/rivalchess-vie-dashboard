<template>
  <table>
    <tr>
      <td valign="top">
        <AsyncMatchUpTable :matchUpsConsolidated="data.matchUpsConsolidated" :engineVersion="'chess22k-1.14'"/>
      </td>
      <td valign="top">
        <AsyncMatchUpTable :matchUpsConsolidated="data.matchUpsConsolidated" :engineVersion="'cuckoo110'"/>
      </td>
      <td valign="top">
        <AsyncMatchUpTable :matchUpsConsolidated="data.matchUpsConsolidated" :engineVersion="'1.0.3'"/>
      </td>
      <td valign="top" rowspan="2">
        <table border="1">
          <tr>
            <th>Engine</th>
            <th>ELO</th>
            <th>Played</th>
          </tr>
          <AsyncRanking v-for="ranking in data.rankings" :ranking="ranking" />
        </table>
      </td>
    </tr>
    <tr>
      <td valign="top">
        <AsyncMatchUpTable :matchUpsConsolidated="data.matchUpsConsolidated" :engineVersion="'38.0.0'"/>
      </td>
      <td valign="top">
        <AsyncMatchUpTable :matchUpsConsolidated="data.matchUpsConsolidated" :engineVersion="'34.0.2'"/>
      </td>
      <td valign="top">
        <AsyncMatchUpTable :matchUpsConsolidated="data.matchUpsConsolidated" :engineVersion="'00.0.1'"/>
      </td>
    </tr>
  </table>
  <AsyncOverview :totalMatchesPlayed="totalMatchesPlayed"/>

</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import getStatistics from "../modules/data";

const AsyncMatchUpTable = defineAsyncComponent({
  loader: () => import("./MatchUpTable.vue" ),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});

const AsyncRanking = defineAsyncComponent({
  loader: () => import("./Ranking.vue" ),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});

const AsyncOverview = defineAsyncComponent({
  loader: () => import("./Overview.vue" ),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});

export default {
  name: "Dashboard",
  async setup() {
    const { data, error, load, totalMatchesPlayed } = getStatistics();
    await load();
    setInterval(await load, 5000)
    return { data, error, totalMatchesPlayed };
  },
  components: {
    AsyncMatchUpTable,
    AsyncRanking,
    AsyncOverview
  },
};
</script>

<style>

</style>