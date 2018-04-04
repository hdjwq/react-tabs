import React,{Component,cloneElement} from 'react'
import PropTypes from 'prop-types'
import TabBar from './tabBar'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'
import TabTraverseComponent from './tabTraverseComponent'
import cx from 'classnames'
import {List} from 'immutable'
@immutableRenderDecorator
class Index extends Component{
    static propTypes={
           type:PropTypes.string,
           active:PropTypes.number,
           barClick:PropTypes.func,
           transitionType:PropTypes.string,
           barType:PropTypes.string,
           barBorder:PropTypes.string,
           barPosition:PropTypes.string
    }
    static defaultProps={
          type:"full",
          active:0,
          barClick:()=>{

          },
          transitionType:"fade",
          barType:"traverse",
          barBorder:"int",
          barPosition:"bottom"
    }
    constructor(props){
         super(props);
         this.clName="wang-react-tabs";
         this.barClass="tab-bar-content";
         this.state={
             end:false
         }
    }
    barClick=(index,e)=>{
        this.props.barClick(index,e)
    }
    fade=(immList)=>{
        return immList.map(this.makeClone);
    }
    makeClone=(item,index)=>{
        const {active:activeIndex}=this.props;
        let active=activeIndex===index;
        return cloneElement(item,{active,key:index});
    }
    traverse=(immList)=>{
        const len=immList.size;
        const {active}=this.props;
        const oneSize=100/len;

        return <TabTraverseComponent
                     size={len}
                     active={active}
                     oneSize={oneSize}
                     component={immList}/>
    }
    none=(immList)=>{
        return immList.map(this.makeClone);
    }
    barDom=(immList)=>{
        const {active:activeIndex,barType,barBorder,barPosition}=this.props;
        const {barClass}=this;
        return <div className={cx(barClass,`${barClass}-${barPosition}`)}>
            {immList.map(({props},index)=>{
                let isLast=false;
                const active=(activeIndex===index);
                if (immList.size===index+1){
                    isLast=true
                }
                return <TabBar key={index}
                               isLast={isLast}
                               active={active}
                               label={props.label}
                               activeLabel={props.activeLabel}
                               barType={barType}
                               border={barBorder}
                               barPosition={barPosition}
                               click={(e)=>{
                                   !active&&this.barClick(index,e)
                               }}
                />
            })}
        </div>
    }
    render(){
        const {type,children,transitionType,barPosition}=this.props;
        const immList=List(children);
        const {clName}=this;
        return <div className={cx(clName,`${clName}-${type}`)}>
            {barPosition==='top'?this.barDom(immList):null}
              <div className={"tab-content"}>
                  {this[transitionType](immList)}
              </div>
            {barPosition==='bottom'?this.barDom(immList):null}
        </div>
    }
}
export default Index