import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {

  state = {
    messageArr:[
      {id:"01",title:"消息1"},
      {id:"02",title:"消息2"},
      {id:"03",title:"消息3"}
    ]
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map(ele=>{
              return (
                <li key={ele.id}>
                  <Link to={`/home/message/detail/${ele.id}/${ele.title}`}> {ele.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
      </div>
    )
  }
}
