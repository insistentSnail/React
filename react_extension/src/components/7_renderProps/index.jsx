import React, { Component } from 'react'
import './index.css'

// children props 和 render props
export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* <A>
          <B/>
        </A> */}
        <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {

  state = {name:'lx'}

  render() {
    console.log(this.props)
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>我是B组件</h3>
        {this.props.name}
      </div>
    )
  }
}
