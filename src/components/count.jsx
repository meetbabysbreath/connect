import React,{Component} from 'react';
import Action from 'actions';
import store from 'stores';
import connect from './connect';//模拟connect
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let {captionType,count} = this.props;
        return (
            <div>
                <button onClick={()=>{this.handleAdd()}} style={{marginRight:'10px'}}>+</button>
                <button onClick={()=>{this.handleSub()}} style={{marginRight:'10px'}}>-</button>
                <span>{captionType+'：'+count[captionType]}</span>
            </div>
        )
    }
    /**
     * 加1
     */
    handleAdd() {
        let {captionType} = this.props;
        store.dispatch({
            type        : Action.count.ADD,
            captionType : captionType
        })
    }
    /**
     * 减1
     */
    handleSub() {
        let {captionType} = this.props;
        store.dispatch({
            type        : Action.count.SUB,
            captionType : captionType
        })
    }
}
const mapStateToProps = (state)=>({
    count : state.count
})
const mapDispatchToProps = (dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Count);