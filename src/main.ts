import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from './router'
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { createRouter } from 'vue-router'

const app = createApp(App)
const pinia = createPinia()
Amplify.configure(outputs);

app.use(pinia)
app.use(router)

app.mount('#app')
