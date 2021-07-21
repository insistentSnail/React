import React, { Component } from 'react'

export default class Count extends Component {

    state = {
      count:0
    }

    increment = ()=>{
      const {value} = this.select
      const {count} = this.state
      // this.setState({count:Number(count)+Number(value)})
      this.setState({count:count+value*1})
    }

    decrement = ()=>{
      const {value} = this.select
      const {count} = this.state
      this.setState({count:count-value*1})
    }
    // 奇数再加
    incrementIfOdd = ()=>{
      const {value} = this.select
      const {count} = this.state
      if(count%2!==0){
        this.setState({count:count+value*1})
      }
    }
    // 异步加
    incrementAsync = ()=>{
      const {value} = this.select
      const {count} = this.state
      setTimeout(()=>{
        this.setState({count:count+value*1})
      },500)
    }

    render() {
        const {count} = this.state
        return (
            <div style={{paddingLeft:'10px'}}>
                <h1>当前求和为：{count}</h1>
                <select ref={c=>this.select = c}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button onClick={this.increment} style={{marginLeft:'10px'}}>+</button>
                <button onClick={this.decrement} style={{marginLeft:'10px'}}>-</button>
                <button onClick={this.incrementIfOdd} style={{marginLeft:'10px'}}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync} style={{marginLeft:'10px'}}>异步加</button>
            </div>
        )
    }
}
