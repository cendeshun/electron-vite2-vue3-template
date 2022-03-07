/*
 * @Description: 渲染进程预加载脚本, 使渲染进程能使用NodeAPI及electron模块
 */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('Electron', {
  ipcRenderer,
})
