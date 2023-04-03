import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@src/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Layout,
		meta: {
			title: '登录页面',
		},
	},
]
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})
export default router
