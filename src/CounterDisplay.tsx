import React from 'react';
import s from './CounterDisplay.module.css';

type CounterDisplayType = {
    count: number
    status: boolean
}

function CounterDisplay(props:CounterDisplayType) {
 let classForDisplay = props.status ?  s.errorMessage : s.display
    return <div>
        <div className={classForDisplay}>{props.count}</div>
    </div>
}

export default CounterDisplay
