import React, {useState} from 'react';
import './Counter.css';
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";

function Counter() {

    const [count, setCount] = useState(0)
    let [error, setError] = useState<boolean>(false)

    function addInc () { count < 5 ? setCount(count + 1) :  setError(true)}

    function reset () {
        setCount(0)
        setError(false)
    }

    return <div className="Counter">
        <CounterDisplay count={count} status={error}/>
        <CounterButtons addInc={addInc} count={count} reset={reset}/>
    </div>
}

export default Counter