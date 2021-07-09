import React, { Component } from 'react'
import axios from "axios"

export default class Search extends Component {

  search = ()=>{
    const {keyWordElement:{value}} = this //连续解构赋值
    console.log(value)

    this.props.updateAppState({isFirst:false,isLoading:true})

    // 发送请求
    axios.get(`/api1/search/users?q=${value}`).then(
      res => {
        console.log(res.data,"成功了")

        this.props.updateAppState({isLoading:false,users:res.data.items})

      },
      error =>{
        console.log(error,"失败了")
        this.props.updateAppState({isLoading:false,err:error.message})
      }
    ).catch(
      error=>{console.log(error,"catch失败了")}
    )

    // this.keyWordElement.value = ""
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
