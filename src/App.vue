<template>
  <div class="container" :class="themeStore.currentTheme">
    <div class="container__config">
      <ThemeToggle
        @click="themeStore.toggleTheme"
        :active="themeStore.currentTheme === themeStore.DARK_CLASS"
        class="theme"
      />
      <Logout
        class="signout"
        v-if="authStore.user"
        :onClick="authStore.googleSignout"
      />
    </div>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
  import ThemeToggle from './components/ThemeToggle.vue'
  import Logout from './components/Logout.vue'
  import { onMounted } from 'vue';
  import { useThemeStore } from './stores/theme';
  import { useAuthStore } from './stores/auth';

  const themeStore = useThemeStore()
  const authStore = useAuthStore()

  onMounted(() => {
    themeStore.fetchTheme()
  })
</script>

<style lang="scss" scoped>
@import './assets/scss/vars.scss';
  .container {
    width: 100%;

    &__config {
      z-index: 1;
      position: fixed;
      right: 20px;
      top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;


      @media screen and (max-width: $screen-md) {
        flex-direction: column;
      }

      .signout {
        @media screen and (max-width: $screen-md) {
          margin-top: $space-lg;
        }
      }

      .theme {
        margin-right: $space-lg;

        @media screen and (max-width: $screen-md) {
          margin-right: 0;
        }
      }
    }
  }
</style>
