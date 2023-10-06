<template>
  <section class="side-menu">
    <div class="side-menu__header">
      <Search />
    </div>
    <slot />
  </section>
</template>

<script setup>
import Search from '@/components/Search.vue'
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.side-menu {
  width: 100%;
  height: 100vh;
  border-right: 1px solid $neutral-color-1;
  overflow-y: auto;

  &__header {
    width: 100%;
    padding: 8px 16px;
    border-bottom: 1px solid $neutral-color-1;;
  }
}
</style>