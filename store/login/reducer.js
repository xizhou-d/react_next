import { LOGIN } from './contants'

const initState = {
    user: null 
}

export default function(state = initState, {type, payload}) {
    switch(type) {
        case LOGIN: 
            return {...state, user: payload}
        default:
            return state
    }
}