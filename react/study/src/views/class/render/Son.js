import React from 'react';
export default class Son extends React.Component {
    state = {
        value: '1'
    }
    componentDidMount() {
        console.log('Son componentDidMount')
    }
    componentDidUpdate() {
        console.log('Son componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('Son componentWillUnmount')
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }}
                />
            </div>
        )
    }
}