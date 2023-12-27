<template>
  <div class="container" :class="currentTheme">
    <ThemeButton @click="toggleTheme" class="container__theme-btn" />
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import ThemeButton from './components/ThemeButton.vue'
  import { onMounted, ref } from 'vue';
  enum Themes {
    LIGHT = 'light-theme',
    DARK = 'dark-theme'
  }
  const LOCAL_STORAGE_THEME_KEY = 'web-chat-theme'
  let currentTheme = ref(Themes.LIGHT)


  const saveTheme = (theme: Themes) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }

  const getSavedTheme = (): Themes => {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes
  }

  const toggleTheme = () => {
    if (currentTheme.value === Themes.LIGHT) {
      currentTheme.value = Themes.DARK
    } else {
      currentTheme.value = Themes.LIGHT
    }

    saveTheme(currentTheme.value)
  }

  onMounted(() => {
    const savedTheme = getSavedTheme()
    currentTheme.value = savedTheme && savedTheme
  })
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
