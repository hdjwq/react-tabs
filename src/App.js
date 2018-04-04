import React, { Component } from 'react';
import logo from './logo.svg';
import {Tabs,TabFade,TabTraverse,TabPan} from './components'
import './App.css'
const start=(target,name,dco)=>{
    dco.value=()=>{
        console.log('hdjs')
    }
}
const next=(target,name,dco)=>{
    const me=dco.value;
    dco.value=()=>{
      console.log('mamam')
    }
}
//堆栈机制
class Test{
    @next
    @start
    tt(){
      console.log('fsafsa')
    }
}
class App extends Component {
  constructor(props){
      super(props);
      this.state={
          active:1
      }
  }
  componentDidMount(){

  }
  change=(index)=>{
      this.setState({
           active:index
      })
  }
  render() {
      const {active}=this.state;
    return (
      <div className="App">
          <Tabs active={active}
                barClick={this.change}
                transitionType={'none'}
                barType={"opacity"}
                barBorder={"none"}>
              <TabPan
                  label={<div>你好啊</div>}
                  activeLabel={<div>我好啊</div>}>
                 <div style={{backgroundColor:"red"}}>
                     我是主页啊
                 </div>
              </TabPan>
              <TabPan label={'发现'}>
                  <div style={{backgroundColor:"blue"}}>
                      我是发现啊
                  </div>
              </TabPan>
              <TabPan label={'我的'}>
                  <div style={{backgroundColor:"#fff"}}>
                      我是我的啊
                  </div>
              </TabPan>
          </Tabs>
      </div>
    );
  }
}

export default App;