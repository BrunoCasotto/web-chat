<template>
  <section class="card" :class="{ 'active': active }">
    <div class="card__icon"></div>
    <div class="card__info">
      <h2 class="card__info__title">{{ props.title }}</h2>
      <p class="card__info__preview">
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-xl $space-lg;
    height: 72px;
    width: 100%;
    cursor: pointer;
    color: var(--font-color-primary);

    &:hover, &.active {
      border-right: 4px solid var(--theme-color);
    }

    &__info {
      flex: 1;

      &__title {
        margin-bottom: $space-sm;
        font-size: $font-size-lg;
        color: var(--theme-color);
      }

      &__preview {
        max-height: 40px;
        overflow: hidden;
        word-break: break-word;
        font-size: $font-size-md;
        color: var(--font-color);
      }
    }

    &__icon {
      margin-right: $space-xl;
      border: 1px solid var(--neutral-color-3);
      border-radius: 50%;
      height: 48px;
      min-width: 48px;
      background-color: var(--neutral-color-2);
    }
  }
</style>