<template>
  <div class="wellcome">
    <h1 class="title">Byte Papo</h1>

    <div class="card card--borderless">
      <h2 class="sub-title">Bem-vindo ao Byte Papo</h2>
      <p class="info">
        O Seu Espaço de Conversa Online! Explore um mundo virtual de interação e diálogo com pessoas de todo o Brasil e
        além. Conecte-se, compartilhe, e faça novas amizades enquanto discute os tópicos que mais importam para você.
        Nosso chat oferece salas diversificadas, uma comunidade acolhedora e uma plataforma fácil de usar. Junte-se a nós
        hoje e comece a conversar!
      </p>
    </div>

    <div class="card card--borderless">
      <Signin class="wellcome__signin"/>
    </div>
  </div>
</template>

<script setup>
import Signin from '@/components/Signin.vue'
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.wellcome {
  padding-top: $space-xl;
  min-height: 100vh;
  width: 100%;

  @media screen and (max-width: $screen-md) {
    padding-top: $space-lg;
  }

  &__signin {
    margin-bottom: $space-xxl;
    @media screen and (max-width: $screen-md) {
      margin-bottom: 0px;
    }
  }
  .title {
    font-weight: 600;
    font-size: 50px;
    color: var(--theme-color);
    text-align: center;
    margin-bottom: $space-xxl;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 40px;
      background-image: url('./../assets/images/send.svg');
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: $space-lg;
    }

    @media screen and (max-width: $screen-md) {
      font-size: 40px;
      margin-bottom: $space-lg;
    }
  }

  .sub-title {
    color: var(--theme-color);
    font-size: $font-size-xxxl;
    margin-bottom: $space-xl;

    @media screen and (max-width: $screen-md) {
      margin-bottom: $space-sm;
    }
  }

  .info {
    text-align: justify;
    color: var(--theme-color-5);
    font-size: $font-size-lg;
  }

  .card {
    width: 100%;
    max-width: 930px;
    margin: 0 auto;
    padding: 16px;
    border: 1px solid var(--theme-color);
    border-radius: 22px;
    margin-bottom: $space-xl;

    @media screen and (max-width: $screen-md) {
      padding: $space-xl;
      margin-bottom: $space-lg;
    }

    &--borderless {
      border: none;
    }
  }
}</style>