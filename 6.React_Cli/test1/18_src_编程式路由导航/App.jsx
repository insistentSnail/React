import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from "./pages/About" //路由组件
import Home from "./pages/Home" //路由组件
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'
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
                  {/* 封装NavLink */}
                  {/* 组件中间的内容可以用props.children接收 */}
                  <MyNavLink to="/about">About</MyNavLink>
                  <MyNavLink to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  {/* 被Switch包裹了  那么一个路径就对应一个组件 */}
                  {/* exact开启精准匹配  一般不开 有时候开启会导致无法匹配二级路由*/}
                  <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    {/* Redirect是重定向  哪个路由都匹配不上的时候就匹配它, 写在注册路由的最下方*/}
                    <Redirect to="/about"></Redirect>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}
