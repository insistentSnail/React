// 创建一个为count组件服务的reducer

export default function countReducer(preState,action){
  console.log(preState,'preState')
  // 初始化的时候
  if(preState === undefined) preState = 0

  const {type,data} = action

  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}