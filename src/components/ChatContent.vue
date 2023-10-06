<template>
  <section class="chat">
    <div class="chat__header">
      <h1 class="title">
        Nome do Chat aqui
      </h1>
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
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 32px;

      .title {
        font-size: $font-size-xxxl;
        color: $neutral-color-4;
        font-weight: 600;
      }
    }
  }
</style>