<template>
  <section class="chat-content">
    <div class="chat-content__header">
      <h1 class="title"> {{ props.title }} </h1>
    </div>

    <div class="chat-content__messages" ref="messageList">
      <div class="complete"></div>
      <div class="chat-content__messages__list">
        <slot name="messages"></slot>
      </div>
    </div>

    <div class="chat-content__input-wrapper">
      <slot name="input"></slot>
    </div>
  </section>
</template>

<script setup>
import UserInputMessage from '@/components/UserInputMessage.vue'
import { onMounted, ref } from 'vue';

const messageList = ref(HTMLElement)
const stopAutoScroll = ref(false)

const keepMessageScrollBottom = () => {
  const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList' && !stopAutoScroll.value) {
        messageList.value.scrollTop = messageList.value.scrollHeight
      }
    }
  })

  const config = { attributes: false, childList: true, subtree: true };
  observer.observe(messageList.value, config)
}

const observeUserScroll = () => {
  messageList.value.addEventListener('scroll', (event) => {
    const { offsetHeight, scrollTop, scrollHeight} = messageList.value
    const scrolledHeight = offsetHeight + scrollTop
    stopAutoScroll.value = scrolledHeight < scrollHeight
  })
}

onMounted(() => {
  observeUserScroll()
  keepMessageScrollBottom()
})

const props = defineProps({
  title: String,
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
$chat-height: 100vh;
$header-height: 56px;
$message-input-height: 72px;

.chat-content {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: $chat-height;
  background-color: $theme-color-1;

  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: $header-height;
    border-bottom: 1px solid $neutral-color-3;
    padding-left: $space-xl;
    background-color: $neutral-color-1;

    @media screen and (max-width: $screen-sm) {
      padding-left: 8px;
    }

    .title {
      font-size: $font-size-xxxl;
      color: $neutral-color-4;
      font-weight: 600;

      @media screen and (max-width: $screen-sm) {
        text-align: center;
        width: 100%;
      }
    }
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: $message-input-height;
    padding: 0 $space-lg $space-xl $space-lg;
  }

  &__messages {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(#{$chat-height} - #{$message-input-height + $header-height});
    padding: $space-xl;
    overflow-y: scroll;

    .complete {
      flex: 1 1 auto;
      min-height: 12px;
    }

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      margin: $space-sm;
    }

    &::-webkit-scrollbar-track {
      background: $theme-color-1;
      border: 1px solid $theme-color-1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $neutral-color-1;
      border-radius: 4px;
      margin: $space-sm;
    }
  }
}
</style>