<template>
  <button
    class="button-control button-control--favorite"
    @click="addToFavorite()"
    v-if="!favoriteMode"
  >
    <span class="text">
      Add to Favorites
    </span>

    <span class="icon icon--favorite">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <rect x="16" y="0" width="10" height="45" fill="white" />
        <rect x="-7" y="18" width="50" height="10" fill="white" />
      </svg>
    </span>
  </button>

    <img
      src="../assets/pictures/favorite.png"
      alt="favorite icon"
      class="favorite-added"
      v-else
    />
</template>

<script setup>
  import { RouterLink, useRoute, useRouter } from "vue-router";
  import { ref } from "vue";
  import { v4 as uuidv4 } from 'uuid';
  import Swal from 'sweetalert2';

  const savedCities = ref([]);
  const route = useRoute();
  const router = useRouter();
  const favoriteMode = ref(false);

  const addToFavorite = () => {
    console.log('added')

    favoriteMode.value = !favoriteMode.value;

    if (localStorage.getItem("savedCities")) {
      savedCities.value = JSON.parse(
        localStorage.getItem("savedCities")
      );
    }

    if (!route.query.preview) {
      return
    }

    const locationObj = {
      id: uuidv4(),
      state: route.params.state,
      city: route.params.city,
      coords: {
        lat: route.query.lat,
        lng: route.query.lng,
      },
    };

    savedCities.value.push(locationObj);

    localStorage.setItem("savedCities", JSON.stringify(savedCities.value));

    let query = Object.assign({}, route.query);
    delete query.preview;
    query.id = locationObj.id;
    router.replace({ query });

    Swal.fire({
      icon: 'success',
      title: 'Congrats!',
      text: 'Added to Favorites',
    });
  }

  // const props = defineProps(['newCity']);

  // console.log(props.newCity)


</script>

<script>
  export default {
    name: 'FavoriteControls',
    props: {
      dataForChart: {
        newCity: null,
      }
    },
    created() {
      console.log('PROPS:', this.newCity);
      // console.log('PROPS TTTTTTTTTT:', Array.from(new Set([...this.dataForChart.datasets[0].data])));
    },
  }
</script>