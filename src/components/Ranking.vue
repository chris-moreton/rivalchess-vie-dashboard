<template>
  <tr border="1" :class="ranking.name == '38.0.0' ? 'highlight' : 'normal'">
    <td>{{ ranking.name }}</td>
    <td>{{ ranking.elo }}</td>
    <td>{{ ranking.played }}</td>
  </tr>
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
.highlight {
  background-color: #0000dd;
  color: white
}

.normal {
  background-color: #ffffff;
  color: black
}
</style>
