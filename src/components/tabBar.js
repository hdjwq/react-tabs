import React,{Component} from 'react'
import styles from './tabBar.css'
import {Motion,spring} from 'react-motion'
import PropTypes from 'prop-types'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'
import classNames from 'classnames'
@immutableRenderDecorator
class Index extends Component{
    static propTypes={
           border:PropTypes.string,
           isLast:PropTypes.bool,
           active:PropTypes.bool,
           label:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),
           barType:PropTypes.string,
           barPosition:PropTypes.string
    }
    static defaultProps={
          isLast:true,
          active:false,
          label:"我是tab"
    }
    constructor(props){
        super(props);
        const width=this.props.active?1:0;
        this.state={
             width,
             defaultWidth:width
        }
    }
    componentWillReceiveProps(next){
       const {active}=next;
       const {active:activeNow,barType}=this.props;
       if (active!==activeNow&&barType==='traverse'){
           this.start();
       }
    }
    start=()=>{
        const {width}=this.state;
        this.setState({
            width:width?0:1
        })
    }
    labelDom=()=>{
        const {active,label,activeLabel}=this.props;
        if (active&&activeLabel){
            return activeLabel
        }
        return label
    }
    render(){
        const {border,isLast,click,barType,barPosition}=this.props;
        const {defaultWidth,width}=this.state;
        return <div className={classNames(styles.tabBar,barType==='opacity'?styles.tabBarOpacity:null)} onClick={click}>
            {barType==="traverse"?<Motion defaultStyle={{width:defaultWidth}} style={{width: spring(width)}}>
                {({width}) =><div className={styles["tabBarLan"+barPosition]}
                                  style={{width:width*100+"%"}}/>}
            </Motion>:null}
            <div className={styles.barContent}>
                {this.labelDom()}
            </div>
            {(!isLast||border==='none')?<div className={styles[border]}/>:null}
            </div>
    }
}
export default Index