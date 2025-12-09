import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n';

const app = createApp(App);

app.use(router); // 將路由注入到 Vue 應用中
app.use(i18n);
app.mount("#app");