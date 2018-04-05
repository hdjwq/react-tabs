import React, { Component } from 'react';
import {Tabs,TabPan} from '../components/index'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            active:0
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
            <div>
                <Tabs active={active}
                      barClick={this.change}
                      transitionType="none"
                      barPosition="top"
                >
                    <TabPan
                        label={<div>主页</div>}
                        activeLabel={<div style={{color:"blue"}}>主页</div>}>
                        <div style={{backgroundColor:"red"}}>
                            我是主页哦
                        </div>
                    </TabPan>
                    <TabPan label={'发现'}
                                 activeLabel={<div style={{color:"blue"}}>发现</div>}>
                        <div style={{backgroundColor:"blue"}}>
                            我是发现哦
                        </div>
                    </TabPan>
                    <TabPan label={'我的'}
                                 activeLabel={<div style={{color:"blue"}}>我的</div>}>
                        <div style={{backgroundColor:"#fff"}}>
                            我是我的哦
                        </div>
                    </TabPan>
                </Tabs>
            </div>
        );
    }
}

export default App;
