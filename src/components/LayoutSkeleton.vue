<template>
  <div class="animated-button-container">
    <button
      class="animated-button"
      @click="addLayoutComponent"
      :title="visibleAdd
        ? 'Add a new card'
        : 'Choose at least one city from the search to add a new card'"
      >
        <span>Add</span>
        <span></span>
    </button>
  </div>

  <div
    class="wrapper"
    v-for="(componentData) in layoutComponents"
    :key="componentData.id"
  >
    <component
      :is="componentData.data[0]"
      :k="true"
      :id="componentData.id"
      @onDelete="DeleteCard($event)"
    />
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";

  import { ref } from 'vue';
  import Layout from "./Layout.vue";
  import Swal from 'sweetalert2';
  import { v4 as uuidv4 } from 'uuid';

  const visibleAdd = ref(false);
  const layoutComponents = ref([{ data: [ Layout ], id: uuidv4() }]);

  // const ShowButtonAdd = () => {
  //   visibleAdd.value = true;
  // };

  const DeleteCard = (id) => {
    console.log('id', id)

    if (layoutComponents.value.length === 1) {
      Swal.fire(
          'Failure!',
          'There should be at least 1 weather card',
          'error'
        );

      return
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        layoutComponents.value = layoutComponents.value.filter(layout => layout.id !== id);

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  };

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

    layoutComponents.value.push({ data: [ Layout ], id: uuidv4()})
  };
</script>

<script>
  export default {
    components: {
      Layout,
    },
  };
</script>