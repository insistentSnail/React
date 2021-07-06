import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {
  // 全选
  handleChange = (e)=>{
    this.props.allCheck(e.target.checked)
  }

  // 清除已完成任务
  clearDone = ()=>{
    this.props.clearDoneTodos()
  }

  render() {
    const {allLength,checkLength} = this.props
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleChange} checked={(checkLength===allLength&&allLength!==0)?true:false}/>
        </label>
        <span>
          <span>已完成{checkLength}</span> / 全部{allLength}
        </span>
        <button className="btn btn-danger" onClick={this.clearDone}>清除已完成任务</button>
      </div>
    )
  }
}

