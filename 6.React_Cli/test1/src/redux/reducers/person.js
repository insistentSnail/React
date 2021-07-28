import {ADD_PERSON} from '../constant'
const initState = [{id:'001',name:"tom",age:18}]
// 初始化状态和加工状态
export default function personReducer(preState,action){
  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}