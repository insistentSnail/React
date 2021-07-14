import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route,Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">message</MyNavLink>
            </li>
          </ul>
          <div>
            {/* 注册路由 路由的匹配都是按照路由注册顺序来的*/}
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"></Redirect>
          </div>
        </div>
      </div>
    )
  }
}
