/**
 * Available navigation links.
 */
export default [
  { routeName: 'home', labelKey: 'layout.mobileSidebar.links.home' },
  {
    labelKey: 'layout.mobileSidebar.links.essentials',
    subLinks: [
      {
        routeName: 'template-syntax',
        labelKey: 'layout.mobileSidebar.links.templateSyntax',
      },
    ],
  },
] as MobileSidebarLink[];

export type MobileSidebarLink = {
  labelKey: string;
  routeName?: string;
  subLinks?: MobileSidebarSubLink[];
};

type MobileSidebarSubLink = {
  labelKey: string;
  routeName: string;
};
