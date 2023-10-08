import { defineStore } from 'pinia'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
} from 'firebase/auth'

type AuthState = {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null
  }),
  actions: {
    async googleSignin() {
      try {
        const auth = getAuth();
        auth.languageCode = 'it'
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)
        this.$state.user = result.user
      } catch (error) {
        console.error('googleSignin', error)
      }
    },
    async isAuthenticated() {
      return new Promise((resolve) => {
        const auth = getAuth()

        onAuthStateChanged(auth, user => {
          if (user) {
            this.$state.user = user
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }
  },
})