import React, { Component } from 'react'
import qs from 'querystring'


const data = [
  {id:"01",content:"你好，零一"},
  {id:"02",content:"你好，零二"},
  {id:"03",content:"你好，零三"}
]

export default class Detail extends Component {
  render() {
    console.log("Detail",this.props)
    // 接收params参数
    // const {id,title} = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const result = qs.parse(search.slice(1))
    // const {id,title} = result

    // 接收state参数
    const {id,title} = this.props.location.state

    const findResult = data.find(ele=>ele.id===id)||{}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
