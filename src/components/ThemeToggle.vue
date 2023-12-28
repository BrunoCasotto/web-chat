<template>
  <button class="toggle-theme" :class="{ active: props.active }">
    <span class="content"></span>
  </button>
</template>

<script setup>
const props = defineProps({
  active: Boolean,
});
</script>

<style lang="scss" scoped>
@import './../assets/scss/vars';

.toggle-theme {
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: $space-md;
  border-radius: 4px;
  border: 1px solid var(--theme-color);
  border-radius: 10px;
  background-color: var(--background-secondary);
  width: 40px;
  height: 20px;
  cursor: pointer;

  &.active {
    justify-content: flex-end;
  }
}

.content {
  display: block;
  left: 0;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: var(--theme-color);
}
</style>
