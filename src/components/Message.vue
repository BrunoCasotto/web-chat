<template>
  <div class="message" :class="{ 'mine': isMine }">
    <div class="message__content">
      <p class="message__title"> {{ message.sender }}:</p>
      <p class="message__text">{{ message.content }}</p>
      <p class="message__info">{{ message.date }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    isMine: Boolean,
    message: {
      content: String,
      date: String,
      sender: String,
      userId: String
    }
  })
</script>

<style lang="scss" scoped>
  @import'./../assets/scss/vars';

  .message {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    width: 100%;

    &.mine {
      justify-content: flex-end;

      .message__content {
        color: $neutral-color-1;
        background-color: $theme-color-2;
      }

      .message__info {
        color: $neutral-color-1;
      }
    }

    &__content {
      position: relative;
      max-width: 70%;
      padding: $space-lg;
      border-radius: 4px;
      font-size: $font-size-md;
      background-color: $neutral-color-2;
      color: $neutral-color-6;
    }

    &__title {
      font-weight: bold;
      font-size: $font-size-md;
      margin-bottom: $space-md;
    }

    &__text {
      margin-bottom: $space-md;
    }

    &__info {
      text-align: right;
      color: $neutral-color-4;
      font-size: $font-size-sm;
    }
  }
</style>