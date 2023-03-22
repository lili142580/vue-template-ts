import type { App } from 'vue'
import focus from './focus' //自动聚焦
import dounce from './dounce'
import authority from './authority' //权限
let directives: any = { ...focus, ...dounce, ...authority }
//全局自定义注册指令
export default {
	install(app: App<Element>) {
		Object.keys(directives).forEach((item: string) => {
			app.directive(item, directives[item])
		})
	},
}
