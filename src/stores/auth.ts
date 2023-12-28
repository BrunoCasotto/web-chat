import { defineStore } from 'pinia'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { PAGES, router } from '../router'

interface AuthState {
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
        const { user } = await signInWithPopup(auth, provider)

        this.$state.user = user
        router.push({ name: PAGES.CHAT })
      } catch (error) {
        console.error(error)
      }
    },
    async googleSignOut() {
      try {
        const auth = getAuth()
        await signOut(auth)
      } catch (error) {
        console.error(error)
      } finally {
        this.user = null
        router.push({ name: PAGES.HOME })
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