import { useState } from "react"
import Count from "./Count"
import withLog from "./HOC/withLog";
const withCount = withLog(Count);
export function FunctionComponent() {
    const [visibleCount, setVisibleCount] = useState<boolean>(true)
    return (
        <div>
            {visibleCount &&
                <withCount ></withCount>
            }
            <button onClick={() => setVisibleCount(!visibleCount)}>{visibleCount ? '隐藏' : '显示'}</button>
        </div>
    )
}