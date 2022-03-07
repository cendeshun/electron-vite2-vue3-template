<template>
  <div class="app-version">
    <span class="name">{{name}}</span>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import pack from '../../../package.json';
const name = computed(()=>import.meta.env.VITE_APP_NAME);
const version = computed(()=>pack.version);

</script>

<style lang="scss" scoped>

.app-version{
  padding-left: 20px;
  @include font(16px,#DCDFE6);
  .version{
    margin-left: 4px;
    @include font(12px,#DCDFE6);
  }
}
</style>