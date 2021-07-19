import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
// import 'antd/dist/antd.css' 全部样式
import { WechatOutlined } from '@ant-design/icons';

// 定义在类外面 onChange={onChange}这样调用
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

export default class App extends Component {

  onChange = (date, dateString)=>{
    console.log(date, dateString,1111);
  }

  render() {
    return (
      <div>
        App...
        <Button type="primary">Primary Button</Button>
        <button>点我</button>
        <WechatOutlined style={{ fontSize: '64px' }} />
        <DatePicker onChange={this.onChange} />
      </div>
    )
  }
}
