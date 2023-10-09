<template>
  <section class="side-menu" :class="{ 'active': props.active }">
    <div class="side-menu__header">
      <CloseButton @click="menuStore.toggleMenu" class="close"/>
      <Search class="search"/>
    </div>
    <slot />
  </section>
</template>

<script setup>
import Search from '@/components/Search.vue'
import CloseButton from '@/components/CloseButton.vue'
import { useMenuStore } from '@/stores/menu.ts'
const props = defineProps(['active'])
const menuStore = useMenuStore()
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.side-menu {
  width: 100%;
  min-width: 300px;
  height: 100vh;
  background-color: $neutral-color-1;
  border-right: 1px solid $neutral-color-3;
  overflow-y: auto;

  @media screen and (max-width: $screen-sm) {
    position: absolute;
    top: 0;
    left: -300px;
    z-index: 1;
  }

  &.active {
    left: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 8px 16px;
    border-bottom: 1px solid $neutral-color-3;
    margin-bottom: 16px;
    @media screen and (max-width: $screen-sm) {
      padding: 4px 8px;
    }
  }

  .close {
    display: none;
    min-width: 40px;
    margin-right: 8px;

    @media screen and (max-width: $screen-sm) {
      display: block;
    }
  }
  .search {
    width: 100%;
  }
}
</style>