<template>
  <div class="chat">
    <SideMenu class="chat__menu" :active="menuStore.active">
      <template v-for="(chat, index) in chatStore.chats">
        <ChatCard @click="chatStore.setCurrentChat(chat.title)" :title="chat.title" :description="chat.description"
          :active="chat.title === chatStore.currentChat" @key="index" />
      </template>
    </SideMenu>

    <ChatContent class="chat__content" :title="chatStore.currentChat">
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
import ChatCard from '@/components/ChatCard.vue'
import { useMenuStore } from '@/stores/menu.ts'
import { useChatStore } from '../stores/chat.ts'
import { onMounted } from 'vue';
const chatStore = useChatStore()
const menuStore = useMenuStore()

onMounted(() => {
  chatStore.listenChats()
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
}

.user-input {
  width: 100%;
  max-width: 600px;
}
</style>