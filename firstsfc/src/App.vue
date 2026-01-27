<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <span class="navbar-brand">Personal Profile</span>

      <!-- Hamburger -->
      <button
        class="navbar-toggler"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="navbar-collapse"
      :class="{ show: menuOpen }"
    >
      <ul class="navbar-nav text-center">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- PAGE CONTENT -->
  <div class="app-stack">
    <personal-profile />
    <commentform />
    <comment />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style>
/* Push content below navbar */
.app-stack {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Mobile dropdown animation */
.navbar-collapse {
  display: none;
  background: #212529;
}

.navbar-collapse.show {
  display: block;
}
</style>
