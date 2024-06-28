
import React, { useState } from 'react';
import Son from './Son';
export default function GrandParent() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <h1>GrandParent</h1>
            {visible ? <Son key={1}/> : <Son key={2}/>}
            <button onClick={() => setVisible(!visible)}>{visible ? '隐藏' : '显示'}</button>
        </div>
    )
}