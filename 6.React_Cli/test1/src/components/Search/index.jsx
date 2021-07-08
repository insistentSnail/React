import React, { Component } from 'react'
import axios from "axios"

export default class Search extends Component {

  search = ()=>{
    const {keyWordElement:{value}} = this //连续解构赋值
    console.log(value)
    // 发送请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      res => {console.log(res.data,"成功了")},
      error =>{console.log(error,"失败了")}
    )

    this.keyWordElement.value = ""
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
