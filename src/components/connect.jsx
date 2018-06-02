import React,{Component} from 'react';
const doNothing = ()=>({});
function connect(mapStateToProps=doNothing,mapDispatchToProps=doNothing) {
    return function(WrappedComponent) {
        class HOCComponent extends Component {
            //这里定义HOCComponent的生命周期函数
            constructor() {
                super(...arguments);
                this.onChange = this.onChange.bind(this);
                this.store = {};
            }
            componentDidMount() {
                this.context.store.subscribe(this.onChange);
            }
            componentWillUnmount() {
                this.context.store.unsubscribe(this.onChange);
            }
            onChange() {
                this.setState({});
            }
            render() {
                const store = this.context.store;
                const newProps = {
                    ...this.props,
                    ...mapStateToProps(store.getState()),
                    ...mapDispatchToProps(store.dispatch)
                }
                return <WrappedComponent {...newProps}/>
            }
        }
        //定义contextTypes属性，从context中获取store的值
        HOCComponent.contextTypes= {
            store : React.PropTypes.object
        }
        return HOCComponent;
    }
}
export default connect;