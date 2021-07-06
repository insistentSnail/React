import React, { Component } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"

export default class App extends Component {

  // 状态在哪里，操作状态的方法就在哪里

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
  // 用于更新一个todo对象 孙组件修改爷组件的值
  currentId = (id,done)=>{
    const {todos} = this.state
    console.log(id,done)
    const newTodos = todos.map(el=>{
      if(el.id===id){
        return {...el,done:done}
      }else{
        return el
      }
    })
    this.setState({todos:newTodos})
  }

  // 删除
  removeId = (id)=>{
    const {todos} = this.state
    todos.forEach((el,index)=>{
      if(el.id===id){
        todos.splice(index,1)
      }
    })
    this.setState({todos})
  }

  // 点击全选
  allCheck = (isAllChecked)=>{
    const {todos} = this.state
    if(isAllChecked){
      todos.forEach(el=>el.done=true)
    }else{
      todos.forEach(el=>el.done=false)
    }
    this.setState({todos})
  }

  // 清除已完成任务
  clearDoneTodos = ()=>{
    const {todos} =  this.state
    const newTodos = todos.filter(el=>el.done!==true)
    this.setState((state,props)=>({todos:newTodos}))
  }

  render() {
    const {todos} = this.state
    const checkTodos = todos.filter(el=>el.done===true)
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} currentId={this.currentId} removeId={this.removeId}/>
          <Footer allLength={todos.length} checkLength={checkTodos.length} allCheck={this.allCheck} clearDoneTodos={this.clearDoneTodos}/>
        </div>
      </div>
    )
  }
}



