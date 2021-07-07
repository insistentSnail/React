import React, { Component } from 'react'

export default class Search extends Component {

  search = ()=>{
    const {keyWordElement:{value}} = this //连续解构赋值
    console.log(value)
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
