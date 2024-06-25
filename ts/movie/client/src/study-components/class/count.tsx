import React from 'react';
import propTypes from 'prop-types';
interface CountProp {
    count: number
}

export default class Count extends React.Component<CountProp> {
    static propTypes = {
        count: propTypes.number
    }
    render(){
        return (<div>{this.props.count}</div>)
    }
}
// Count.defaultProps = {
//     count: 1
// }