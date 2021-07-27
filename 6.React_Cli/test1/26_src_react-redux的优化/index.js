import React from "react"
import ReactDOM from "react-dom"
// import {BrowserRouter} from 'react-router-dom'
import App from "./App.jsx"
import store from "./redux/store"
import {Provider} from 'react-redux'

// App里所有的容器组件都能收到store
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.querySelector("#root")
)
// 用了react-redux就不用再监测了

// 只要store里面的状态变化就重新render
// store.subscribe(()=>{
//   ReactDOM.render(<App/>,document.querySelector("#root"))
// })
