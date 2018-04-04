import React,{Component} from 'react'


class Index extends Component{
    render(){
        const {width,children}=this.props;
        return <div className={"tab-traverse-component"} style={{width:width+"%"}}>
            {children}
        </div>
    }
}
export default Index