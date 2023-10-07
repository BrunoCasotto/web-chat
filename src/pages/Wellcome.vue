<template>
  <div class="wellcome">
    <h1 class="title">Byte Papo</h1>
    <div class="informations informations--borderless">
      <h2 class="sub-title">Bem-vindo ao Byte Papo</h2>
      <p class="info">
        O Seu Espaço de Conversa Online! Explore um mundo virtual de interação e diálogo com pessoas de todo o Brasil e
        além. Conecte-se, compartilhe, e faça novas amizades enquanto discute os tópicos que mais importam para você.
        Nosso chat oferece salas diversificadas, uma comunidade acolhedora e uma plataforma fácil de usar. Junte-se a nós
        hoje e comece a conversar!
      </p>
    </div>

    <Signin class="wellcome__signin"/>

    <div class="informations-grid">
      <div class="informations informations--grid">
        <h3 class="sub-title">Salas Temáticas</h3>
        <p class="info">Explore diversas salas de chat, desde tecnologia e entretenimento até hobbies e notícias.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Converse com Pessoas Reais</h3>
        <p class="info">Faça novas amizades e conecte-se com pessoas de todas as idades e origens.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Discussões Atuais</h3>
        <p class="info">Mantenha-se atualizado e envolvido com as últimas notícias e eventos em nossa sala de notícias.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Compartilhe Seus Interesses</h3>
        <p class="info">Compartilhe suas paixões e hobbies em nossas salas especializadas.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Segurança e Privacidade</h3>
        <p class="info">Prezamos pela segurança online e garantimos um ambiente amigável e respeitoso para todos.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Acesso Fácil</h3>
        <p class="info">Nosso chat é acessível em qualquer dispositivo, tornando a conversa online mais conveniente do que nunca.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Comunidade Vibrante</h3>
        <p class="info">Faça parte de uma comunidade vibrante de conversadores que estão ansiosos para conhecê-lo.</p>
      </div>
      <div class="informations informations--grid">
        <h3 class="sub-title">Diversão e Entretenimento</h3>
        <p class="info">Divirta-se, ria, e compartilhe momentos especiais com outros membros.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Signin from '@/components/Signin.vue'
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.wellcome {
  min-height: 100vh;
  width: 100%;

  &__signin {
    margin-bottom: 32px;
  }
  .title {
    padding: 32px 0;
    font-size: 50px;
    color: $neutral-color-1;
    text-align: center;
    margin-bottom: 32px;
    background-color: $main-color-1;
  }

  .sub-title {
    color: $main-color-1;
    font-size: $font-size-xxxl;
    margin-bottom: 16px;
  }

  .info {
    text-align: justify;
    color: $main-color-5;
    font-size: $font-size-lg;
  }

  .informations {
    width: 100%;
    max-width: 930px;
    margin: 0 auto;
    padding: 32px;
    border: 1px solid $main-color-1;
    border-radius: 22px;
    margin-bottom: 32px;

    &--borderless {
      border: none;
    }

    &--grid {
      max-width: calc(50% - 64px);
      min-height: 200px;
      margin: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .informations-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1306px;
    margin: 0 auto;
  }
}</style>