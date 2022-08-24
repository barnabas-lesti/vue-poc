import type { Route } from '../../router';
import HomeView from './home-view.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
] as Route[];
