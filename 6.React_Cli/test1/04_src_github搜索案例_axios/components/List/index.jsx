import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.isFirst? <h2>欢迎第一次来到搜索页</h2>:
          this.props.isLoading?<h2>Loading...</h2>:
          this.props.err? <h2 style={{color:"#f00"}}>{this.props.err}</h2>:
          this.props.users.map(ele=>{
            return(
              <div className="card" key={ele.id}>
                <a href={ele.html_url} target="_blank" rel="noreferrer">
                  <img alt="头像" src={ele.avatar_url} style={{width: "100px"}}/>
                </a>
                <p className="card-text">{ele.login}</p>
              </div>
            )
          })
        }  
      </div>
    )
  }
}
