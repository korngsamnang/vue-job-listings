import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification"; // Add this line
import "vue-toastification/dist/index.css"; // Add this line
import "@/assets/main.css";
import "primeicons/primeicons.css";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(Toast); // Add this line

app.mount("#app");
