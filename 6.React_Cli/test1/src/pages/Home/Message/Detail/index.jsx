import React, { Component } from 'react'


const data = [
  {id:"01",content:"你好，零一"},
  {id:"02",content:"你好，零二"},
  {id:"03",content:"你好，零三"}
]

export default class Detail extends Component {
  render() {
    console.log("Detail",this.props)
    const {id,title} = this.props.match.params
    // const findResult = data.find(ele=>ele.id===id)
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{data.find(ele=>{ return ele.id===id}).content}</li>
      </ul>
    )
  }
}
