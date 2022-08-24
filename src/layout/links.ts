import { RouteNames } from '../router';

/**
 * Available navigation links.
 */
export default [
  { name: RouteNames.HOME, labelKey: 'layout.links.home' },
] as Link[];

type Link = {
  name: string;
  labelKey: string;
};
