import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ mode }) => {
  //mode: 运行环境
  //loadEnv(mode, process.cwd()) : .env.xxx文件中定义的变量
  // process.cwd() 项目根目录
  const ENV = loadEnv(mode, process.cwd());
  const outDir = `${process.cwd()}/build/web`; //打包输出路径 需配合electron入口main.js
  const assetsDir = "static"; //静态资源文件夹
  return {
    plugins: [
      vue(),
    ],
    root: `${process.cwd()}/src`, 
    base: `./`,
    optimizeDeps: {
      
    },
    build: {
      //打包配置
      outDir: outDir, // 输出位置
      assetsDir: assetsDir, //指定生成静态资源的存放路径（相对于 build.outDir
      emptyOutDir: true,
      reportCompressedSize: false,  //启用/禁用 gzip 压缩大小报告
      rollupOptions: {
        //自定义底层的 Rollup 打包配置
        output: {
          chunkFileNames: `${assetsDir}/js/[name].[hash].js`, //将打包后的js/css文件分离到对应文件夹
          entryFileNames: `${assetsDir}/js/[name].[hash].js`,
          assetFileNames: `${assetsDir}/[ext]/[name].[hash].[ext]`,
          manualChunks(id) {  //对依赖包/库进行代码分割
            if (id.includes('node_modules')) {
              let libname = id.toString().split('node_modules/')[1].split('/')[0].toString();
              return libname;
            }
          },
          external: ["electron"], // 告诉 Rollup 不要去打包 electron
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@views": path.resolve(__dirname, "src/views"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          //传递值sass-loader配置, 引入全局scss
          additionalData: ` 
            @import "@/styles/mixins.scss";
            @import "@/styles/variables.scss";
          `,
        },
      },
    },
    server: {
      //本地开发服务器
      host: "0.0.0.0",
      strictPort: true, // * 固定端口(如果端口被占用则中止)
      open: false,
      port: 3000, //端口与Electron入口html相关联
      cors: true,
    },
  };
});
