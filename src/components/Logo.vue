<template>
  <RouterLink :to="{ name: 'home' }" class="logo-container">
    <div class="logo">
      <img src="../assets/pictures/logo.avif" alt="logo" class="logo__image" />

      SkyVue
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
