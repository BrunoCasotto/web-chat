<template>
  <div class="search">
    <Magnifier class="search__icon" />
    <input class="search__input" placeholder="Search" type="text" />
  </div>
</template>

<script setup>
import Magnifier from './icons/Magnifier.vue';
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.search {
  position: relative;
  height: 40px;

  &__icon {
    position: absolute;
    left: 10px;
    top: 8px;
  }

  &__input {
    padding: 8px 16px;
    padding-left: 35px;
    border-radius: 22px;
    border: 1px solid var(--neutral-color-3);
    background-color: var(--background-secondary);
    width: 100%;
    height: 100%;
    color: var(--font-color-primary);

    &::placeholder {
      color: var(--font-color);
      opacity: 1; /* Firefox */
    }
  }
}
</style>
