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
.app-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* optional spacing */
}
</style>
