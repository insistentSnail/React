// import logo from './logo.svg';
// import './App.css';
//说明react里面分别用export 和 export default 暴露了组件才可以这样接收
import React,{Component} from "react";
import Helloo from "./component/Hello"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React123
//         </a>
//       </header>
//     </div>
//   );
// }
export default class App extends Component{
  render(){
    return(
      <div>
        <Helloo/>
      </div>
    )
  }
}
// // 暴露App组件
// export default App;
