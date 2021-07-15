import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    console.log(this.props)

    return (
      <NavLink className="list-group-item" {...this.props}>
        {/* 标签上 children={this.props.children} 等于 标签内部{this.props.children} */}
        {/* 可省略 */}
        {/* {this.props.children} */}
      </NavLink>
    )
  }
}
