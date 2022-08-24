<script setup lang="ts">
import { RouteNames } from '../router';
import logo from './logo.svg';
</script>

<template>
  <footer class="layout-footer">
    <router-link :to="{ name: RouteNames.HOME }">
      <img class="logo" :src="logo" :alt="$t('layout.logoAltText')" />
    </router-link>
    <div class="copyright">
      {{ $t('layout.copyright') }}
    </div>
  </footer>
</template>

<style scoped lang="scss">
.layout-footer {
  flex-shrink: 0;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;

  .logo {
    height: 1.4rem;
    margin-bottom: 1rem;
  }

  .copyright {
    color: #727272;
    font-size: 0.8rem;
  }
}
</style>
