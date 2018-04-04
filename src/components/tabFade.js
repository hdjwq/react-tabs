import React,{Component} from 'react'
import {Motion,spring} from 'react-motion'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'
import PropTypes from 'prop-types'
@immutableRenderDecorator
class Index extends Component{
    static propTypes={
           active:PropTypes.bool,
           zIndex:PropTypes.number
    }
    static defaultProps={
           active:false,
           zIndex:0
    }
    constructor(props){
        super(props);
        const {active}=this.props;
        this.state={
              defaultOpacity:active?100:0,
              opacity:active?100:0,
        }
    }
    componentWillReceiveProps(next){
       const {active:activeNext}=next;
       const {active}=this.props;
       const {opacity}=this.state;
       if (active!==activeNext){
            this.setState({
                opacity:opacity?0:100
            })
       }
    }
    render(){
        const {defaultOpacity,opacity}=this.state;
        const {children}=this.props;
        return <Motion defaultStyle={{opacity:defaultOpacity}} style={{opacity: spring(opacity)}}>
            {({opacity}) =>{
                return <div className={"tab-opacity"}
                            style={{opacity:opacity/100}}>
                    {children}
                </div>
            }}
        </Motion>
    }
}

export default Index