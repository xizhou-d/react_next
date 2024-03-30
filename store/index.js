import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';

import countReducer from './counter/reducer'
import loginReducer from './login/reducer'
import { isBrowser } from '../utils/isBrowser';

let store;

const reducer = combineReducers({
    counter: countReducer,
    login: loginReducer
})

/**
 * 创建仓库的函数
 * 该函数保证，如果是服务器端，每一次调用产生一个新的仓库
 * 如果是客户端，每一次调用返回同一个仓库
 * @param {*} initialState 仓库的初始值
 */
export default function(initialState) {
    if (isBrowser()) {
        // 客户端
        if (store) {
            // console.log('client yes')
            return store // 返回已有仓库
        } else {
            // console.log('client no')
            store = create(initialState)
        }
    }
    return create(initialState)
}

function create(initialState) {
    return createStore(
        reducer,
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    ) 
}