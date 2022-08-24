import { ref } from 'vue';
import { defineStore } from 'pinia';

/**
 * Layout store factory function.
 */
export const useLayoutStore = defineStore('layout', () => {
  /**
   * Open state indicator for the mobile sidebar.
   */
  const isMobileSidebarOpen = ref(false);

  /**
   * Sets the state `isMobileSidebarOpen` to `true`.
   */
  function openMobileSidebar() {
    isMobileSidebarOpen.value = true;
  }

  /**
   * Sets the state `isMobileSidebarOpen` to `false`.
   */
  function closeMobileSidebar() {
    isMobileSidebarOpen.value = false;
  }

  return { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar };
});
