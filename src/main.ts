import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import directive from './directive/index'
import store from './store'
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
	console.log(err, instance, info, '===1')
}
app.use(router).use(Antd).use(store).use(directive).mount('#app')
