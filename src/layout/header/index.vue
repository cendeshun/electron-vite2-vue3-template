<!--
 * @Description: 应用自定义头部
-->
<template>
  <div class="app-header">
    <div class="app-header-left">
      <Version />
    </div>
    <div class="app-header-right">
      <AppMenu />
    </div>
  </div>
</template>

<script setup>
import Version from './version.vue';
import AppMenu from './app-menu.vue';
import { ref, computed, onBeforeMount } from 'vue';


onBeforeMount(() => {
  
})

</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $appHeaderHeight;
  background-image: linear-gradient( to right,#3a4a6b,#2a3858,#334260);
  -webkit-app-region: drag; //窗口拖拽
}
.app-header-right{
  -webkit-app-region: no-drag; //禁止拖拽, 保证click事件触发
}

</style>
