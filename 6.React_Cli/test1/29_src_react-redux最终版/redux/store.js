// createStore 创建redux中的store对象

import {createStore,applyMiddleware} from 'redux'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducer from "./reducers/index"




// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

