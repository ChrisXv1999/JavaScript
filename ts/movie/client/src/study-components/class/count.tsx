import propTypes from 'prop-types';
interface CountProp {
    count: number
}

export default function Count(props:CountProp ){
    return (<div>{props.count}</div>)
}
// Count.defaultProps = {
//     count: 1
// }
Count.propTypes = {
    count: propTypes.number
}