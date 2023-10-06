<template>
  <div class="search">
    <img class="search__icon" src="./../assets/images/magnifier.svg" alt="">
    <input class="search__input" type="text">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.search {
  height: 40px;
  position: relative;

  &__icon {
    position: absolute;
    left: 10px;
    top: 5px;
  }

  &__input {
    width: 100%;
    padding: 8px;
    padding-left: 35px;
    border-radius: 22px;
    background-color: $neutral-color-2;
    border: 1px solid $neutral-color-3;
  }
}
</style>