<template>
  <div id="app">
    <div v-if="error">Parent: {{ error }}</div>
    <Suspense>
      <template #default>
        <MatchUps />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import MatchUps from "./components/Dashboard.vue";
import { ref, onErrorCaptured } from "vue";
export default {
  name: "App",
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e;
    });
    return { error };
  },
  components: {
    MatchUps
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

th {
  background-color: #222;
  color:white
}
</style>