import { createRouter, createWebHistory } from 'vue-router'
import LayoutSkeleton from '../components/LayoutSkeleton.vue'
import FavouritesView from '../views/FavouritesView.vue' // Import the new component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutSkeleton
    },
    {
      path: '/weather:state/:city',
      name: 'cityView',
      component: LayoutSkeleton
    },
    {
      path: '/Favourites',
      name: 'Favourites',
      component: FavouritesView
    }
  ]
})

export default router
