<template>
  <tr border="1"><td>{{ user.engine1 }}</td><td>{{ user.engine2 }}</td><td>{{ user.result }}</td><td>{{ user.cnt }}</td></tr>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  }
};
</script>

<style>
</style>
