<template>
  <button
    class="button-control button-control--favorite"
    @click="addToFavorite()"
    v-if="!favoriteMode"
  >
    <span class="text"> Add to Favourites </span>

    <span class="icon icon--favorite">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
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
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const router = useRouter()

const savedCities = ref([])
const favoriteMode = ref(false)

const addToFavorite = () => {
  if (localStorage.getItem('savedCities')) {
    if (JSON.parse(localStorage.getItem('savedCities')).length === 5) {
      Swal.fire(
        'Failure!',
        'Maximum number of saved cards are 5. Please, delete some to save new cards',
        'error'
      )

      return
    }

    savedCities.value = JSON.parse(localStorage.getItem('savedCities'))
  }

  favoriteMode.value = true

  if (!route.query.preview) {
    return
  }

  const locationObj = {
    id: uuidv4(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng
    }
  }

  savedCities.value.push(locationObj)

  localStorage.setItem('savedCities', JSON.stringify(savedCities.value))

  let query = Object.assign({}, route.query)
  delete query.preview
  query.id = locationObj.id
  router.replace({ query })

  Swal.fire({
    icon: 'success',
    title: 'Congrats!',
    text: 'Added to Favourites'
  })
}
</script>

<script>
export default {
  name: 'FavoriteControls'
}
</script>
