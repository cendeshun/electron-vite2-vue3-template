<template>
  <div class="page-wrapper home-page flex-center">
    <header class="page-header">
      Hello Electron
    </header>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
</script>

<style lang="scss" scoped>
.page-header{
  @include font(50px,$app-theme);
}
</style>
