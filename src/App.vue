<template>
  <div class="container" :class="currentTheme">
    <ThemeToggle
      @click="toggleTheme"
      :active="currentTheme === DARK_CLASS"
      class="container__theme-btn"
      />
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import ThemeToggle from './components/ThemeToggle.vue'
  import { onMounted, ref } from 'vue';

  const DARK_CLASS = 'dark-theme'
  const LOCAL_STORAGE_THEME_KEY = 'web-chat-theme'
  let currentTheme = ref('')

  const saveTheme = (theme: string) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }

  const getSavedTheme = (): string | null => {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
  }

  const toggleTheme = () => {
    if (currentTheme.value === DARK_CLASS) {
      currentTheme.value = ''
    } else {
      currentTheme.value = DARK_CLASS
    }

    saveTheme(currentTheme.value)
  }

  onMounted(() => {
    const savedTheme = getSavedTheme()
    if (savedTheme) {
      currentTheme.value = savedTheme
    }
  })
</script>

<style lang="scss" scoped>
@import './assets/scss/vars.scss';
  .container {
    width: 100%;

    &__theme-btn {
      z-index: 1;
      position: fixed;
      right: 20px;
      top: 10px;
    }
  }
</style>
