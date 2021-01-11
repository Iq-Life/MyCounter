import React from 'react';
import s from './CounterDisplay.module.css';

type CounterDisplayType = {
    count: number
    status: boolean
}

function CounterDisplay(props:CounterDisplayType) {

    return <div>
        <div className={ props.status ?  s.errorMessage : s.display }>{props.count}</div>
    </div>
}

export default CounterDisplay
