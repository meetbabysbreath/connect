import React,{PropTypes,Component} from 'react';

import Count from './count';
import Summary from './summary';//总计

class AppComponent extends Component {
  constructor(props,context) {
    super(props,context);//调用super时，要带上context参数，这样才能让React组件初始化实例中的context，不然组件的其他部分就无法使用this.context
    this.state = {
      count : this.context.store.getState().count
    }
  }
  componentDidMount() {
    //监听store值的变化
    this.context.store.subscribe(this.onChange.bind(this))
  }
  componentWillUnmount() {
    //取消监听store值的变化
    this.context.store.unsubscribe(this.onChange.bind(this));
  }
  render() {
    let {count} = this.state;
    return (
      <div>
        <Count captionType = 'first' count={count}/>
        <Count captionType = 'second' count={count}/>
        <Count captionType = 'third' count={count}/>
        <Summary  count={count}/>
      </div>
    );
  }
  /**
   * 当store中的state发生变化时，重新赋当前页面的state值
   */
  onChange() {
    this.setState({
      count : this.context.store.getState().count
    })
  }
}

AppComponent.defaultProps = {
};
/**
 *为了能够访问到context，必须给类的contextTypes赋值和Provider.childContextTYpes一样的值，两者必须保持一致，不然无法访问到context 
 */
AppComponent.contextTypes = {
  store : PropTypes.object
}

export default AppComponent;
