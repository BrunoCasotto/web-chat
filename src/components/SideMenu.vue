<template>
  <section class="side-menu">
    <slot />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.side-menu {
  width: 100%;
  height: 100vh;
  border-right: 1px solid $neutral-color-1;
  overflow-y: auto;
}
</style>