<template>
  <section class="chat-content">
    <div class="chat-content__header">
      <h1 class="title"> {{ props.title }} </h1>
    </div>

    <div class="chat-content__messages">
      <slot name="messages"></slot>
    </div>

    <div class="chat-content__input-wrapper">
      <slot name="input"></slot>
    </div>
  </section>
</template>

<script setup>
import UserInputMessage from '@/components/UserInputMessage.vue'

const props = defineProps({
  title: String,
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
$chat-height: 100vh;
$header-height: 56px;
$message-input-height: 72px;

.chat-content {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: $chat-height;
  background-color: $theme-color-1;

  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: $header-height;
    border-bottom: 1px solid $neutral-color-3;
    padding-left: $space-xl;
    background-color: $neutral-color-1;

    @media screen and (max-width: $screen-sm) {
      padding-left: 8px;
    }

    .title {
      font-size: $font-size-xxxl;
      color: $neutral-color-4;
      font-weight: 600;

      @media screen and (max-width: $screen-sm) {
        text-align: center;
        width: 100%;
      }
    }
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: $message-input-height;
    padding: 0 $space-lg $space-xl $space-lg;
  }

  &__messages {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    padding: $space-xl;
    overflow-y: scroll;
    height: calc(#{$chat-height} - #{$message-input-height + $header-height});

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      margin: $space-sm;
    }

    &::-webkit-scrollbar-track {
      background: $theme-color-1;
      border: 1px solid $theme-color-1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $neutral-color-1;
      border-radius: 4px;
      margin: $space-sm;
    }
  }
}
</style>