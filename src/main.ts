import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/antd.css';
createApp(App).use(router).use(Antd).mount('#app')
