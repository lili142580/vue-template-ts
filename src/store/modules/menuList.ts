import { defineStore } from 'pinia'
export const menuListStore = defineStore('menu', {
	state: () => {
		return {
	      menList:[]
		}
	},
    actions:{
        aaa(){
            console.log('111')
        }
    },
	// 开启数据缓存
	persist: {
		enabled: true,
	},
})
