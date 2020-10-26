<template>
  <tr border="1"><td>{{ user.name }}</td><td>{{ user.elo }}</td><td>{{ user.played }}</td></tr>
</template>

<script>
export default {
  name: "Ranking",
  props: {
    user: Object
  }
};
</script>

<style>
</style>
