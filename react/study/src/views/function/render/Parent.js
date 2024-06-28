import React from 'react';
import Son from './Son';
export default function Parent() {
    return (
        <div>
            <h1>GrandParent</h1>
            <Son />
        </div>
    )
}