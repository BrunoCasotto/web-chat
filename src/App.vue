<template>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import './assets/scss/vars.scss';
  .container {
    width: 100%;
    max-width: $screen-mg;
    margin: 0 auto;
  }
</style>
