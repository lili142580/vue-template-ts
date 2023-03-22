import request from "@utils/request";

export const getTestAPI = () => {
    return request({
        url: '/api/test',
        method: 'get'
    })
}