import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

export { default as navigationLinks } from './navigation-links';
export { default as RouteNames } from './route-names';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
