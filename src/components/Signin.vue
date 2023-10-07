<template>
  <div class="login">
    <h3 class="title">Login</h3>
    <button class="google-btn"></button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.login {
  padding: 32px;
  background: $main-color-1;
background: linear-gradient(180deg, $main-color-1 50%, $neutral-color-1 100%);
  .title {
    font-size: 50px;
    color: $neutral-color-1;
    text-align: center;
    margin-bottom: 16px;
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