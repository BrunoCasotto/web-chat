import { defineStore } from 'pinia'
import { getDatabase, ref, onValue } from 'firebase/database'
import type { Message, Chat } from '../domains/chat'

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
        const MessageRef = ref(database, `messages/${chat}`);
        onValue(MessageRef, (snapshot) => {
          const messages: Array<Message> = snapshot.val();
          this.messages = messages
        });
      } catch (error) {
        this.messages = []
      }
    },
  },
})