import { createRef, useEffect } from "react";
import useCount from "../hooks/useCount";
import propTypes from 'prop-types'
export default function useCounter(props) {
    const buttonRef = createRef();
    let { count, setCount } = useCount(1)
    function add(e) {
        props.triggerChange();
    }
    function addCount() {
        setCount(++count)
    }
    useEffect(() => {
        console.log(buttonRef);
        return function () {
            console.log('end');
        }
    }, [count])
    return (
        <div>
            {props.count}
            <div><button ref={buttonRef} onClick={add}>+1</button></div>
            {count}
            <div><button onClick={addCount}>+1</button></div>
        </div>
    );
}
useCounter.propTypes = {
    count: propTypes.number,
    triggerChange: function (props, propKey, componentName) {
        console.log(props, propKey, componentName);
    }
}