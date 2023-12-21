<template>
  <div class="login">
    <button @click="authStore.googleSignin" class="google-btn"></button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.login {
  padding: 32px;
  background: $theme-color-1;
  background: linear-gradient(180deg, $theme-color-1 50%, $neutral-color-1 100%);

  @media screen and (max-width: $screen-md) {
    padding: 16px;
  }

  .title {
    font-size: 40px;
    color: $neutral-color-1;
    text-align: center;
    margin-bottom: 16px;

    @media screen and (max-width: $screen-md) {
      margin-bottom: 8px;
    }
  }

  .google-btn {
    display: block;
    cursor: pointer;
    width: 191px;
    height: 46px;
    margin: 0 auto;
    background-color: transparent;
    border: none;
    background-image: url('./../assets/images/google/btn_google_signin_light_normal_web.png');
    background-repeat: no-repeat;

    &:focus {
      background-image: url('./../assets/images/google/btn_google_signin_light_focus_web.png');
    }

    &:active {
      background-image: url('./../assets/images/google/btn_google_signin_light_pressed_web.png');
    }
  }
}
</style>