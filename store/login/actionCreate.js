import { LOGIN } from './contants'
import { login, whoAmI, loginOut} from '../../services/login'


export const setUserAction = (user) => ({
    type: LOGIN,
    payload: user
})

export const loginUser = (loginId, loginPwd) => {
    return async function(dispatch) {
        const res = await login(loginId, loginPwd)
        if (res) {
            dispatch(setUserAction(res.data))
            return true
        } else {
            dispatch(setUserAction(null))
            return false
        }
    }
}

export const whoamiAction = (axios) => {
    return async function(dispatch) {
        const res = await whoAmI(axios)
        if (res) {
            dispatch(setUserAction(res.data))
            return true
        } else {
            dispatch(setUserAction(null))
            return false
        }
    }
}

export const loginout = () => {
    return function() {
        loginOut()
    }
}