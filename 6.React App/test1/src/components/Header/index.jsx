import React, { Component } from 'react'
import {nanoid} from "nanoid"
import "./index.css"
// nanoid 生成独一无二的随机数 和uuid一样 但是包更小
export default class Header extends Component {

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
  // 事件和获取的value值在同一个元素上面就不需要使用ref
  handleKeyUp = (e)=>{
    if(e.keyCode===13){
      if(e.target.value.trim()===""){
        alert("输入不能为空")
        return 
      }
      const todo = {id:nanoid(),name:e.target.value,done:false}
      this.props.addTodo(todo)
      e.target.value = ""
    }
  }
}

