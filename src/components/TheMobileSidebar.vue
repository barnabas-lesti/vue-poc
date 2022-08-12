<script setup lang="ts">
import logo from '../assets/logo.svg';
import { router } from '../router';
import { useCommonStore } from '../stores/commonStore';

type SidebarLink = {
  name: string;
  labelKey: string;
};

const commonStore = useCommonStore();
const sidebarLinks: SidebarLink[] = [
  { name: 'home', labelKey: 'mobileSidebar.links.home' },
  { name: 'posts', labelKey: 'mobileSidebar.links.posts' },
];

router.beforeEach(() => {
  commonStore.closeMobileSidebar();
  return true;
});
</script>

<template>
  <div
    :class="[
      'TheMobileSidebar',
      { 'TheMobileSidebar--open': commonStore.isMobileSidebarOpen },
    ]"
  >
    <div class="TheMobileSidebar__header">
      <RouterLink :to="{ name: 'home' }">
        <img class="TheMobileSidebar__logo" :src="logo" alt="Logo" />
      </RouterLink>
      <span
        class="TheMobileSidebar__closeIcon material-icons"
        @click="commonStore.closeMobileSidebar()"
        >close</span
      >
    </div>
    <div class="TheMobileSidebar__content">
      <RouterLink
        v-for="(link, index) of sidebarLinks"
        :key="index"
        :to="{ name: link.name }"
        class="TheMobileSidebar__link"
        activeClass="TheMobileSidebar__link--active"
        >{{ $t(link.labelKey) }}</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss">
.TheMobileSidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 900;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &__header {
    box-sizing: border-box;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    height: 1.4rem;
    display: block;
    margin: 0.5rem;
    margin-left: 1rem;
  }

  &__closeIcon {
    font-size: 2rem;
    display: block;
    margin: 0.5rem;
  }

  &__content {
    padding: 1rem;
  }

  &__link {
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin-bottom: 1rem;
    color: #555;
    font-size: 1.2rem;

    &--active {
      color: #222;
    }
  }

  &--open {
    transform: translateX(0);
  }
}
</style>
