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
    padding: 16px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover, &.active {
      background-color: $neutral-color-2;
    }

    &__info {
      flex: 1;
      .title {
        font-size: $font-size-lg;
        color: $theme-color-4;
        margin-bottom: 2px;
      }

      .preview {
        font-size: $font-size-md;
        color: $theme-color-5;
        max-height: 40px;
        overflow: hidden;
        word-break: break-word;
      }
    }

    &__icon {
      min-width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: $neutral-color-2;
      border: 1px solid $neutral-color-3;
      margin-right: 16px;
    }
  }
</style>