import { defineStore } from 'pinia';
type MenuStore = {
  active: boolean;
};

export const useMenuStore = defineStore('menu', {
  state: (): MenuStore => ({
    active: false,
  }),
  actions: {
    toggleMenu() {
      this.$state.active = !this.$state.active;
    },
  },
});
