<template>
  <div class="message-input">
    <input
      v-bind="$attrs"
      class="message-input__input"
      placeholder="Your message here"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @blur="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <button class="message-input__send" @click="(event) => $emit('click', event)">
      <img class="message-input__icon" src="./../assets/images/send.svg" alt="">
    </button>
  </div>
</template>

<script setup lang="ts">
import { type InputHTMLAttributes } from 'vue';

interface Props extends /** @vue-ignore */ InputHTMLAttributes {
  modelValue?: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
});


defineOptions({
  name: 'UserInputMessage'
});

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'click', event: MouseEvent): void;
}>();

</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.message-input {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 40px;
  border-radius: 22px;
  border: 1px solid var(--neutral-color-3);

  &__send {
    width: 40px;
    height: 40px;
    border: none;
    background-color: var(--background-secondary);
    cursor: pointer;
  }

  &__input {
    height: 100%;
    width: 100%;
    padding: 8px 16px;
    padding-left: 16px;
    border: none;
    background-color: var(--background);
    color: var(--font-color-primary);

    &::placeholder {
      color: var(--font-color);
      opacity: 1; /* Firefox */
    }
  }
}
</style>