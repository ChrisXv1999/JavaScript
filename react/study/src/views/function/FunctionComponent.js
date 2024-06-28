import Son from '../class/render/Son'
import KeepAlive from './KeepLive/KeepLive'
import { useEffect, useRef } from 'react'
export default function FunctionComponent() {
  const sonRef = useRef();
  useEffect(()=>{
    console.log(sonRef);
  },[])
  return (
    <div>
      <h1>FunctionComponent</h1>
      <KeepAlive include={/MyComponent/}>
        <Son></Son>
        <Son></Son>
      </KeepAlive>
      <Son ref={sonRef}></Son>

    </div>
  )
}