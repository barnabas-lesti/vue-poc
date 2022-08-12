import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
  const isMobileSidebarOpen = ref(false);

  function openMobileSidebar() {
    isMobileSidebarOpen.value = true;
  }

  function closeMobileSidebar() {
    isMobileSidebarOpen.value = false;
  }

  return { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar };
});
