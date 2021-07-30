// 为Count组件生产action对象

import {INCREMENT,DECREMENT} from '../constant.js'

import store from '../store'

// 同步action，就是指action的值为一般对象
export const createIncrementAction = data=>({type:INCREMENT,data})

export const createDecrementAction = data=>({type:DECREMENT,data})
// 异步action，就是指action的值为函数，异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data,time)=>{
  console.log(data,time,111)
  return (dispatch)=>{
    console.log(data,time,222,dispatch)
    setTimeout(()=>{
      // return ({type:INCREMENT,data}) 为什么这样不行
      store.dispatch(createIncrementAction(data))
    },time)
  }
}
