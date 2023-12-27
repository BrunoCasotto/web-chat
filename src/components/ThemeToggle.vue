<template>
  <button class="toggle-theme" :class="{ 'active': props.active }">
    <span class="content"></span>
  </button>
</template>

<script setup>
  const props = defineProps({
    active: Boolean
  })
</script>

<style lang="scss" scoped>
  @import'./../assets/scss/vars';

  .toggle-theme {
    display: flex;
    justify-content: flex-start;
    position: relative;
    background-color: var(--background-secondary);
    padding: $space-md;
    border-radius: 4px;
    cursor: pointer;
    border-radius: 10px;
    width: 40px;
    height: 20px;
    border: 1px solid var(--theme-color);

    &.active {
      justify-content: flex-end;
    }
  }

  .content {
    display: block;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--theme-color);
  }
</style>