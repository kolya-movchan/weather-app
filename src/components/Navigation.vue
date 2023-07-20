<template>
    <div>
      <RouterLink :to="{ name: 'home' }" class="navigation__link">
        Home
      </RouterLink>

      <RouterLink :to="{ name: 'home' }" class="navigation__link">
        Favorites
      </RouterLink>
    </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>
