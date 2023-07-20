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

    <!-- <button class="animated-button" v-if="dataLoaded">
      <span>+</span>
      <span></span>
    </button> -->
  </div>

    <div class="info-window" :class="{ 'loading': isLoading }" v-if="dataLoaded">
       <h1 class="info-window__title">{{ cityName }}</h1>
       <p class="info-window__row">
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

      <p class="" v-if="!isLoading">
        {{ Math.round(current.temp) }}&deg;
      </p>

      <p class="info-window__row info-window__row--capitalize" v-if="!isLoading">
        {{ current.weather[0].description }}
      </p>

      <img
        class="info-window__picture"
        :src="
          `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
        "
        alt="current weather icon"
        v-if="!isLoading"
      />
    </div>

    <div
      class="info-window"
      :class="{ 'loading': isLoading }"
      v-else="dataLoaded"
    >
      <Preloader />
    </div>

  <div
    class="forecast"
    :class="{
      'loading': isLoading,
      'forecast--loading': !dataLoaded,
      'forecast--weekly': weekIsActive
    }"
  >
    <div class="forecast__period" v-if="dataLoaded">
        <button
          class="animated-button"
          :class="{'animated-button--active': !weekIsActive}"
          @click="updateCityView()"
        >
            <span>Day</span>
            <span></span>
          </button>

      <button
        class="animated-button"
        :class="{'animated-button--active': weekIsActive}"
        @click="updateCityView(true)"
      >
          <span>Week</span>
          <span></span>
        </button>
    </div>

    <div class="forecast__container">
        <transition name="fade-hours">
          <div class="hours" v-if="dataLoaded && !weekIsActive">
            <div class="hours__container">
              <div class="hours__box">
                <div
                  v-for="hourData in hourly"
                  :key="hourData.dt"
                  class="hours__item"
                >
                  <p class="hours__item-text">
                    {{
                      new Date(
                        hourData.currentTime
                      ).toLocaleTimeString("en-us", {
                        hour: "numeric",
                      })
                    }}
                  </p>
                  <img
                    class="hours__item-image"
                    :src="
                      `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`
                    "
                    alt="image of the weather"
                  />
                  <p>
                    {{ Math.round(hourData.temp) }}&deg;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade-hours-weekly">
          <div class="hours" v-if="dataLoaded && weekIsActive">
            <div class="hours__container">
              <div class="hours__box hours__box--weekly">
                <div
                  v-for="day in daily"
                  :key="day.dt"
                  class="hours__item"
                >
                  <p class="hours__item-text">
                    {{
                      new Date(day.dt * 1000).toLocaleDateString(
                        "en-us",
                        {
                          weekday: "long",
                        }
                      )
                    }}
                  </p>
                  <img
                    class="hours__item-image"
                    :src="
                      `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
                    "
                    alt="image of the weather"
                  />
                  <div>
                    <p>H: {{ Math.round(day.temp.max) }}</p>
                    <p>L: {{ Math.round(day.temp.min) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div v-if="!dataLoaded">
          <Preloader />
        </div>
    </div>
  </div>

    <div class="diagram" v-if="dataLoaded">
      <Chart :key="chartKey" :dataForChart="dataForChart" />
    </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import { useRouter, useRoute } from "vue-router";
  import Chart from "./Chart.vue";
  import Preloader from "./Preloader.vue";

  const { props } = defineProps(['dataLoaded']);

  console.log(props);

  const router = useRouter();
  const route = useRoute();

  const dataLoaded = ref(false);
  const time = ref(null);
  const current = ref(null);
  const hourly = ref(null);
  const daily = ref(null);
  const isLoading = ref(null);
  const cityName = ref('');
  const dataForChart = ref({
    labels: [],
    datasets: [{ data: [] }],
  });
  const chartKey = ref(0);
  const weekIsActive = ref(null);

  const getWeatherData = async (a, b) => {
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=f4bff0686f0ff9a57e4f9d2bc578d9e9&units=imperial`);

      // cal current date & time
      const localOffset = new Date().getTimezoneOffset() * 60000;
      const utc = weatherData.data.current.dt * 1000 + localOffset;
      weatherData.data.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;

      // cal hourly wxeather offset
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

  const updateCityView = (weekMode = false) => {
    if (dataLoaded.value && !weekMode && !weekIsActive.value) {
        // console.log(1.1)

      return
    } else if (dataLoaded.value && weekMode && weekIsActive.value) {
        // console.log(1.2)

      return
    }
    // console.log(2)

    if (!weekMode) {
      console.log(3)
        dataForChart.value = {
        labels: hourly.value.map(hour =>
          new Date(
            hour.currentTime
          ).toLocaleTimeString("en-us", {
            hour: "numeric",
          })),
          datasets: [{ data: hourly.value.map(item => item.temp) }],
        }

        weekIsActive.value = false;
      } else {
          // console.log(4)
         dataForChart.value = {
          labels: daily.value.map((item) => (
            new Date(item.dt * 1000).toLocaleDateString(
              "en-us",
              {
                weekday: "long",
              }
            )
          )),
          datasets: [{ data: daily.value.map(item => item.temp.day) }],
        }

        // console.log(5)
        weekIsActive.value = true;
      }

      chartKey.value++;
  }

  const getCityView = async() => {
    const weatherData = await getWeatherData();

    if (weatherData) {
      time.value = weatherData.currentTime;
      current.value = weatherData.current;
      hourly.value = weatherData.hourly.slice(0, 24);
      daily.value = weatherData.daily;

      searchQuery.value = "";
    }

    isLoading.value = false;

    // console.log(1)

    updateCityView();

    dataLoaded.value = true;
  }

  const previewCity = (searchResult) => {
    const [city, state] = searchResult.place_name.split(",");

    cityName.value = city;

    router.push({
      name: "cityView",
      params: { state: state.replaceAll(" ", ""), city: city },
      query: {
        lat: searchResult.geometry.coordinates[1],
        lng: searchResult.geometry.coordinates[0],
        preview: true,
      },
    });

    isLoading.value = true;
    mapboxSearchResults.value = null;

    getCityView();
  };

  const apiKeyForIP = '72da4f70eb0348ec9c3c8b2d9cbaef25'

  // IP LOGIC TO BE ACTIVATED LATER 

  // const getCityByIp = async() => {
  //   try {
  //     const IpData = await axios.get('https://api.ipify.org?format=json');

  //     const locationData = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyForIP}&ip=${IpData.data.ip}`);

  //     console.log(locationData);

  //     const city = locationData.data.city;
  //     const state = locationData.data.country_name;

  //     cityName.value = city;

  //     router.push({
  //       name: "cityView",
  //       params: { state, city },
  //       query: {
  //         lat: locationData.data.latitude,
  //         lng: locationData.data.longitude,
  //         preview: true,
  //       },
  //     });

  //     getCityView();
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // onMounted(getCityByIp);

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
