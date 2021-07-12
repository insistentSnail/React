import React, { Component } from 'react'
// import axios from "axios"
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = async()=>{
    const {keyWordElement:{value}} = this //连续解构赋值
    console.log(value)

    // this.props.updateAppState({isFirst:false,isLoading:true})
    // 发布消息
    PubSub.publish("atguigu",{isFirst:false,isLoading:true})

    // 发送请求
    // axios.get(`/api1/search/users?q=${value}`).then(
    //   res => {
    //     console.log(res.data,"成功了")

    //     // this.props.updateAppState({isLoading:false,users:res.data.items})
    //     // 发布消息
    //     PubSub.publish("atguigu",{isLoading:false,users:res.data.items})

    //   },
    //   error =>{
    //     console.log(error,"失败了")
    //     // this.props.updateAppState({isLoading:false,err:error.message})
    //     // 发布消息
    //     PubSub.publish("atguigu",{isLoading:false,err:error.message})
    //   }
    // ).catch(
    //   error=>{console.log(error,"catch失败了")}
    // )


    // fetch发请求    和   xhr  的区别，jq的ajax和axios是对XMLHttpRequest的封装
    // 优化写法，catch统一处理错误
    // fetch(`/api1/search/users2?q=${value}`).then(
    //   response=>{
    //     // response.json()只能使用一次
    //     console.log("联系服务器成功了",response)
    //     return response.json()
    //   },
    //   // error=>{
    //   //   console.log("联系服务器失败了",error)
    //   //   return new Promise(()=>{})
    //   // }
    // ).then(
    //   res=>{console.log("获取数据成功了",res)},
    //   // error=>{console.log("获取数据失败了",error)}
    // ).catch(
    //   error=>{console.log(error)}
    // )


    // fetch 再次优化
    try {
      const response = await fetch(`/api1/search/users2?q=${value}`)
      const data = await response.json()
      PubSub.publish("atguigu",{isLoading:false,users:data.items})
      console.log("data",data)
    } catch(error){
      console.log("请求出错",error)
      PubSub.publish("atguigu",{isLoading:false,err:error.message})
    }

  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c=>this.keyWordElement = c} type="text" placeholder="输入关键词进行搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
