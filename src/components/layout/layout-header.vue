<script setup lang="ts">
import logo from '../../assets/logo.svg';
import { RouteNames } from '../../router';
import { useCommonStore } from '../../stores/common';

const commonStore = useCommonStore();
</script>

<template>
  <header class="layout-header">
    <span
      class="mobile-sidebar-icon material-icons"
      @click="commonStore.openMobileSidebar()"
      >menu</span
    >
    <router-link :to="{ name: RouteNames.HOME }">
      <img class="logo" :src="logo" :alt="$t('header.logoAltText')" />
    </router-link>
  </header>
</template>

<style scoped lang="scss">
.layout-header {
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

  .mobile-sidebar-icon {
    font-size: 2rem;
    display: block;
    margin: 0.5rem;
  }

  .logo {
    height: 1.4rem;
    display: block;
    margin: 0.5rem;
  }
}
</style>
