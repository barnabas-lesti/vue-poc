import RouteNames from './route-names';

/**
 * Available navigation links.
 */
export default [
  { name: RouteNames.HOME, labelKey: 'mobileSidebar.links.home' },
] as NavigationLink[];

type NavigationLink = {
  name: string;
  labelKey: string;
};
