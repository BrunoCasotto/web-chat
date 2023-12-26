import { defineStore } from 'pinia'
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  query,
  orderByValue,
  orderByChild,
} from 'firebase/database'
import type { Message, Chat } from '../domains/chat'
import { useAuthStore } from './auth'


const database = getDatabase()

interface ChatStore {
  currentChat: string,
  chats: Chat[],
  messages: Message[]
}

export const useChatStore = defineStore('chat', {
  state: (): ChatStore => ({
    currentChat: '',
    chats: [],
    messages: []
  }),
  actions: {
    setCurrentChat(chat: string) {
      this.currentChat = chat
      this.listenMessages(chat)
    },
    async listenChats() {
      try {
        const chatRef = ref(database, 'chats/');
        onValue(chatRef, (snapshot) => {
          const chats: Record<string, Chat> = snapshot.val();
          if (chats) {
            this.chats = Object.keys(chats).map(title => ({ title, ...chats[title] }))
          }
        });
      } catch (error) {
        this.chats = []
      }
    },
    async listenMessages(chat: string) {
      try {
        const MessageRef = query(ref(database, `messages/${chat}`), orderByChild('date'));
        onValue(MessageRef, (snapshot) => {
          const messages: Array<Message> = snapshot.val();
          this.messages = messages
        });
      } catch (error) {
        this.messages = []
      }
    },
    async postMessage(content: string) {
      const authStore = useAuthStore()
      const MessageRef = ref(database, `messages/${this.currentChat}`)
      const NewMessageRef = push(MessageRef)

      const message: Message = {
        content,
        date: Date.now().toString(),
        sender: authStore.user?.displayName || '',
        userId: authStore.user?.uid || ''
      }

      set(NewMessageRef, message)
    }
  },
})