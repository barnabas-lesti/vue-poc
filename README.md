# Vue POC

Example Vue 3 application to test the framework features.

## Development

```sh
# Install dependencies
npm install

# Compile and Hot-Reload for Development
npm run dev

# Run Unit Tests
TBD

# Lint
npm run lint

# Type-Check, Compile and Minify for Production
npm run build

# Start a production server
npm run prod
```

## Features
- The application is organized on a feature level:
  - **Core (single use)** features like `router`, `i18n`, etc. are located in the `./src/core` folder.
  - **Common (reusable)** features/components like `inputs`, `cards`, etc. are in the `./src/common` folder.
  - **Views** are in the `./src/views` folder and are loaded using the `index.ts` file located in the root of the directory.
- New messages can be added by creating a `messages.yaml` file and registering it with the `registerMessages` function:
```ts
import { registerMessages } from '@/core/i18n';
import messages from './messages.yaml';

registerMessages(messages);
```
- New routes can be registered with the help of the `registerRoutes` function:
```ts
import { registerRoutes } from '@/core/router';
import ViewHome from './view-home.vue';

registerRoutes([
  {
    path: '/',
    name: 'home',
    component: ViewHome,
  },
]);
```
- Links to the navigation displays can be added with the `registerNavigationLinks` function:
```ts
import { registerNavigationLinks } from '@/core/navigation';

registerNavigationLinks([{ labelKey: 'views.home.title', routeName: 'home' }]);
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
