<template>
  <div class="chat">
    <ButtonMenu @click="menuStore.toggleMenu" class="menu-btn" />

    <SideMenu class="chat__menu" :active="menuStore.active">
      <template v-for="(chat, index) in chatStore.chats">
        <ChatCard @click="chatStore.setCurrentChat(chat.title)" :title="chat.title" :description="chat.description"
          :active="chat.title === chatStore.currentChat" @key="index" />
      </template>
    </SideMenu>

    <ChatContent class="chat__content" :title="chatStore.currentChat">
      <template v-slot:messages>
        <Message
          v-for="(message, index) in chatStore.messages"
          @key="index"
          :isMine="message.userId === authStore.user.uid"
          :message="message"
          class="chat__message"
        />
      </template>

      <template v-slot:input>
        <UserInputMessage class="user-input"/>
      </template>
    </ChatContent>
  </div>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue'
import ChatContent from '@/components/ChatContent.vue'
import UserInputMessage from '@/components/UserInputMessage.vue'
import Message from '@/components/Message.vue'
import ChatCard from '@/components/ChatCard.vue'
import ButtonMenu from '@/components/ButtonMenu.vue'
import { useMenuStore } from '@/stores/menu.ts'
import { useChatStore } from '../stores/chat.ts'
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth'
const chatStore = useChatStore()
const menuStore = useMenuStore()
const authStore = useAuthStore()

onMounted(() => {
  chatStore.listenChats()
  chatStore.listenMessages('General')
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.chat {
  display: flex;

  &__menu {
    width: 20%;
  }

  &__content {
    width: 80%;

    @media screen and (max-width: $screen-sm) {
      width: 100%;
    }
  }

  &__message {
    margin-bottom: $space-xl;
  }
}

.menu-btn {
  z-index: 1;
  position: absolute;
  display: none;

  @media screen and (max-width: $screen-sm) {
    display: block;
  }
}

.user-input {
  width: 100%;
  max-width: 600px;
}
</style>