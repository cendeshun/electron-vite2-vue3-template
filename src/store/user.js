/*
 * @Description: user store
 */

import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      token: "", //user token
    };
  },
  actions: {
    saveToken(token) {
      this.token = token;
    },
  },
  persist: {
    // 开启数据缓存
    key: "user-store",
    enabled: true,
    strategies: [
      {
        storage: sessionStorage, //缓存位置
        paths: [], // 缓存部分数据
      },
      {
        storage: localStorage,
        paths: ["token"],
      },
    ],
  },
});
