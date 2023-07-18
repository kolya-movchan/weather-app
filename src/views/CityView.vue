<template>
  <!-- <Forecast /> -->
  <!-- <Diagram /> -->
  <!-- <AsyncCityView /> -->

  <Suspense>
      <template #default>
         <AsyncCityView />
      </template>
      <!-- <template #fallback>
        <CityViewSkeleton />
      </template> -->
    </Suspense>
</template>

<script setup>
  // import Forecast from "../components/ForeCast.vue";
  // import Diagram from "../components/Diagram.vue";
  import AsyncCityView from "../components/AsyncCityView.vue";

</script>
