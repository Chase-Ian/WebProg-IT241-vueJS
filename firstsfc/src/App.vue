<template>
  <div class="app-wrapper">
    <div class="app-stack">
      <personal-profile />
      <commentform />
      <comment />
    </div>
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center; /* vertical */
  align-items: center;     /* horizontal */
}

.app-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
