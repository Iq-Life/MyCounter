import React, {useState} from 'react';
import './Counter.css';

type CounterType = {
}

function Counter() {
    const incStyle = {
        fontSize: "25px",
        borderRadius: "25px",
        backgroundColor: "#61dafb"
    }
    const resetStyle = {
        fontSize: "25px",
        marginLeft: "10px",
        backgroundColor: "#61dafb",
        borderRadius: "5px"
    }

    const [count, setCount] = useState(0)
    const addInc = () => { count < 5? setCount(count + 1) : setCount(count)}
    const reset = () => { setCount(count - 5) }


    return <div className="Counter">
        <div className="display">{count}</div>
        <div className="buttons">
            <span><button style={incStyle}
                          onClick={addInc}
                          disabled={count === 5}
            >inc</button></span>
            <span><button style={resetStyle}
                          onClick={reset}
                          disabled={count < 5}
            >reset</button></span>
        </div>
    </div>
}

export default Counter