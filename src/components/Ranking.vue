<template>
  <tr border="1"><td>{{ ranking.name }}</td><td>{{ ranking.elo }}</td><td>{{ ranking.played }}</td></tr>
</template>

<script>
export default {
  name: "Ranking",
  props: {
    ranking: Object
  }
};
</script>

<style>
</style>
