import { createRouter, createWebHistory } from 'vue-router';

import ViewHome from '../views/ViewHome.vue';
import ViewNotFound from '../views/ViewNotFound.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: ViewNotFound,
    },
  ],
});
