import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import withServerSideProps from '../utils/withServerSideProps'

import { addAction, subActionAsync, subAction, addActionAsync} from '../store/counter/actionCreate'
import createStore from '../store'

function Redux(props) {
    const { count, addNum, subNum, addNumAsync, subNumAsync } = props

    useEffect(() => {
        console.log(22222222222)
    }, [])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => subNumAsync(1)}>异步 -</button>
        <button onClick={() => subNum(1)}>-</button>
        <button onClick={() => addNum(1)}>+</button>
        <button onClick={() => addNumAsync(1)}>异步 +</button>
    </div>
  )
}

function mapStateToProps(state) {
    console.log('state009999', state)
    return {
        count: state.counter.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNum(num) {
            dispatch(addAction(num))
        },
        subNum(num) {
            dispatch(subAction(num))
        },
        addNumAsync(num) {
            dispatch(addActionAsync(num))
        },
        subNumAsync(num) {
            dispatch(subActionAsync(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)

// export async function getServerSideProps() {
//     const store = createStore()
//     await store.dispatch(addActionAsync(1)) 

//     return {
//         props: {
//             _initialState: store.getState()
//         }
//     }
// }

const func = async ({store}) => {
    await store.dispatch(addAction(11)) 
}
export const getServerSideProps = withServerSideProps(func)