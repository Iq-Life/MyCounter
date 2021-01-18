import React, {useState} from 'react';
import './Counter.css';
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";

type CounterType ={
    collapsed: boolean
    onClick:(unCollapsed:boolean) => void
    maxNumb:number
    count: number
    setCount:(setCount:number)=> void
}

function Counter(props:CounterType) {



    const [error, setError] = useState<boolean>(false)




    function addInc () { props.count < props.maxNumb ? props.setCount(props.count + 1) :  setError(true)}

    function reset () {
        props.setCount(props.count)
        setError(false)
    }

    return <div className="Counter">
        <CounterDisplay count={props.count} status={error}/>
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