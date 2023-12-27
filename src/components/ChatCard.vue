<template>
  <section class="card" :class="{ 'active': active }">
    <div class="card__icon"></div>
    <div class="card__info">
      <h2 class="title">{{ props.title }}</h2>
      <p class="preview">
        {{ props.description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  active: Boolean
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

  .card {
    height: 72px;
    width: 100%;
    padding: $space-xl $space-lg;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: var(--font-color-primary);

    &:hover, &.active {
      border-right: 4px solid var(--theme-color);
    }

    &__info {
      flex: 1;
      .title {
        font-size: $font-size-lg;
        color: var(--theme-color);
        margin-bottom: $space-sm;
      }

      .preview {
        font-size: $font-size-md;
        color: var(--font-color);
        max-height: 40px;
        overflow: hidden;
        word-break: break-word;
      }
    }

    &__icon {
      min-width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: var(--neutral-color-2);
      border: 1px solid var(--neutral-color-3);
      margin-right: $space-xl;
    }
  }
</style>