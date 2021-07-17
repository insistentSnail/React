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

  repalceShow = (id,title)=>{
    console.log(id,title,"replace",this.props)
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }

  pushShow = (id,title)=>{
    console.log(id,title,"push",this.props)
    // params传参
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // search传参
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    // state传参
    // this.props.history.push({pathname:'/home/message/detail',state:{id,title}})
    // 简写
    this.props.history.push('/home/message/detail',{id,title})
  }

  back = ()=>{
    // == this.props.history.go(-1)
    this.props.history.goBack()
  }

  forward = ()=>{
    // == this.props.history.go(1)
    this.props.history.goForward()
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
                  <Link to={`/home/message/detail/${ele.id}/${ele.title}`}> {ele.title}</Link>

                  &nbsp;<button onClick={()=>this.pushShow(ele.id,ele.title)}>push查看</button>

                  {/* 这样传参是不行的 */}
                  {/* &nbsp;<button onClick={this.repalceShow(ele.id,ele.title)}>replace查看</button> */}
                  &nbsp;<button onClick={()=>this.repalceShow(ele.id,ele.title)}>replace查看</button>

                  {/* search传参 类似vue的query*/}
                  {/* <Link to={`/home/message/detail/?id=${ele.id}&title=${ele.title}`}> {ele.title}</Link> */}

                  {/* state传参 */}
                  {/* 默认是push模式跳转路由，加了replace就不会往history里面添加路由记录 */}
                  {/* <Link replace to={{pathname:'/home/message/detail',state:{id:ele.id,title:ele.title}}}> {ele.title}</Link> */}

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

        <button onClick={this.back}>后退</button>&nbsp;
        <button onClick={this.forward}>前进</button>

      </div>
    )
  }
}
