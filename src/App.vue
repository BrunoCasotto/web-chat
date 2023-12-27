<template>
  <div class="container" :class="currentTheme">
    <ThemeButton @click="toggleTheme" class="container__theme-btn" />
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import ThemeButton from '@/components/ThemeButton.vue'
import { ref } from 'vue';

  enum Themes {
    LIGHT = 'light-theme',
    DARK = 'dark-theme'
  }

  let currentTheme = ref(Themes.LIGHT)

  const toggleTheme = () => {
    if (currentTheme.value === Themes.LIGHT) {
      currentTheme.value = Themes.DARK
    } else {
      currentTheme.value = Themes.LIGHT
    }
  }
</script>

<style lang="scss" scoped>
@import './assets/scss/vars.scss';
  .container {
    width: 100%;

    &__theme-btn {
      z-index: 1;
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }
</style>
