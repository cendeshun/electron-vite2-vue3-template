<!--
 * @Description: 应用窗口布局
-->
<template>
  <div class="app-layout-wrapper">
    <Header />
    <div class="app-layout-main">
      <Sidebar />
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import Header from './header/index.vue';
import Sidebar from './sidebar/index.vue'
import AppMain from './AppMain.vue'
</script>

<style lang="scss" scoped>
.app-layout-wrapper {
  width: 100vw;
  height: 100vh;
}
.app-layout-main{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: calc(100vh - $appHeaderHeight);
}
</style>
