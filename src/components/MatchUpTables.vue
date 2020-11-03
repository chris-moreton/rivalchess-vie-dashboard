<template>
  <AsyncMatchUpTable v-for="engineVersion in data.rankings" :engineVersion="engineVersion.name" :matchUpsConsolidated="data.matchUpsConsolidated" />
</template>

<script>
import { defineAsyncComponent } from "vue";

const AsyncMatchUpTable = defineAsyncComponent({
  loader: () => import("./MatchUpTable.vue" ),
  delay: 200,
  suspensible: false
});

export default {
  name: "MatchUpTables",
  props: {
    data: Object
  },
  components: {
    AsyncMatchUpTable
  },
};
</script>

<style>

</style>