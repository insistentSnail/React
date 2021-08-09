import React, { Component,PureComponent } from 'react'
import "./index.css"

export default class Parent extends PureComponent {

  state = {carName:'奔驰G63',stu:['小李','小肖','小江']}

  changeCar = ()=>{
    this.setState({carName:'帕拉梅拉'})//只要setState就会render，子组件也会随父组件render
  }

  addStu = ()=>{
    // PureComponent的bug
    // const arr = this.state.stu
    // arr.unshift("小刘")
    // this.setState({stu:arr}) //这样不行
    this.setState({stu:['小刘',...this.state.stu]})
  }

  // PureComponent帮你判断了，数据改变了才render

  // shouldComponentUpdate(nextProps,nextState){
  //   if(this.state.carName === nextState.carName) return false
  //   else return true
  // }

  render() {
    console.log("parent--render")
    const {carName,stu} = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <h4>{stu}</h4>
        <h4>我的车：{carName}</h4>
        <button onClick={this.addStu}>添加一个小刘</button>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate(nextProps,nextState){
  //   if(this.props.carName === nextProps.carName) return false
  //   else return true
  // }

  render() {
    console.log("child--render")
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <h4>我接到的车：{this.props.carName}</h4>
      </div>
    )
  }
}
