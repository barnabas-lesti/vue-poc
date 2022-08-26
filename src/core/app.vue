<script setup lang="ts">
import { LayoutFooter, LayoutHeader, LayoutMobileSidebar } from './layout';
</script>

<template>
  <div class="app">
    <layout-header />
    <layout-mobile-sidebar />
    <div class="content">
      <router-view />
    </div>
    <layout-footer />
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1 0 auto;
    margin: 1rem;
  }
}
</style>
