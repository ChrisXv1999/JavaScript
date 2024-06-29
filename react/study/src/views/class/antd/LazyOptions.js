import { Cascader } from 'antd';
import React from 'react';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  isLeaf: false,
}];

export default class LazyOptions extends React.Component {
  state = {
    options,
    defaultValue: ['zhejiang','dynamic1'],
    value: ['zhejiang'],
  };
  onChange = (value, selectedOptions) => {
    const isChange = !value.every((v,idx)=>{
      return v === this.state.defaultValue[idx];
    })
    const newState = {
      value
    }
    if(isChange){
      newState.defaultValue = value;
    }
    this.setState(newState)
  }
  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      const newState = {
        options: [...this.state.options],
      }
      const idx = this.state.defaultValue.findIndex((val)=>val===targetOption.value);
      if(idx >-1 && this.state.defaultValue.length-1 > idx) {
        debugger
        newState.value = [...this.state.value, this.state.defaultValue[idx+1]]
      }
      this.setState(newState);
    }, 1000);
  }
  displayRender = (value)=>{
    return this.state.defaultValue.join('/')
  }
  render() {
    return (
      <Cascader
        displayRender = {(value)=>this.displayRender(value)}
        value={this.state.value}
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}