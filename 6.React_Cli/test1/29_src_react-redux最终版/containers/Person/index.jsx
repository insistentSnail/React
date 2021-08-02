import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'


class Person extends Component {
  add = ()=>{

    const personObj = {
      id:nanoid(),
      name:this.nameNode.value,
      age:this.ageNode.value
    }

    this.props.jiaPerson(personObj)
    this.nameNode.value = ""
    this.ageNode.value = ""
  }
  render() {
    return (
      <div style={{paddingLeft:'10px'}}>
        <h2>Person组件</h2>
        <h2>上方组件总和{this.props.count}</h2>
        <input type="text" placeholder="姓名" ref={e=>this.nameNode = e}/>
        <input type="text" placeholder="年龄" ref={e=>this.ageNode = e}/>
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.persons.map(ele=>{
            return <li key={ele.id}>姓名：{ele.name}--年龄：{ele.age}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state=>({
    persons:state.rens,
    count:state.he
  }),
  {jiaPerson:createAddPersonAction}
)(Person)
