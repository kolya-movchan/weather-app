<template>
  <div class="app">
    <Logo />

    <div class="container">
      <Navigation />

      <main class="main">
        <City />
        <CityView />
      </main>
    </div>
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";

  import Logo from "./components/Logo.vue";
  import Navigation from "./components/Navigation.vue";
  import City from "./components/City.vue";
  import CityView from "./views/CityView.vue";
  // import Forecast from "./components/ForeCast.vue";
  // import Diagram from "./components/Diagram.vue";
</script>
