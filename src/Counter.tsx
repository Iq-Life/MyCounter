import React, {useState} from 'react';
import './Counter.css';
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";

type CounterType ={
    collapsed: boolean
    onClick:(unCollapsed:boolean) => void
}

function Counter(props:CounterType) {

    const [count, setCount] = useState(0)
    const [error, setError] = useState<boolean>(false)

    function addInc () { count < 5 ? setCount(count + 1) :  setError(true)}

    function reset () {
        setCount(0)
        setError(false)
    }

    return <div className="Counter">
        <CounterDisplay count={count} status={error}/>
        <CounterButtons addInc={addInc}
                        count={count}
                        reset={reset}
                        collapsed={props.collapsed}
                        onClick={props.onClick}/>
    </div>
}

export default Counter