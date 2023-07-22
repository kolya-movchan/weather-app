<template>
    <div
      v-for="(layout) in favCities"
      :key="layout.id"
    >
      <div class="wrapper wrapper--fav">
      <Layout :favMode="true" :coordinates="{lat: layout.coords.lat, lng: layout.coords.lng, city: layout.city}" />

      </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Layout from '../components/Layout.vue';

  const favCities = ref(null);

  if (JSON.parse(localStorage.getItem("savedCities"))) {
      favCities.value = JSON.parse(localStorage.getItem("savedCities"))
  }
</script>
