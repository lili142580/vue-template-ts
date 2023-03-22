import { defineStore } from 'pinia'
export const useCountStore = defineStore('count', {
	state: () => {
		return {
			count: 1,
		}
	},
	actions: {
		accumulate() {
			this.count++
		},
	},
})
