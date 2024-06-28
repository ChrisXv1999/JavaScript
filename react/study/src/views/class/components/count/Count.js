import { Component, PureComponent, useEffect, useState } from "react"
export default class Count extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        console.log('class render')
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+1</button>
            </div>
        )
    }
}