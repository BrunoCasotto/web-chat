<template>
  <button class="theme-button">
    switch theme
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import'./../assets/scss/vars';

  .theme-button {
    background-color: var(--neutral-color-1);
    border: none;
    padding: $space-md;
    border-radius: 4px;
    cursor: pointer;
  }
</style>