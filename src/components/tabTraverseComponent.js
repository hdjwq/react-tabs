import React,{Component,cloneElement} from 'react'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'
import {Motion,spring} from 'react-motion'
import styles from './tabs.css'
@immutableRenderDecorator
class Index extends Component{
    constructor(props){
        super(props);
        const {active,oneSize}=this.props;
        this.state={
            defaultLeft:oneSize*active,
            left:oneSize*active,
        }
    }
    componentWillReceiveProps(next){
        const {active:activeNext,oneSize}=next;
        const {active}=this.props;
        if (active!==activeNext){
            this.setState({
                left:oneSize*activeNext
            })
        }
    }
    render(){
        const {defaultLeft,left}=this.state;
        const {size,component,oneSize}=this.props;
        return <Motion defaultStyle={{left:defaultLeft}} style={{left:spring(left)}}>
            {({left})=>{
                return <div className={styles.tabTraverse}
                            style={{width:100*size+"%",transform:`translate3d(${-left}%,0px,0px)`}}>
                    {component.map((item,index)=>{
                        return cloneElement(item,{width:oneSize,key:index});
                    })}
                </div>
            }}
        </Motion>
    }
}
export default Index