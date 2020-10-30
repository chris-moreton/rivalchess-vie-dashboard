<template>
  <table>
    <AsyncOverview v-bind:totalMatchesPlayed="totalMatchesPlayed"/>
    <tr>
      <td>
        <h1>Match Ups</h1>
        <table border="1">
        <AsyncMatchUp v-for="matchUp in data.matchUps" :matchUp="matchUp" />
        </table>
      </td>
      <td valign="top">
        <h1>Rankings</h1>
        <table border="1">
          <AsyncRanking v-for="ranking in data.rankings" :ranking="ranking" />
        </table>
      </td>
    </tr>
  </table>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import getStatistics from "../modules/data";

const AsyncMatchUp = defineAsyncComponent({
  loader: () => import("./MatchUp.vue"),
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
  name: "data",
  async setup() {
    const { data, error, load, totalMatchesPlayed } = getStatistics();
    await load();
    return { data, error, totalMatchesPlayed };
  },
  components: {
    AsyncMatchUp,
    AsyncRanking,
    AsyncOverview
  },
};
</script>

<style>
</style>