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

  import { ref } from 'vue';
  import Logo from "./components/Logo.vue";
  import Navigation from "./components/Navigation.vue";
  import Layout from "./components/Layout.vue";
  import CityView from "./views/CityView.vue";
  import LayoutSkeleton from "./components/LayoutSkeleton.vue";
  import Swal from 'sweetalert2';
  import { v4 as uuidv4 } from 'uuid';
</script>

<script>
  export default {
    components: {
      Logo,
      LayoutSkeleton,
      Navigation,
      Layout,
      CityView,
    },
  };
</script>