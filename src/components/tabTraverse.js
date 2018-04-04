import React,{Component} from 'react'
import styles from './index.css'

class Index extends Component{
    render(){
        const {width,children}=this.props;
        return <div className={styles.tabTraverse} style={{width:width+"%"}}>
            {children}
        </div>
    }
}
export default Index