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
                  {/* params传参 */}
                  {/* <Link to={`/home/message/detail/${ele.id}/${ele.title}`}> {ele.title}</Link> */}

                  {/* search传参 类似vue的query*/}
                  {/* <Link to={`/home/message/detail/?id=${ele.id}&title=${ele.title}`}> {ele.title}</Link> */}

                  {/* state传参 */}
                  <Link to={{pathname:'/home/message/detail',state:{id:ele.id,title:ele.title}}}> {ele.title}</Link>

                  {/* 三种传参方式刷新页面数据都不会丢失 */}

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>

      </div>
    )
  }
}
