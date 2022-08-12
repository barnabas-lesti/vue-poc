<script setup lang="ts">
import logo from '../assets/logo.svg';
import { useCommonStore } from '../stores/commonStore';

const commonStore = useCommonStore();
</script>

<template>
  <header class="TheHeader">
    <span
      class="TheHeader__mobileSidebarIcon material-icons"
      @click="commonStore.openMobileSidebar()"
      >menu</span
    >
    <RouterLink :to="{ name: 'home' }">
      <img class="TheHeader__logo" :src="logo" alt="Logo" />
    </RouterLink>
  </header>
</template>

<style lang="scss">
.TheHeader {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
  width: 100vw;
  background-color: #fff;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  align-items: center;

  &__mobileSidebarIcon {
    font-size: 2rem;
    display: block;
    margin: 0.5rem;
  }

  &__logo {
    height: 1.4rem;
    display: block;
    margin: 0.5rem;
  }
}
</style>
