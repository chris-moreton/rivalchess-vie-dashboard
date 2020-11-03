<template>
  <tr border="1">
    <td>
      <a class="collapsed" data-toggle="collapse" v-bind:href="'#engine' + ranking.name.replaceAll('.','_')" role="button" aria-expanded="false" aria-controls="collapseExample">
        {{ ranking.name }}
      </a>
      </td>
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

a.collapsed {
  color: grey;
}

</style>
