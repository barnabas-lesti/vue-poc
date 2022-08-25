<script setup lang="ts">
import { onMounted } from 'vue';

import router from '../router';
import LayoutMobileSidebarLinks from './layout-mobile-sidebar-links.vue';
import links from './links';
import logo from './logo.svg';
import { useLayoutStore } from './store';

const store = useLayoutStore();

/**
 * Class to apply to the body to prevent scroll.
 */
const noScrollClassName = 'no-scroll';

/**
 * Subscribes to route changes to close the sidebar.
 */
function subscribeToRouteChange() {
  router.beforeEach(() => {
    store.closeMobileSidebar();
    return true;
  });
}

/**
 * Subscribes to the common store `isMobileSidebarOpen` field to
 * apply scroll prevention to the page body.
 */
function subscribeToIsMobileSidebarOpen() {
  store.$subscribe((mutation, state) => {
    if (state.isMobileSidebarOpen) {
      document.body.classList.add(noScrollClassName);
    } else {
      document.body.classList.remove(noScrollClassName);
    }
  });
}

onMounted(() => {
  subscribeToRouteChange();
  subscribeToIsMobileSidebarOpen();
});
</script>

<template>
  <div :class="['layout-mobile-sidebar', { open: store.isMobileSidebarOpen }]">
    <div class="header">
      <router-link :to="{ name: 'home' }">
        <img class="logo" :src="logo" :alt="$t('layout.logoAltText')" />
      </router-link>
      <span
        class="close-icon material-icons"
        @click="store.closeMobileSidebar()"
        >close</span
      >
    </div>

    <div class="content">
      <layout-mobile-sidebar-links :links="links" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 900;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  .header {
    box-sizing: border-box;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 1.4rem;
    display: block;
    margin: 0.5rem;
    margin-left: 1rem;
  }

  .close-icon {
    font-size: 2rem;
    display: block;
    margin: 0.5rem;
  }

  .content {
    padding: 1rem;
  }

  &.open {
    transform: translateX(0);
  }
}
</style>
