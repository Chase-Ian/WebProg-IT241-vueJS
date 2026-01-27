<template>
  <div class="app-stack">
    <personal-profile />
    <commentform />
    <comment />
  </div>
</template>

<script>
import '/bootstrap/dist/css/bootstrap.min.css'
import '/bootstrap/dist/js/bootstrap.bundle.min.js'
export default {}
</script>

<style>
.app-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* optional spacing */
}
</style>
