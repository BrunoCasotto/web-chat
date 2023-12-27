import { defineStore } from "pinia";

type ThemeState = {
  currentTheme: string | undefined,
  DARK_CLASS: string
}

const LOCAL_STORAGE_THEME_KEY = 'web-chat-theme'

const saveTheme = (theme: string) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
}

const getSavedTheme = (): string | null => {
  return localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    currentTheme: '',
    DARK_CLASS: 'dark-theme'
  }),
  actions: {
    fetchTheme() {
      const savedTheme = getSavedTheme()

      if (savedTheme) {
        this.currentTheme = savedTheme
      }
    },
    toggleTheme() {
      if (this.currentTheme === this.DARK_CLASS) {
        this.currentTheme = ''
      } else {
        this.currentTheme = this.DARK_CLASS
      }

      saveTheme(this.currentTheme)
    },
  }
})