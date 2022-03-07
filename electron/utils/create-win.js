/*
 * @Description: 创建渲染进程(窗口)
 */
const path = require("path");
const { app, BrowserWindow } = require("electron");

module.exports = {
  createWindow: function(url='',options={}){
    const baseWin = {
      width: 1200,
      height: 720,
      show: false,
      center: true, // 是否出现在屏幕居中的位置
      frame: false, //设置为 false 时可以创建一个无边框窗口
      resizable: true, //窗口是否可以改变尺寸
      useContentSize: true, //Boolean - width和 height使用web网页size
      titleBarStyle: "hidden", //窗口标题栏的样式
      webPreferences: {
        preload: path.join(__dirname, '../preload/preload.js'), //使用预加载脚本向渲染进程注入NodeAPI及ElectronAPI
        
      },
    }
    let newwin = new BrowserWindow(Object.assign({},baseWin,options));
    //删除窗口的菜单栏
    newwin.removeMenu();
    //加载窗口html
    const ENV = process.env.NODE_ENV;   //运行环境
    let html = url ? url : ENV === "development" ? "http://localhost:3000" : `file://${path.join(__dirname, '../../build/web/index.html')}`;
    newwin.loadURL(html);
    //优化窗口显示
    newwin.once("ready-to-show", () => {
      newwin.show();
    });
    return newwin;
  }
}