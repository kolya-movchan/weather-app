<template>
  <div
    v-if="favCities.length"
    v-for="(layout) in favCities"
    :key="layout.id"
  >
    <div class="wrapper wrapper--fav">
      <Layout
        :favMode="true"
        :coordinates="{
          lat: layout.coords.lat,
          lng: layout.coords.lng,
          city: layout.city
        }"
        @onRemove="RemoveFavourites($event)"
      />
    </div>
  </div>


  <div class="fav-no-data" v-else>
    <img
      src="../assets/pictures/no-data.png"
      alt="no data sad cloud"
      class="fav-no-data__img"
    />

    <span>No Favourites Yet </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Layout from '../components/Layout.vue';
import Swal from 'sweetalert2';


const favCities = ref([]);

const RemoveFavourites = (cityData) => {
  const restOfCities = JSON
    .parse(
      localStorage.getItem("savedCities"))
    .filter(city => city.city !== cityData);

  localStorage.setItem("savedCities", JSON.stringify(restOfCities));
  favCities.value = restOfCities;

  Swal.fire(
    'Deleted!',
    'The card has been removed from Favourites.',
    'success'
  );
};


if (JSON.parse(localStorage.getItem("savedCities"))) {
  favCities.value = JSON.parse(localStorage.getItem("savedCities"))
}
</script>
