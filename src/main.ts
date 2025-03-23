import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index.ts";
import { vuetify } from "./vuetify.ts";
import "@mdi/font/css/materialdesignicons.css";
import "./assets/scss/main.scss";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
