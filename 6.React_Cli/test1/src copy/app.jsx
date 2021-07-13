import React, { Component } from 'react'
import {NavLink,Route,Link} from 'react-router-dom'
import About from "./pages/About" //路由组件
import Home from "./pages/Home" //路由组件
import Header from './components/Header'//一般组件
export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        {/* 路由器 只能有一个  把App包起来 */}
        {/* <BrowserRouter> */}
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生Html中靠<a>跳转不同的页面 */}
                {/* <a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a> */}

                {/* React中靠路由链接切换组件 */}
                  {/* NavLink默认是添加active类名 */}
                  {/* activeClassName="act" 可指定类名 */}
                  <NavLink className="list-group-item" to="/about">About</NavLink>
                  <NavLink className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                </div>
              </div>
            </div>
          </div>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}
