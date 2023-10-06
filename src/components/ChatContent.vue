<template>
  <section class="chat">
    <div class="chat__header">

    </div>
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

  .chat {
    width: 100%;
    height: 100vh;
    background-color: $main-color-1;

    &__header {
      width: 100%;
      height: 56px;
      background-color: $neutral-color-1;
      border-bottom: 1px solid $neutral-color-3;
    }
  }
</style>