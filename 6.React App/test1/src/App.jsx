import React, { Component } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"

export default class App extends Component {
  state = {
    todos:[
      {id:"001",name:"吃饭",done:true},
      {id:"002",name:"睡觉",done:false},
      {id:"003",name:"打代码",done:true}
    ]
  }

  // 父组件给子组件直接传值  this.props接收就好
  // 子组件给父组件传值   先用父组件给子组件传递一个函数，然后在子组件里面调用这个函数时，把子组件的数据传递过来
  addTodo = (data)=>{
    const {todos} = this.state
    console.log(data,"子组件传递过来的数据")
    this.setState({
      todos:[data,...todos]
    })
    // 因为 this.props 和 this.state 可能会异步更新  这种情况要用这个
    // this.setState((state,props)=>({
    //   todos:[data,...state.todos]
    // }))
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    )
  }
}



