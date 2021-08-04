import React, { Component } from 'react'

export default class Demo extends Component {

  state={
    count:0
  }

  add = ()=>{
    // const {count} = this.state
    // this.setState({count:count+1})
    // 第一种写法：对象式setState
    // this.setState({count:count+1},()=>{
    //   console.log(this.state.count)
    // })
    // 第二种写法：函数式setState
    this.setState((state,props)=>{
      return {count:state.count+1}
    })

  }

  render() {
    return (
      <div>
        <h1>当前求和为{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
