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
  min-width: 300px;
  height: 100vh;
  border-right: 1px solid $neutral-color-3;
  overflow-y: auto;

  &__header {
    height: 56px;
    padding: 10px 16px;
    border-bottom: 1px solid $neutral-color-3;
  }
}
</style>