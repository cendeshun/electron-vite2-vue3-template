<!--
 * @Description: 路由容器
-->
<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-main{
  width: calc(100vw - $appSidebarWidth);
  height: calc(100vh - $appHeaderHeight);
  overflow: hidden;
  overflow-y: auto;
}
</style>
