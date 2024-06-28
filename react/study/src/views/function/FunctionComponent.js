import useForceUpdate from "./hooks/useForceUpdate"
import Count from "./components/count/Count";
import ClassCount from "../class/components/count/Count";
import { useCallback } from "react";
export default function FunctionComponent() {
  const forceUpdate = useForceUpdate();
  const submitValue = useCallback(() => {
    console.log('submitValue')
  },[])
  return (
    <div>
      <Count></Count>
       <button onClick={forceUpdate}>forceUpdate</button>
    </div>
  )
}