<template>
  <div class="search">
    <img class="search__icon" src="./../assets/images/magnifier.svg" alt="">
    <input class="search__input" placeholder="Search" type="text">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.search {
  position: relative;
  height: 40px;

  &__icon {
    position: absolute;
    left: 10px;
    top: 8px;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    padding-left: 35px;
    border-radius: 22px;
    background-color: var(--background-secondary);
    border: 1px solid var(--neutral-color-3);
    color: var(--font-color-primary);

    &::placeholder {
      color: var(--font-color);
      opacity: 1; /* Firefox */
    }
  }
}
</style>