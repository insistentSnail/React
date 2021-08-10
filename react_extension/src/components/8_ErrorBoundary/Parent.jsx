import React, { Component } from 'react'
import Child from './Child'

// 错误边界只适用于打包后的文件 捕获生命周期产生的错误 主要是render里的错误

export default class Parent extends Component {

  state = {
    hasError:""//用于标识子组件是否产生错误
  }

  // 如果parent的任何子组件出现报错就会调用这个方法 并携带错误信息
  static getDerivedStateFromError(error){
    console.log(error);
    return {hasError:error}
  }

  componentDidCatch(){
    console.log("渲染组件时出错")
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError?<h2>当前网络不稳定，稍后再试</h2>:<Child/>}
      </div>
    )
  }
}
