import { ADD_ACTION, SUB_ACTION } from './contants'

async function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export const addAction = (num) => ({ type: ADD_ACTION, payload: num})

export const subAction = (num) => ({ type: SUB_ACTION, payload: num})

export const addActionAsync = (num) => {
    return async function(dispatch) {
        await delay(1000)
        dispatch(addAction(num))
    }
}

export const subActionAsync = (num) => {
    return async function(dispatch) {
        await delay(1000)
        dispatch(subAction(num))
    }
}