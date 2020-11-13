<template>
  <tr border="1">
    <td nowrap align="left" style="padding:0.2em">
      <a class="collapsed" data-toggle="collapse" v-bind:href="'#engine' + ranking.name.replaceAll('.','_')" role="button" aria-expanded="false" aria-controls="collapseExample">
        {{ ranking.name }}
      </a>
    </td>
    <td>{{ ranking.played }}</td>
    <td>{{ ranking.elo }}</td>
    <td>{{ ranking.vie }}</td>
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
