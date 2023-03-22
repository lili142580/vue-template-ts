import { userInfoStore } from '@store/modules/userInfo'
import { storeToRefs } from 'pinia'
const authority = {
	authority: {
		mounted(el: Element, binding: any) {
			const $store = userInfoStore()
			const { userInfo } = storeToRefs($store)
			console.log(userInfo.value.limits)
			console.log(el, binding)
			binding.value && userInfo.value.limits.some((item: string) => item === binding.value) ? el.remove() : ''
		},
	},
}
export default authority
