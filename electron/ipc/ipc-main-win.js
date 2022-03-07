/*
 * @Description: 主渲染进程(主窗口)通信
 */
const global = require('../utils/global');
const { app, BrowserWindow, ipcMain, Menu } = require("electron");

//主窗口最小化
ipcMain.on('main-win-min',(event,msg)=>{
  const win = BrowserWindow.getFocusedWindow(); //BrowserWindow.getFocusedWindow(): 当前获得焦点的窗口
  win.minimize();
})
//主窗口最大化
ipcMain.on('main-win-max',(event,msg)=>{
  const win = BrowserWindow.getFocusedWindow(); //BrowserWindow.getFocusedWindow(): 当前获得焦点的窗口
  if(!win.isMaximized()){ //窗口未最大化
    win.maximize();
  }
  else{
    win.restore();
  }
});
//关闭窗口
ipcMain.on('main-win-close',(event,msg)=>{
  const win = BrowserWindow.getFocusedWindow(); //BrowserWindow.getFocusedWindow(): 当前获得焦点的窗口
  win.close();
});
//打开调试工具
ipcMain.on('main-win-devtools',(event,msg)=>{
  const win = BrowserWindow.getFocusedWindow(); //BrowserWindow.getFocusedWindow(): 当前获得焦点的窗口
  if(!win.webContents.isDevToolsOpened()){  //是否处于打开状态
    win.webContents.openDevTools();
  }
  else{
    win.webContents.closeDevTools();
  }
})
//刷新当前页面
ipcMain.on('main-win-reload',(event,msg)=>{
  const win = BrowserWindow.getFocusedWindow(); //BrowserWindow.getFocusedWindow(): 当前获得焦点的窗口
  win.webContents.reload();
})