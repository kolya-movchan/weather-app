<template>
  <div class="app">
    <Logo />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";
  import Logo from "./components/Logo.vue";
</script>

<style lang="scss" scoped>

.app {
  height: 100vh;
  background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
}

</style>