/*
 * @Description: 清空打包输出文件夹
 */

const fs = require("fs");
const path = require("path");

function clearFiles(path) {
  let files = [];
  if (fs.existsSync(path)) {
    //检测路径是否存在
    files = fs.readdirSync(path); //读取路径
    files.forEach(function (file) {
      let curDir = path + "/" + file;
      let stats = fs.statSync(curDir);
      if (stats.isDirectory()) {
        //检测路径是否是文件夹
        clearFiles(curDir); //递归子文件夹
      } else {
        fs.unlinkSync(curDir); //删除文件
      }
    });
    fs.rmdirSync(path); //删除文件夹
  }
}
clearFiles(`${path.join(__dirname, '../build')}`)