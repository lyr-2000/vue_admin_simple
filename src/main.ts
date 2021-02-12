import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/main.css'

import '@/assets/icon/iconfont.css'
import 'ant-design-vue/dist/antd.css'
import { Menu,Layout,Icon } from 'ant-design-vue';
const app = createApp(App)
  .use(store)
  .use(router)
app.use(Menu)
app.use(Layout)
app.use(Icon)



app.mount("#app");

