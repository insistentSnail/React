import React, { Component } from 'react'

export default class A extends Component {

  state = {username:"tom"}

  render() {
    return (
      <div>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{this.state.username}</h4>
        <B name={this.state.username}/>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h3>我是B组件</h3>
        <h4>我的用户名是：{this.props.name}</h4>
        <C {...this.props}/>
      </div>
    )
  }
}

class C extends Component {
  render() {
    return (
      <div>
        <h3>我是C组件</h3>
        <h4>我的用户名是：{this.props.name}</h4>
      </div>
    )
  }
}




