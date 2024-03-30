import axios from 'axios'

// 判断是服务端还是客户端
let instance;

if (typeof window === 'undefined') {
    instance = getServerSideInstance()
} else {
    instance = axios.create()
}

export default instance

// 单独为服务器创建一个 axios 实例，这里可以获取 cookie
export function getServerSideInstance(req) {
    const config = {
        baseURL: 'http://yuanjin.tech:5100/'
    }
    if (req) {
        const cookies = req.cookies
        const token = cookies.token

        if (token) {
            config.headers = {
                authorization: token
            }
        }
    }

    return axios.create(config)
}