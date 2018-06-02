import React,{Component} from 'react';
export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let {count} = this.props;
        let sum = 0;
        for(const key in count) {
            if (count.hasOwnProperty(key)) {
                sum += count[key];
            }
        }
        return (
            <div>
                总计：{sum}
            </div>
        )
    }
}