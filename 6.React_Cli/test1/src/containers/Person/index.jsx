import { nanoid } from 'nanoid'
import React, { Component } from 'react'

export default class Person extends Component {
  add = ()=>{

    const personObj = {
      id:nanoid(),
      name:this.nameNode.value,
      age:this.ageNode.value
    }


    console.log(personObj)
  }
  render() {
    return (
      <div style={{paddingLeft:'10px'}}>
        <h2>Person组件</h2>
        <input type="text" placeholder="姓名" ref={e=>this.nameNode = e}/>
        <input type="text" placeholder="年龄" ref={e=>this.ageNode = e}/>
        <button onClick={this.add}>添加</button>
        <ul>
          <li>姓名：刘鑫--年龄：25</li>
          <li>姓名：刘鑫--年龄：25</li>
          <li>姓名：刘鑫--年龄：25</li>
        </ul>
      </div>
    )
  }
}
