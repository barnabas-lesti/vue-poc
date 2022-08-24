/**
 * Available navigation links.
 */
export default [
  { name: 'home', labelKey: 'views.home.title' },
  { name: 'template-syntax', labelKey: 'views.templateSyntax.title' },
] as Link[];

type Link = {
  name: string;
  labelKey: string;
};
