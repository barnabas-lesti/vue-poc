import type { Route } from '../../router';
import TemplateSyntaxView from './template-syntax-view.vue';

export default [
  {
    path: '/template-syntax',
    name: 'template-syntax',
    component: TemplateSyntaxView,
  },
] as Route[];
