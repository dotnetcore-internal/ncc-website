import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/app.css";
import './main.css'
import 'animate.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#App");
