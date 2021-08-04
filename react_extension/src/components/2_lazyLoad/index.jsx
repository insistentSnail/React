import React, { Component,lazy,Suspense} from 'react'
import {NavLink,Route} from 'react-router-dom'

import Loading from './Loading'

// import About from "./About"
// import Home from "./Home"

const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))

export default class Demo extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        {/* 路由器 只能有一个  把App包起来 */}
        {/* <BrowserRouter> */}
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">

                {/* React中靠路由链接切换组件 */}
                  <NavLink className="list-group-item" to="/about">About</NavLink>
                  <NavLink className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Suspense fallback={<Loading/>}>
                  {/* 注册路由 */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}

