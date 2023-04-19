import axios from 'axios'
import { message } from 'ant-design-vue'
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
declare module 'axios' {
	interface AxiosInstance {
		(config: AxiosResponse): Promise<any>
	}
}

export default class Axios {
	instance: any
	baseURL: string
	headers: any
	requestInstance: any // 请求拦截实例
	responseInstance: any // 响应拦截实例

	constructor(option: any) {
		this.baseURL = option.baseURL || undefined
		this.headers = option.headers || {
			'Content-Type': 'application/json',
		}
		this.init()
	}
	request(config: any) {
		return new Promise((resolve, reject) => {
			this.instance
				?.request(config)
				.then((response: any) => {
					resolve(response)
				})
				.catch((err: Error) => {
					reject(err)
				})
		})
	}
	async init() {
		this.instance = axios.create({
			baseURL: this.baseURL,
			headers: this.headers,
			timeout: 60000,
		})

		this.requestInstance = this.instance.interceptors.request.use(
			function (config: InternalAxiosRequestConfig) {
				return config
			},
			function (error: Error) {
				// 对请求错误做些什么
				return Promise.reject(error)
			}
		)

		// 添加响应拦截器
		this.responseInstance = this.instance.interceptors.response.use(
			function (response: any) {
				console.log(response.config.silent)
				if (response.data.code == 401) {
				}
				let dataSource = response.data
				//silent 为true
				if (response.config.silent) {
					switch (dataSource.code) {
						case 200:
							message.success(dataSource.message)
							break
						case 404:
							message.error('接口不存在')
							break
						case 500:
							message.error(dataSource.message)
							break
						default:
							message.warning(dataSource.message)
							break
					}
					return dataSource
				}
				return dataSource
			},
			function (error: Error) {
				try {
					console.log('error', error)
					return Promise.reject(error)
				} catch {
					// 对响应错误做点什么
					return Promise.reject(error)
				}
			}
		)
	}
}
