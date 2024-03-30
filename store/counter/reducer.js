import { ADD_ACTION, SUB_ACTION} from './contants'

const initState = {
    count: 0
}

export default function(state = initState, {type, payload}) {
    switch(type) {
        case ADD_ACTION:
            return {...state, count: state.count + payload}
        case SUB_ACTION:
            return {...state, count: state.count - payload}
        default:
            return state
    }
}