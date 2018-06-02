import {PropTypes,Component} from 'react';
export default class Provider extends Component {
    /**
     * 此函数返回的就是代表Context的对象
     */
    getChildContext() {
        return {
            store : this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
}
/**
 * 为了让Provider能够被React认可为一个Context的提供者，还需要指定Provider的childContextTypes的属性
 */
Provider.childContextTypes = {
    store : PropTypes.object
}