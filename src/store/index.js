/*
 * @Description: 状态管理Pinia
 */

import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; //数据持久化

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
