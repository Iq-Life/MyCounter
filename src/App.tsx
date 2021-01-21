import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Set from "./Set";

function App() {

    const [startNumb, setStartNumb] = useState(0)
    const [maxNumb, setMaxNumb] = useState<number>(5)
    const [count, setCount] = useState(startNumb)
    const [collapsed, unCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <header className="App-header">
                <Counter onClick={unCollapsed}
                         collapsed={collapsed}
                         maxNumb={maxNumb}
                         count={count}
                         setCount={setCount}
                         startNumb={startNumb}

                />
                {collapsed && <Set maxNumb={maxNumb}
                                   setMaxNumb={setMaxNumb}
                                   setCount={setCount}
                                   startNumb={startNumb}
                                   setStartNumb={setStartNumb}
                />}
            </header>
        </div>
    );
}

export default App;