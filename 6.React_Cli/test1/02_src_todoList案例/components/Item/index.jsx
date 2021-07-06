import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {

  state = {
    mouse:false
  }
  // 鼠标移入移出事件
  handleMouse = (val)=>{
    return ()=>{
      this.setState({
        mouse:val
      })
    }
  }
  // 勾选事件
  handleCheck = (id)=>{
    return (e)=>{
      // console.log(id,e.target.checked)
      this.props.currentId(id,e.target.checked)
    }
  }

  // 删除事件
  handleRemove = (id)=>{
    return ()=>{
      if(window.confirm("确定删除吗")){
        this.props.removeId(id)
      }
    }
  }

  render() {
    const {name,done,id} = this.props
    const {mouse} = this.state
    return (
      <li style={{background:mouse?"#ddd":"#fff"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse?"block":"none"}} onClick={this.handleRemove(id)}>删除</button>
      </li>
    )
  }
}

