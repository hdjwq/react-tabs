import React, { Component } from 'react';
import {Tabs,TabFade,TabTraverse,TabPan} from './components'
import './components/index.css'
import './App.css'
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
                transitionType="traverse"
                barClick={this.change}>
              <TabTraverse
                  label={<div>你好啊</div>}
                  activeLabel={<div>我好啊</div>}>
                 <div style={{backgroundColor:"red"}}>
                     我是主页啊
                 </div>
              </TabTraverse>
              <TabTraverse label={'发现'}>
                  <div style={{backgroundColor:"blue"}}>
                      我是发现啊
                  </div>
              </TabTraverse>
              <TabTraverse label={'我的'}>
                  <div style={{backgroundColor:"#fff"}}>
                      我是我的啊
                  </div>
              </TabTraverse>
          </Tabs>
      </div>
    );
  }
}

export default App;
