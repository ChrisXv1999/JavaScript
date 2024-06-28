import React from 'react';
import Son from './Son';
export default class Parent extends React.Component {
    componentDidMount() {
        console.log('Parent componentDidMount');
    }
    componentDidUpdate() {
        console.log('Parent componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('Parent componentWillUnmount');
    }
    render() {
        return (
            <div>
                <h1>Parent</h1>
            </div>
        )
    }
}