import {ADD_PERSON} from '../constant'
const initState = [{id:'001',name:"tom",age:18}]
// 初始化状态和加工状态  personReducer必须是纯函数
export default function personReducer(preState,action){
  console.log(preState,"personPreState")
  if(preState === undefined) preState = initState

  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}