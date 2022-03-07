<template>
  <div class="app-header-menu">
    <div class="menu-item" @click="reloadWin">
      <el-icon size="16px" color="#ccc"><refresh /></el-icon>
    </div>
    <div class="menu-item" @click="openDevTools">
      <tool-outlined class="tool-icon" />
    </div>
    <div class="menu-item" @click="minWin">
      <el-icon size="16px" color="#fff"><minus /></el-icon>
    </div>
    <div class="menu-item" @click="maxWin">
      <el-icon size="16px" color="#fff"><full-screen /></el-icon>
    </div>
    <div class="menu-item" @click="closeWin">
      <el-icon size="16px" color="#fff"><close-bold /></el-icon>
    </div>
  </div>
</template>

<script setup>
const { ipcRenderer } = window.Electron;  //window.Electron: 由渲染进程预加载脚本注入
import { ToolOutlined } from '@ant-design/icons-vue';
import { Refresh, Minus, CloseBold, FullScreen  } from '@element-plus/icons-vue';
import { ref, onBeforeMount } from 'vue';

onBeforeMount(() => {

})
//刷新当前页面
const reloadWin = () => {
  ipcRenderer.send('main-win-reload');
}
//打开调试工具
const openDevTools = () => {
  ipcRenderer.send('main-win-devtools');
}
//窗口最小化
const minWin = () => {
  ipcRenderer.send('main-win-min');
}
//窗口最大化
const maxWin = () => {
  ipcRenderer.send('main-win-max');
}
//关闭窗口
const closeWin = () => {
  ipcRenderer.send('main-win-close');
}

</script>

<style lang="scss" scoped>
.app-header-menu{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding-top: 6px;
  padding-right: 25px;
}
.menu-item{
  margin-left: 20px;
  cursor: pointer;
}
.tool-icon{
  @include font(16px,#bbb);
  position: relative;
  top: -2px;
}
</style>