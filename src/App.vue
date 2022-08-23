<script setup lang="ts">
import LayoutFooter from './components/layout/layout-footer.vue';
import LayoutHeader from './components/layout/layout-header.vue';
import LayoutMobileSidebar from './components/layout/layout-mobile-sidebar.vue';
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
