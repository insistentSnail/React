import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </>
      // Fragment可以加key值，和vue template作用一样
      // <Fragment key={1}>
      //   <input type="text" name="" id="" />
      //   <input type="text" name="" id="" />
      // </Fragment>
    )
  }
}
