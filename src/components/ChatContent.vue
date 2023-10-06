<template>
  <section class="chat">
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
  }
</style>