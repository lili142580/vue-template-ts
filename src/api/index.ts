import Axios from '@utils/request'
import type { Login, config } from './type'
const axios = new Axios({
	// baseURL: import.meta.env.VITE_BASE_URL,
	baseURL: '',
})

export const getLogin = (params: Login, config?: config) => {
	return axios.instance.post('/api/login', params, config)
}
