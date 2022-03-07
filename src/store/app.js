/*
 * @Description: 应用状态
 */

import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      online: window.navigator?.onLine || false, //网络连接状态 true:连网 false: 断网
    };
  },
  actions: {
    //更新网络状态
    updateOnline(val) {
      this.online = val;
    },
  },
});
