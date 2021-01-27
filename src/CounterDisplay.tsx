import React from 'react';
import s from './CounterDisplay.module.css';

type CounterDisplayType = {
    count: number
    maxNumb:number
}

function CounterDisplay(props:CounterDisplayType) {
 let classForDisplay = props.count >= props.maxNumb ?  s.errorMessage : s.display

    return <div>
        <div className={classForDisplay}>{props.count}</div>
    </div>
}

export default CounterDisplay
