
<template>
  <div id="app">
    <div v-if="error">Parent: {{ error }}</div>
    <Suspense>
      <template #default>
        <Dashboard />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
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
    Dashboard
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
  margin-top: 5px;
}

th {
  background-color: #222;
  color:white
}

</style>