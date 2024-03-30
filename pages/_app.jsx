import Header from '../components/header'
import { Provider } from 'react-redux'

import WhoAmI from '../components/whoAmI'
import createStore from '../store'
// 全局的样式文件只能在 _app.jsx 中使用 
import './global.css'

export default ({Component, ...props}) => {
    return (
        <Provider store={createStore(props.pageProps._initialState)}>
            <WhoAmI />
            <div>
                {/* _app.jsx 每个页面都会渲染的，类似于提供了公共部分，Compoennt 就是每个页面对应的组件内容 */}
                <Header />
                <Component {...props} />
            </div>
        </Provider>
    )
}