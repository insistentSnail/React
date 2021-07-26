// 容器组件
// 引入ui组件
import CountUI from '../../components/Count'
// 引入redux 容器组件的store不能靠自己引入 需要上层props传过来
// import store from '../../redux/store'
// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux'


import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// mapStateToProps函数返回值返回{key：value}  state即store.getState()
function mapStateToProps(state){
  return {count:state}
}

function mapDispatchToProps(dispatch){
  return {
    // 通知redux执行加方法
    jia:data=>dispatch(createIncrementAction(data)),
    jian:data=>dispatch(createDecrementAction(data)),
    jiaAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
  }
}

// 创建并暴露一个Count容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
