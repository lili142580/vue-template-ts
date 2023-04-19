import { MockMethod } from 'vite-plugin-mock'

const mock: Array<MockMethod> = [
    {
		// 接口路径
		url: '/api/login',
		// 接口方法
		method: 'post', // 返回数据
		response: () => {
			return {
				code: 200,
				message: 'success',
				data: {
                    token:'1231231231231312'
                },
			}
		},
	},
]

export default mock
