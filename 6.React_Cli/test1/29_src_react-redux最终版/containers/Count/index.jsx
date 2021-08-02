import React, { Component } from 'react'

// 容器组件
// 引入ui组件
// import CountUI from '../../components/Count'
// 引入redux 容器组件的store不能靠自己引入 需要上层props传过来
// import store from '../../redux/store'
// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux'


import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'

// mapStateToProps函数返回值返回{key：value}  state即store.getState()
// const mapStateToProps = state =>({count:state})

// const mapDispatchToProps = dispatch =>({
//   // 通知redux执行加方法
//   jia:data=>dispatch(createIncrementAction(data)),
//   jian:data=>dispatch(createDecrementAction(data)),
//   jiaAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
// })

// 定义ui组件
class CountUI extends Component {

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
    this.props.jia(value*1)
  }

  decrement = ()=>{
    const {value} = this.select
    this.props.jian(value*1)
  }
  // 奇数再加
  incrementIfOdd = ()=>{
    const {value} = this.select
    if(this.props.count%2!==0){
      this.props.jia(value*1)
    }
  }
  // 异步加
  incrementAsync = ()=>{
    const {value} = this.select
    this.props.jiaAsync(value*1,500)
  }

  render() {

    console.log(this.props,"ui组件接收的props")

      // const {count} = this.state
      return (
          <div style={{paddingLeft:'10px'}}>
              <h2>Count组件</h2>
              <h4>当前求和为：{this.props.count},下方组件总人数为{this.props.renshu.length}</h4>
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


// 创建并暴露一个Count容器组件

// 简写方式 react-redux帮你dispatch分发
export default connect(
  state =>({
    count:state.he,
    renshu:state.rens
  }),
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
  }
  )(CountUI)
