import request from './request'
import cookie from 'cookie'

import { isBrowser } from '../utils/isBrowser'

export async function login(loginId, loginPwd, axios = request) {
    const res = await axios.post('/api/user/login', {
        loginId,
        loginPwd
    })

    return res.data
}

export async function whoAmI(axios = request) {
    const res = await axios.get('/api/user/whoami')

    return res.data
}

export function loginOut() {
    if (isBrowser()) {
        const result = cookie.serialize('token', '', {
            maxAge: 0
        })
    
        document.cookie = result
    }
}