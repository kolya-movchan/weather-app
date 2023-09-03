<template>
  <div>
    <RouterLink :to="{ name: 'home' }" class="navigation__link">
      Home
    </RouterLink>

    <RouterLink :to="{ name: 'Favourites' }" class="navigation__link">
      Favourites
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
