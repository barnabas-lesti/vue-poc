<script setup lang="ts">
import logo from '../assets/logo.svg';
</script>

<template>
  <footer class="TheFooter">
    <RouterLink :to="{ name: 'home' }">
      <img class="TheFooter__logo" :src="logo" alt="Logo" />
    </RouterLink>
    <div class="TheFooter__copyright">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>

<style lang="scss">
.TheFooter {
  flex-shrink: 0;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;

  &__logo {
    height: 1.4rem;
    margin-bottom: 1rem;
  }

  &__copyright {
    color: #727272;
    font-size: 0.8rem;
  }
}
</style>
