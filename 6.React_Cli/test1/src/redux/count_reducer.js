// 创建一个为count组件服务的reducer


import {INCREMENT,DECREMENT} from './constant'

export default function countReducer(preState,action){
  console.log(preState,'preState')
  // 初始化的时候
  if(preState === undefined) preState = 0

  const {type,data} = action

  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}