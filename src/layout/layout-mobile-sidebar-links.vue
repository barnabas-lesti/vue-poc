<script setup lang="ts">
import type { PropType } from 'vue';
import type { MobileSidebarLink } from './links';

const props = defineProps({
  /**
   * Links to render.
   */
  links: {
    type: Array as PropType<MobileSidebarLink[]>,
    required: true,
  },
});
</script>

<template>
  <div class="layout-mobile-sidebar-links">
    <div
      v-for="link of props.links"
      :key="link.labelKey"
      class="link-container"
    >
      <router-link
        v-if="link.routeName"
        :to="{ name: link.routeName }"
        class="link"
        >{{ $t(link.labelKey) }}</router-link
      >
      <div v-else class="link">{{ $t(link.labelKey) }}</div>

      <div v-if="link.subLinks && link.subLinks.length > 0" class="sub-links">
        <router-link
          v-for="subLink of link.subLinks"
          :key="subLink.labelKey"
          :to="{ name: subLink.routeName }"
          class="sub-link"
          >{{ $t(subLink.labelKey) }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-mobile-sidebar-links {
  $linkColor: #484848;
  $linkActiveColor: #458db7;
  $subLinkColor: #606060;
  $subLinkActiveColor: #458db7;

  .link-container {
    margin-bottom: 1.5rem;
  }

  .link {
    color: $linkColor;
    font-weight: bold;
    margin-bottom: 0.75rem;
    text-decoration: none;
    display: block;

    &.router-link-active {
      color: $linkActiveColor;
    }
  }

  .sub-link {
    margin-bottom: 0.75rem;
    color: $subLinkColor;
    text-decoration: none;
    display: block;

    &.router-link-active {
      color: $subLinkActiveColor;
    }
  }
}
</style>
