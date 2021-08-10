import React, { Component } from 'react'


// 错误边界，子组件的错误不影响父组件的渲染
export default class Child extends Component {

  state = {
    // user:[
    //   {id:"001",name:"小明",age:18},
    //   {id:"002",name:"小华",age:27},
    //   {id:"003",name:"小王",age:25}
    // ]
    user:""
  }

  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {this.state.user.map(el=>{
          return <h4 key={el.id}>我的名字{el.name}，年龄{el.age}</h4>
        })}
      </div>
    )
  }
}