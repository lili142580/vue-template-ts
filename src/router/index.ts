import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@src/layout/index.vue'
import { menuList } from './menuList'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
		component: Layout,
		meta: {
			title: '登录页面',
		},
		children: [...menuList],
	},
	{
		path: '/login',
		component: () => import('@src/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router
