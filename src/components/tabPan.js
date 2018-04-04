import React,{Component} from 'react'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'
@immutableRenderDecorator
class Index extends Component{
    render(){
        const {children,active}=this.props;
       return <div style={{display:active?"block":"none"}}>
           {children}
       </div>
    }
}
export default Index