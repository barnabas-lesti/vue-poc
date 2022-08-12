import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
  const isMobileSidebarOpen = ref(false);

  function openMobileSidebar() {
    document.body.classList.add('noScroll');
    isMobileSidebarOpen.value = true;
  }

  function closeMobileSidebar() {
    isMobileSidebarOpen.value = false;
    document.body.classList.remove('noScroll');
  }

  return { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar };
});
