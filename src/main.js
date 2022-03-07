import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./router/router-guard"; //路由守卫

//UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./styles/index.scss";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
