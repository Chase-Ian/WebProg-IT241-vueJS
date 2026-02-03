<template>
  <div class="app-stack">
    <personal-profile/>
    <commentform/>
    <comment/>
    <RestApi/>
  </div>
</template>

<script>
import RestApi from './components/RestApi.vue'; // Adjust path

export default {
  components: {
    ApiDemo,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-stack {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
