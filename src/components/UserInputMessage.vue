<template>
  <div class="message-input">
    <input class="message-input__input" placeholder="Your message here" type="text">
    <button class="message-input__send">
      <img class="message-input__icon" src="./../assets/images/send.svg" alt="">
    </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.message-input {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 40px;
  background-color: $neutral-color-2;
  border-radius: 22px;
  border: 1px solid $neutral-color-3;

  &__send {
    width: 40px;
    height: 40px;
    border: none;
    background-color: $neutral-color-1;
    cursor: pointer;

    &:hover {
      background-color: $neutral-color-3;
    }
  }

  &__input {
    height: 100%;
    width: 100%;
    padding: 8px 16px;
    padding-left: 16px;
    border: none;
  }
}
</style>