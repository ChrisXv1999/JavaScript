import React from 'react';
import Parent from './Parent';
import Son from './Son';
export default class GrandParent extends React.Component {
    state = {
       wealth: 1000,
       visible: true,
       list: [<h1>GrandParent </h1>,<p>wealth</p>, <Parent />]
    }
    componentDidUpdate() {
        console.log('grandparent componentDidUpdate')
    }
    componentDidMount() {
        console.log('grandparent componentDidMounted')
    }


    render() {
        return (
            <div style={{opacity:0}}>
                {/* {this.state.list} */}
                {this.state.visible ? <Son /> : <Son />}
                <button onClick={()=>this.setState({})}>+1</button><br/>
                <button onClick={()=>this.setState({visible:!this.state.visible})}>{this.state.visible ? 'hidden' : 'show'}</button><br/>
                <button onClick={()=>this.setState({list:[<h1>GrandParent </h1>, <Parent />]})}>change</button>
            </div>
        )
    }
}