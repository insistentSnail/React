import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {

  state = {
    users:[],
    isFirst:true,//是否为第一次打开页面
    isLoading:false,
    err:''//存储请求相关的错误信息
  }


  componentDidMount(){
    // 订阅消息
    this.token = PubSub.subscribe('atguigu',(_,data)=>{
      // 第一个参数是方法名字  atguigu 所以用占位符
      console.log("兄弟组件传值",data)
      this.setState(data)
    })
  }

  componentWillUnmount(){
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    return (
      <div className="row">
        {
          this.state.isFirst? <h2>欢迎第一次来到搜索页</h2>:
          this.state.isLoading?<h2>Loading...</h2>:
          this.state.err? <h2 style={{color:"#f00"}}>{this.state.err}</h2>:
          this.state.users.map(ele=>{
            return(
              <div className="card" key={ele.id}>
                <a href={ele.html_url} target="_blank" rel="noreferrer">
                  <img alt="头像" src={ele.avatar_url} style={{width: "100px"}}/>
                </a>
                <p className="card-text">{ele.login}</p>
              </div>
            )
          })
        }  
      </div>
    )
  }
}
