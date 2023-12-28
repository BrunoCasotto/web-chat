<template>
  <div class="wellcome">
    <div class="wellcome__container">
      <h1 class="wellcome__title">Web chat</h1>
      <GoogleSignInButton @click="authStore.googleSignin"/>
    </div>
  </div>
</template>

<script setup>
import GoogleSignInButton from '@/components/GoogleSignInButton.vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.wellcome {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);

  &__container {
    min-width: 300px;
    min-height: 200px;
    padding: $space-xl;
    border-radius: 4px;

    @media screen and (max-width: $screen-md) {
      min-width: 200px;
      min-height: 150px;
    }
  }

  &__title {
    margin-bottom: $space-xxl;
    padding-bottom: $space-xxl;
    border-bottom: 1px solid var(--theme-color);
    font-weight: 600;
    font-size: $font-size-xxxxl;
    color: var(--theme-color);
    line-height: 1;
    text-align: center;

    @media screen and (max-width: $screen-md) {
      font-size: $font-size-xxxl;
    }
  }
}
</style>