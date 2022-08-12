<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import TheMobileSidebar from './components/TheMobileSidebar.vue';
</script>

<template>
  <div class="App">
    <TheHeader />
    <TheMobileSidebar />
    <div class="App__content">
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.App {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1 0 auto;
    margin: 1rem;
  }
}
</style>
