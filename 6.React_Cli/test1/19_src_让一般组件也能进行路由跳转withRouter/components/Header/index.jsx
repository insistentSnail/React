import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  // 一般组件如何进行路由跳转  withRouter可以加工一般组件，让一般组件具备路由组件所特有的api

  back = ()=>{
    this.props.history.goBack()
  }

  forward = ()=>{
    // == this.props.history.go(1)
    this.props.history.goForward()
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>后退</button>&nbsp;
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }
}

export default withRouter(Header)
