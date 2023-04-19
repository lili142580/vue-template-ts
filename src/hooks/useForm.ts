import { ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
interface UserForm {
	api: (...args: any) => Promise<any>
	callback: (...args: any) => void
}

export const useForm = (UserForm: UserForm) => {
	const { api, callback } = UserForm
	const formRef = ref<FormInstance | null>(null)
	const formState = ref<any>({})
	const submit = () => {
		formRef.value?.validate().then(async () => {
			let { data, code } = await api(formState.value)
			if (code === 200) {
				callback && callback(data)
			}
		})
	}
	const formReset = () => {
		formRef.value?.resetFields()
	}
	return {
		formState,
		submit,
		formRef,
		formReset,
	}
}
