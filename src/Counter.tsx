import React from 'react';
import './Counter.css';
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";

type CounterType ={
    collapsed: boolean
    onClick:(unCollapsed:boolean) => void
    maxNumb:number
    count: number
    setCount:(setCount:number)=> void
    startCount:number
}

function Counter(props:CounterType) {

    function addInc () {props.setCount(props.count + 1)}

    function reset () {props.setCount(props.startCount)}

    return <div className="Counter">
        <CounterDisplay count={props.count} maxNumb={props.maxNumb}/>
        <CounterButtons addInc={addInc}
                        count={props.count}
                        reset={reset}
                        collapsed={props.collapsed}
                        onClick={props.onClick}
                        maxNumb={props.maxNumb}
        />
    </div>
}

export default Counter