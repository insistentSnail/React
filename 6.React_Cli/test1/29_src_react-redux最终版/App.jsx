import React, { Component } from 'react'
// import Count from './components/Count'
import Count from './containers/Count' //容器组件
import Person from './containers/Person'
// import store from './redux/store'
export default class App extends Component {

  render() {
    return (
      <div>
        {/* <Count store={store}/> */}
        <Count/>
        <hr />
        <Person/>
      </div>
    )
  }
}
