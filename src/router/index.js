/*
 * @Description: 项目路由
 */

import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/home",
    component: () => import("../views/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/user",
    component: () => import("../views/user/index.vue"),
    meta: {
      title: "我的",
    },
  },
];

/*
  Electron打包后路由无效问题解决方法: (1)路由使用hash模式 (2)history模式下, 应用启动后手动跳转主页 router.push('/')
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //import.meta.env.BASE_URL: 应用基础路径
  routes,
});
export default router;
