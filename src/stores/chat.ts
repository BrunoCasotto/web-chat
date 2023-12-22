import { defineStore } from 'pinia'
import { getDatabase, ref, onValue } from 'firebase/database'
const database = getDatabase()

interface Chat {
  description: string
}
interface ChatStore {
  currentChat: string,
  chats: Array<{
    title: string,
    description: string
  }>
}

export const useChatStore = defineStore('chat', {
  state: (): ChatStore => ({
    currentChat: '',
    chats: []
  }),
  actions: {
    setCurrentChat(chat: string) {
      this.currentChat = chat
    },
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