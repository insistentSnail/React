import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件才能用生命周期钩子

function Demo(){

  const [count,setCount] = React.useState(0)

  const [name,setName] = React.useState("")

  const myRef = React.useRef()//和createRef()一样

  function tip(){
    alert(myRef.current.value)
  }

  // 监测改变 不写[]谁都监测(相当于DidMount+DidUpdate)  写了[]谁都不监测(相当于DidMount)
  React.useEffect(()=>{
    // console.log(111)

    // let timer = setInterval(()=>{
    //   setCount(count=>count+1)
    // },1000)

    // return 的函数相当于willUnMount
    return ()=>{
      // clearInterval(timer)
    }

  },[])//[count,name]这样就监测了count和name变化时就会调用这个函数

  function add(){
    // setCount(count+1) //第一种写法
    setCount(count=>count+1)//第二种写法
  }

  function changeName(a){
    setName(a)
  }

  function unMount(){
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
  }

  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>当前求和为:{count}</h2>
      <h2>我的名字是：{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={()=>changeName("liuxin")}>点我改名</button>
      <button onClick={unMount}>卸载组件</button>
      <button onClick={tip}>点我提示</button>
    </div>
  )
}

export default Demo
