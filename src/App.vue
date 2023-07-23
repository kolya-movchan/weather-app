<template>
    <div class="app">
      <Logo />
      <div class="container">
        <div class="navigation">
          <Navigation />
        </div>

        <main class="main">
          <router-view />
        </main>
      </div>
    </div>
</template>

<script setup>
  import { RouterView } from "vue-router";
  import Logo from "./components/Logo.vue";
  import Navigation from "./components/Navigation.vue";
</script>

<script>
  export default {
    components: {
      Logo,
      Navigation,
    },
  };
</script>