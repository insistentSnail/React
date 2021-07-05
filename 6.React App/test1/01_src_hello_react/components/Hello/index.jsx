import React,{Component} from "react"
// import "./index.css"
import hello from "./index.module.css"
// 样式模块化

export default class Hello extends Component{
  render(){
    return(
      <h2 className={hello.title}>
        hello,react!
      </h2>
    )
  }
}