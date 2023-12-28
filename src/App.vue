<template>
  <div class="container" :class="themeStore.currentTheme">
    <div class="container__menu">
      <ThemeToggle
        @click="themeStore.toggleTheme"
        :active="themeStore.currentTheme === themeStore.DARK_CLASS"
        class="container__menu__button"
      />

      <LogoutButton
        v-if="authStore.user"
        @click="authStore.googleSignout"
        class="container__menu__button"
      />
    </div>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue'
import LogoutButton from './components/LogoutButton.vue'
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

  &__menu {
    display: flex;
    position: fixed;
    right: 20px;
    top: 15px;
    z-index: 1;
    padding: 0 $space-sm;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: $screen-md) {
      flex-direction: column;
    }

    &__button {
      &:not(last-child) {
        margin-right: $space-lg;

        @media screen and (max-width: $screen-md) {
          margin-right: 0;
          margin-bottom: $space-lg;
        }
      }
    }
  }
}
</style>
