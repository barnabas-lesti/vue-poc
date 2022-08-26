/**
 * Navigation link type.
 */
export type NavigationLink = {
  labelKey: string;
  routeName?: string;
  subLinks?: NavigationSubLink[];
};

type NavigationSubLink = {
  labelKey: string;
  routeName: string;
};

/**
 * Mobile sidebar links.
 */
export const mobileSidebarLinks = [] as NavigationLink[];

/**
 * Registers new navigation links to display in for example the mobile sidebar.
 * @param newLinks Navigation links to be added.
 * @example
 * import { registerNavigationLinks } from '@/core/navigation';
 * registerNavigationLinks([{ labelKey: 'views.home.title', routeName: 'home' }]);
 */
export function registerNavigationLinks(newLinks: NavigationLink[]) {
  mobileSidebarLinks.push(...newLinks);
}
