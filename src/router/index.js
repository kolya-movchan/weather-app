import { createRouter, createWebHistory } from 'vue-router'
import LayoutSkeleton from '../components/LayoutSkeleton.vue'
import FavoritesView from '../views/FavoritesView.vue'; // Import the new component

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
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
  ]
})

export default router
