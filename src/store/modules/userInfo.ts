import { defineStore } from 'pinia'
export const userInfoStore = defineStore('user', {
	state: () => {
		return {
			userInfo: {
				limits: ['sts:delete', 'sts:add', 'sts:edit'],
			},
		}
	},
	// 开启数据缓存
	persist: {
		enabled: true,
	},
})
