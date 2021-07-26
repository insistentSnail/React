import React, { Component } from 'react'
import store from '../../redux/store'
// 引入actionCreator
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {

    // state = {
    //   count:0
    // }

      // 写在index里，就不用所有组件都写了
    // componentDidMount(){
    //   // 检测redux中状态的变化，只要变化，就调用render
    //   store.subscribe(()=>{
    //     this.setState({})
    //   })
    // }

    increment = ()=>{
      const {value} = this.select
      // const {count} = this.state
      // // this.setState({count:Number(count)+Number(value)})
      // this.setState({count:count+value*1})

      // 通知redux加value
      // store.dispatch({type:'increment',data:value*1})
      store.dispatch(createIncrementAction(value*1))
    }

    decrement = ()=>{
      const {value} = this.select
      // const {count} = this.state
      // this.setState({count:count-value*1})
      // store.dispatch({type:'decrement',data:value*1})
      store.dispatch(createDecrementAction(value*1))
    }
    // 奇数再加
    incrementIfOdd = ()=>{
      const {value} = this.select
      // const {count} = this.state
      const count = store.getState()
      if(count%2!==0){
        // store.dispatch({type:'increment',data:value*1})
        store.dispatch(createIncrementAction(value*1))
      }
    }
    // 异步加
    incrementAsync = ()=>{
      const {value} = this.select
      // const {count} = this.state
      // setTimeout(()=>{
        // store.dispatch({type:'increment',data:value*1})
        store.dispatch(createIncrementAsyncAction(value*1,500))
      // },500)
    }

    render() {
        // const {count} = this.state
        return (
            <div style={{paddingLeft:'10px'}}>
                <h1>当前求和为：{store.getState()}</h1>
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
