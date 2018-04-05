import React, { Component } from 'react';
import Fade from './demo/fade'
import Traverse from './demo/traverse'
import None from './demo/none'
import './components/index.css'
import './App.css'
class App extends Component {
  constructor(props){
      super(props);
      this.state={
          index:0,
          lx:['fade',"traverse","none"],
          component:[Fade,Traverse,None]
      }
  }
  componentDidMount(){

  }

  render() {
      const {index,lx,component}=this.state;
      const Component=component[index];
    return (
      <div className="App">
          <Component/>
         <div className="navBar">
             {lx.map((item,i)=>{
                 return <div className={i===index?"btn":null}
                              key={i}
                              onClick={()=>{
                                  this.setState({
                                      index:i
                                  })
                              }}>{item}</div>
             })}
         </div>
      </div>
    );
  }
}

export default App;
