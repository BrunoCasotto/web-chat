<template>
  <div class="message" :class="{ mine: isMine }">
    <div class="message__content">
      <p class="message__title">{{ message.sender }}:</p>
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
    userId: String,
  },
});
</script>

<style lang="scss" scoped>
@import './../assets/scss/vars';

.message {
  display: flex;
  align-items: start;
  justify-content: flex-start;
  width: 100%;

  &__content {
    position: relative;
    padding: $space-lg;
    max-width: 70%;
    border-radius: 4px;
    background-color: var(--background-secondary);
    font-size: $font-size-md;
    color: var(--font-color-primary);
  }

  &__title {
    margin-bottom: $space-md;
    font-weight: bold;
    font-size: $font-size-md;
  }

  &__text {
    margin-bottom: $space-md;
  }

  &__info {
    text-align: right;
    font-size: $font-size-sm;
    color: var(--font-color-secondary);
  }

  &.mine {
    justify-content: flex-end;
    .message__content {
      color: var(--font-color-inverted);
      background-color: var(--theme-color);
    }

    .message__info {
      color: var(--font-color-inverted);
    }

    .message__title {
      color: var(--font-color-inverted);
    }
  }
}
</style>
