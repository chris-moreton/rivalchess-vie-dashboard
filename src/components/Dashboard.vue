<template>
  <AsyncOverview :totalMatchesPlayed="totalMatchesPlayed"/>

  <table>
    <tr>
      <td valign="top" rowspan="2">
        <AsyncRankingsTable :rankings="data.rankings" />
      </td>
      <td valign="top">
        <AsyncMatchUpTables :data="data" />
      </td>
    </tr>
  </table>

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
table {
  margin-left:2em;
  margin-top:1em;
}
</style>