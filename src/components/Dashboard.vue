<template>
  <table>
    <tr>
      <td>
        <AsyncMatchUpTables :data="data" />
      </td>
      <td valign="top" rowspan="2">
        <AsyncRankingsTable :rankings="data.rankings" />
      </td>
    </tr>
  </table>
  <AsyncOverview :totalMatchesPlayed="totalMatchesPlayed"/>

</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import getStatistics from "../modules/data";

const AsyncMatchUpTables = defineAsyncComponent({
  loader: () => import("./MatchUpTables.vue" ),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});

const AsyncRankingsTable = defineAsyncComponent({
  loader: () => import("./RankingsTable.vue" ),
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
    AsyncMatchUpTables,
    AsyncRankingsTable,
    AsyncOverview
  },
};
</script>

<style>

</style>