<template>
  <section class="side-menu" :class="{ active: props.active }">
    <div class="side-menu__header">
      <CloseButton @click="onCloseClick" class="close" />
      <Search class="search" />
    </div>
    <slot />
  </section>
</template>

<script setup>
import Search from '@/components/Search.vue';
import CloseButton from '@/components/CloseButton.vue';

const props = defineProps({
  active: Boolean,
  onCloseClick: Function,
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.side-menu {
  border-right: 1px solid var(--neutral-color-3);
  overflow-y: auto;
  width: 100%;
  min-width: 300px;
  height: 100vh;
  background-color: var(--background-secondary);

  @media screen and (max-width: $screen-sm) {
    position: absolute;
    top: 0;
    left: -300px;
    z-index: 2;
  }

  &.active {
    left: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    padding: $space-lg;
    border-bottom: 1px solid var(--neutral-color-3);
    margin-bottom: $space-lg;
    background-color: var(--neutral-color-1);
  }

  .close {
    display: none;
    min-width: 40px;
    margin-right: $space-md;

    @media screen and (max-width: $screen-sm) {
      display: block;
    }
  }
  .search {
    width: 100%;
  }
}
</style>
