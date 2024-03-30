import makeStore from '../store/index'
import {getServerSideInstance} from '../services/request'

export default function(func) {
    return async function(props) {
        const store = makeStore()
        props.store = store

        const axios = getServerSideInstance(props.req)
        props.axios = axios

        let result = await func(props)
        result = result || {}
        return {
            props: {
                _initialState: store.getState(),
                ...result
            }
        }
    }
}