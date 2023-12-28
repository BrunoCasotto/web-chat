<template>
  <section class="chat-content">
    <div v-if="props.title" class="header">
      <div class="notch">
        <h1 class="title">{{ props.title }}</h1>
      </div>
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
import UserInputMessage from '@/components/UserInputMessage.vue';
import { onMounted, ref } from 'vue';
const messageList = ref(HTMLElement);
const stopAutoScroll = ref(false);

const keepMessageScrollBottom = () => {
  const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList' && !stopAutoScroll.value) {
        messageList.value.scrollTop = messageList.value.scrollHeight;
      }
    }
  });

  const config = { attributes: false, childList: true, subtree: true };
  observer.observe(messageList.value, config);
};

const observeUserScroll = () => {
  messageList.value.addEventListener('scroll', (event) => {
    const { offsetHeight, scrollTop, scrollHeight } = messageList.value;
    const scrolledHeight = offsetHeight + scrollTop;
    stopAutoScroll.value = scrolledHeight < scrollHeight;
  });
};

onMounted(() => {
  observeUserScroll();
  keepMessageScrollBottom();
});

const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
$chat-height: 100vh;
$header-height: 40px;
$message-input-height: 72px;

.chat-content {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: $chat-height;
  background-color: var(--background);

  .header {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    padding: 0 $space-xl;
    border: 1px solid var(--theme-color);
    border-top: none;
    border-bottom-right-radius: $header-height;
    border-bottom-left-radius: $header-height;
    height: $header-height;
    min-width: 300px;
    background-color: var(--background);

    @media screen and (max-width: $screen-sm) {
      padding-left: 8px;
      min-width: 200px;
    }

    .title {
      font-size: $font-size-xxxl;
      color: var(--theme-color);
      font-weight: 600;
      text-align: center;
    }
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 $space-lg $space-xl $space-lg;
    width: 100%;
    height: $message-input-height;
  }

  &__messages {
    display: flex;
    flex-direction: column;
    padding: $space-xl;
    overflow-y: scroll;
    width: 100%;
    height: calc(#{$chat-height} - #{$message-input-height});

    .complete {
      flex: 1 1 auto;
      min-height: 50px;
    }

    &::-webkit-scrollbar {
      margin: $space-sm;
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      border: 1px solid var(--background-secondary);
      background: var(--background-secondary);
    }

    &::-webkit-scrollbar-thumb {
      margin: $space-sm;
      border-radius: 4px;
      background-color: var(--theme-color);
    }
  }
}
</style>
