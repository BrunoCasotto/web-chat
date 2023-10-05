<template>
  <div class="chat">
    <SideMenu class="chat__menu">
      <template v-for="n in 10">
        <ChatCard />
      </template>
    </SideMenu>

    <ChatContent class="chat__content"/>
  </div>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue'
import ChatContent from '@/components/ChatContent.vue'
import ChatCard from '@/components/ChatCard.vue'
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
  }
}
</style>