<template>
  <div class="app-stack">
    <personal-profile />
    <commentform />
    <comment />
  </div>
</template>

<script>
export default {}
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
