<template>
  <section class="chat-content">
    <div class="chat-content__header">
      <h1 class="title">
        Nome do Chat aqui
      </h1>
    </div>
    <slot></slot>

    <UserInputMessage class="user-input"/>
  </section>
</template>

<script setup>
import UserInputMessage from '@/components/UserInputMessage.vue'
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

  .chat-content {
    width: 100%;
    height: 100vh;
    position: relative;
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

    .user-input {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 32px;
      width: 100%;
      max-width: 660px;
      margin: 0 8px;
    }
  }
</style>