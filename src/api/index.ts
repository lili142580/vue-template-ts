import request from "@src/utils/request";

export const getTestAPI = () => {
    return request({
        url: '/api/test',
        method: 'get'
    })
}