import React from "react"
import ReactDOM from "react-dom"
// import {BrowserRouter} from 'react-router-dom'
import App from "./App.jsx"
import store from "./redux/store"

ReactDOM.render(<App/>,document.querySelector("#root"))
// 只要store里面的状态变化就重新render
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.querySelector("#root"))
})
