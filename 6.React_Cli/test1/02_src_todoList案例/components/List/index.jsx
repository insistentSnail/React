import React, { Component } from 'react'
import PropTypes from "prop-types"
import Item from "../Item"
import "./index.css"

export default class List extends Component {

   // 对接收的props进行类型和必要性的限制
   static propTypes = {
    todos:PropTypes.array.isRequired,
    currentId:PropTypes.func.isRequired,
    removeId:PropTypes.func.isRequired
  }

  render() {
    const {todos,currentId,removeId} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(el=>{
            return <Item {...el} key={el.id} currentId={currentId} removeId={removeId}/>
          })
        }
      </ul>
    )
  }
}

