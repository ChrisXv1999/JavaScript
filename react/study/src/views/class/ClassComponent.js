import React from 'react'
import GrandParent from '../class/render/GrandParent'
import LazyOptions from './antd/LazyOptions'
export default class ClassComponent extends React.Component
{
  render()
  {
    return (
      <div>
        <LazyOptions></LazyOptions>
        {/* <GrandParent></GrandParent> */}
      </div>
    )
  }
}