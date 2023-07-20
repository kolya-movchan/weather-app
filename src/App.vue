<template>
  <div class="app">
    <Logo />

    <div class="container">
      <div class="navigation">
        <Navigation />
        <button class="animated-button" @click="addLayoutComponent">
          <span>+</span>
          <span></span>
        </button>
      </div>

      <main class="main">
        <div class="wrapper" v-for="(Component, index) in layoutComponents" :key="index">
          <component :is="Component" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import Logo from "./components/Logo.vue";
  import Navigation from "./components/Navigation.vue";
  import Layout from "./components/Layout.vue";
  import CityView from "./views/CityView.vue";
  import Swal from 'sweetalert2';

  export default defineComponent({
    components: {
      Logo,
      Navigation,
      Layout,
      CityView,
    },
    setup() {
      const layoutComponents = ref([Layout]);

      const addLayoutComponent = () => {
        if (layoutComponents.value.length === 5) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can only add up to 5 weather cards! Delete some if you want to add new ones',
          });

          return;
        }

         Swal.fire({
            icon: 'success',
            title: 'Congrats!',
            text: 'New weather card has been added!',
          });

        layoutComponents.value.push(Layout);
      };

      return {
        layoutComponents,
        addLayoutComponent,
      };
    },
  });
</script>
