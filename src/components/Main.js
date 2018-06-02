import React,{Component} from 'react';

import Count from './count';
import Summary from './summary';//总计
import store from 'stores';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : store.getState().count
    }
  }
  componentDidMount() {
    //监听store值的变化
    store.subscribe(this.onChange.bind(this))
  }
  componentWillUnmount() {
    //取消监听store值的变化
    store.unsubscribe(this.onChange.bind(this));
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
      count : store.getState().count
    })
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
