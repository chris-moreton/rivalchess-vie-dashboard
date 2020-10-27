<template>
  <table>
    <h1>Total matches played: {{ users.totalMatchesPlayed }}</h1>
    <tr>
      <td>
        <h1>Match Ups</h1>
        <table border="1">
        <AsyncUser v-for="user in users.matchUps" :user="user" />
        </table>
      </td>
      <td valign="top">
        <h1>Rankings</h1>
        <table border="1">
          <AsyncRanking v-for="user in users.rankings" :user="user" />
        </table>
      </td>
    </tr>
  </table>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import getStatistics from "../modules/users";

const AsyncUser = defineAsyncComponent({
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

export default {
  name: "Users",
  async setup() {
    const { users, error, load } = getStatistics();
    await load();
    return { users, error };
  },
  components: {
    AsyncUser,
    AsyncRanking
  },
};
</script>

<style>
</style>