import { defineStore } from 'pinia'
import { getDatabase, ref, onValue, get, child, query } from 'firebase/database'
const database = getDatabase()

interface Chat {
  description: string
}
interface ChatStore {
  chats: Array<{
    title: string,
    description: string
  }>
}

export const useChatStore = defineStore('chat', {
  state: (): ChatStore => ({
    chats: []
  }),
  actions: {
    async listenChats() {
      try {
        const starCountRef = ref(database, 'chats/');
        onValue(starCountRef, (snapshot) => {
          const chats: Record<string, Chat> = snapshot.val();
          if (chats) {
            this.chats = Object.keys(chats).map(title => ({ title, ...chats[title] }))
          }
        });
      } catch (error) {
        this.chats = []
      }
    }
  },
})