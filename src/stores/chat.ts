import { defineStore } from 'pinia'
import { getDatabase, ref, get } from "firebase/database";
const db = getDatabase()
const chatMenu = ref(db, 'chatMenu')

type ChatStore = {
  chatMenu: Array<{
    title: string
    description: string
  }>
}

export const useChatStore = defineStore('chat', {
  state: (): ChatStore => ({
    chatMenu: []
  }),
  actions: {
    async fetchChatList() {
      try {
        const snapshot = await get(chatMenu)
        if (snapshot.exists()) {
          this.$state.chatMenu = snapshot.val()
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
})