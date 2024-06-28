import React from 'react'
import GrandParent from '../class/render/GrandParent'
export default class ClassComponent extends React.Component
{
  render()
  {
    return (
      <div>
        <GrandParent></GrandParent>
      </div>
    )
  }
}