import { RouteRecordRaw } from 'vue-router'
export const menuList: Array<RouteRecordRaw> = [
	{
		path: '/home',
		component: () => import('@src/views/home/index.vue'),
		meta: {
            title:'首页',
        },
	},
  
]
