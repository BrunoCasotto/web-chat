<template>
  <section class="side-menu">
    <div class="side-menu__header">
      <Search class="search"/>
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

  @media screen and (max-width: $screen-sm) {
    position: absolute;
    top: 0;
    left: -300px;

    &.active {
      left: 0;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 10px 16px;
    border-bottom: 1px solid $neutral-color-3;
    margin-bottom: 16px;
  }

  .menu {
      min-width: 40px;
      margin-right: 8px;
    }
    .search {
      width: 100%;
    }
}
</style>