<template>
  <section class="chat-content">
    <div class="chat-content__header">
      <ButtonMenu @click="menuStore.toggleMenu" class="chat-content__menu-btn"/>
      <h1 class="title">
        Nome do Chat aqui
      </h1>
    </div>
    <slot></slot>

    <div class="user-input">
      <UserInputMessage class="user-input__input"/>
    </div>
  </section>
</template>

<script setup>
import ButtonMenu from '@/components/ButtonMenu.vue'
import UserInputMessage from '@/components/UserInputMessage.vue'
import { useMenuStore } from '@/stores/menu.ts'

const menuStore = useMenuStore()
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

  .chat-content {
    position: relative;
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: $main-color-1;

    &__menu-btn {
      position: absolute;
      left: 8px;
      display: none;

      @media screen and (max-width: $screen-sm) {
        display: block;
      }
    }

    &__header {
      width: 100%;
      height: 56px;
      background-color: $neutral-color-1;
      border-bottom: 1px solid $neutral-color-3;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 32px;
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

    .user-input {
      display: flex;
      padding: 0 16px;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 32px;
      width: 100%;

      &__input {
        width: 100%;
        max-width: 600px;
      }
    }
  }
</style>