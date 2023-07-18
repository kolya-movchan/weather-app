<template>
  <div class="city-container">
    <div class="input-container">
      <input
        type="text"
        id="input"
        required=""
        v-model="searchQuery"
        @input="getSearchResults"
      >
      <label for="input" class="label">Search for a city</label>
    <div class="underline"></div>

        <ul class="city-list" v-if="mapboxSearchResults" > 
          <p
            class="city-list__item"
            v-if="searchError"
          >
              Sorry, something went wrong, please try again.
          </p>

          <p
            class="city-list__item"
            v-if="!searchError && mapboxSearchResults.length === 0"
          >
            No results match your query, try a different term.
          </p>

        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="city-list__item city-list__item--success"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
    </ul>
  </div>

    <button class="animated-button">
      <span>+</span>
      <span></span>
    </button>
  </div>

  <div class="forecast">
    <div class="forecast__period">
      <RouterLink :to="{ name: 'home' }" class="logo-container">
        <button class="animated-button">
            <span>Day</span>
            <span></span>
          </button>
      </RouterLink>

      <RouterLink :to="{ name: 'home' }" class="logo-container">
        <button class="animated-button">
            <span>Week</span>
            <span></span>
          </button>
      </RouterLink>
    </div>

     <div class="flex flex-col items-center text-white py-12" v-if="dataLoaded">
      <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
      <p class="text-sm mb-12">
        {{
          new Date(time).toLocaleDateString(
            "en-us",
            {
              weekday: "short",
              day: "2-digit",
              month: "long",
            }
          )
        }}
        {{
          new Date(time).toLocaleTimeString(
            "en-us",
            {
              timeStyle: "short",
            }
          )
        }}
      </p>
      <p class="text-8xl mb-8">
        {{ Math.round(current.temp) }}&deg;
      </p>
      <p>
        Feels like
        {{ Math.round(current.feels_like) }} &deg;
      </p>
      <p class="capitalize">
        {{ current.weather[0].description }}
      </p>
      <img
        class="w-[150px] h-auto"
        :src="
          `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
        "
        alt=""
      />
    </div>
  </div>

   <div class="diagram"></div>
</template>

<script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  const dataLoaded = ref(null);
  const time = ref(null);
  const current = ref(null);


  const getWeatherData = async (a, b) => {
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=f4bff0686f0ff9a57e4f9d2bc578d9e9&units=imperial`

    );

      // console.log(weatherData);

      // cal current date & time
      const localOffset = new Date().getTimezoneOffset() * 60000;
      const utc = weatherData.data.current.dt * 1000 + localOffset;
      weatherData.data.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;

      // cal hourly weather offset
      weatherData.data.hourly.forEach((hour) => {
        const utc = hour.dt * 1000 + localOffset;
        hour.currentTime =
          utc + 1000 * weatherData.data.timezone_offset;
      });

      return weatherData.data;
    } catch (err) {
      console.log(err);
    }
  };


  const previewCity = async (searchResult) => {
    const [city, state] = searchResult.place_name.split(",");
    router.push({
      name: "cityView",
      params: { state: state.replaceAll(" ", ""), city: city },
      query: {
        lat: searchResult.geometry.coordinates[1],
        lng: searchResult.geometry.coordinates[0],
        preview: true,
      },
    });

    mapboxSearchResults.value = null;

    const weatherData = await getWeatherData();

    if (weatherData) {
      dataLoaded.value = true;
      time.value = weatherData.currentTime;
      current.value = weatherData.current;
    }

    console.log(weatherData.currentTime)
  };

  const mapboxAPIKey =
    "pk.eyJ1Ijoia21vY2hhbmMiLCJhIjoiY2xrOGNvNXhwMGh3YjNzcm9jeDI1NWVxZiJ9.0P8k9GkO2fhNI-juyaOkDg";
  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const mapboxSearchResults = ref(null);
  const searchError = ref(null);

  const getSearchResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value !== "") {
        try {
          const result = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
          );

          mapboxSearchResults.value = result.data.features;
        } catch {
          searchError.value = true;
        }

        return;
      }
      mapboxSearchResults.value = null;
    }, 300);
  };
</script>
