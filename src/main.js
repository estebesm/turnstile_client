import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "@/App.vue";
import router from "@/router";
import notifications from "@kyvg/vue3-notification";

import "@/assets/main.css";
import "@/assets/animations.css";

const app = createApp(App)
  .use(createPinia())
  .use(createHead())
  .use(router)
  .use(notifications);

app.mount("#app");
